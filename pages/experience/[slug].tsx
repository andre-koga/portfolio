import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import client from "../../client";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type Props = {
  post: any;
  prev: any;
  next: any;
};

const Post = ({ post, prev, next }: Props) => {
  return (
    <article className="bg-stone-200">
      <div className="min-h-screen">
        <div className="experience-image bg-stone-800">
          <Image
            src={urlFor(post?.image).url()}
            style={{ objectPosition: post.objectPosition }}
            className="h-[15vmin] w-full rounded-b-xl object-cover"
          />
        </div>
        <div className="hover-pepper flex min-h-[35vh] bg-stone-800">
          <a
            className={prev?.slug ? "" : "pointer-events-none"}
            href={prev?.slug ? "/experience/" + prev.slug.current : ""}
          >
            <div className="flex h-full items-center border-r-2 border-stone-200">
              <p
                className={
                  "px-[2vmin] font-jet text-[8vmin] " +
                  (prev?.slug ? "arrow text-stone-200" : "text-stone-800")
                }
              >
                ⤶
              </p>
            </div>
          </a>
          <div className="flex-grow py-8 px-4">
            <p className="text-center font-jet text-[2.5vmin] text-stone-400">
              {post.date}
            </p>
            <h1 className="my-8 w-full pr-6 text-center font-rox text-[12vmin] leading-[1.2em] text-stone-200">
              {post?.title}
            </h1>
            <p className="px-12 text-center font-jet text-[3vmin] text-stone-400">
              {post.short}
            </p>
          </div>
          <a
            className={next?.slug ? "" : "pointer-events-none"}
            href={next?.slug ? "/experience/" + next.slug.current : ""}
          >
            <div className="flex h-full items-center  border-l-2 border-stone-200">
              <p
                className={
                  "px-[2vmin] font-jet text-[8vmin] " +
                  (next?.slug ? "arrow text-stone-200" : "text-stone-800")
                }
              >
                ⤷
              </p>
            </div>
          </a>
        </div>
        <div className="experience-grid min-h-[50vh] md:grid">
          <div className="achievements border-b-2 border-stone-800 md:border-b-0 md:border-r-2">
            <h2 className="active mx-[4vmin] my-[2vmin] font-flex text-[6vmin]">
              Achievements
            </h2>
            {post.long?.map((item: any, i: number) => {
              return (
                <div key={i} className="m-[2vmin] flex">
                  <div className="mr-[2vmin] flex items-center justify-items-center rounded-md bg-pepper px-2 font-jet text-[4vmin] text-stone-200">
                    <p>{i + 1}</p>
                  </div>
                  <p className="rounded-md border-2 border-stone-800 p-[2vmin] font-jet text-[3vmin] font-bold text-stone-800">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="tools-used">
            <h2 className="active mx-[4vmin] my-[2vmin] font-flex text-[6vmin]">
              Tools Used
            </h2>
            <div className="m-[2vmin] flex flex-wrap gap-[2vmin]">
              {post.tools?.map((tool: any, i: number) => {
                return (
                  <div
                    key={i}
                    className="rounded-md border-2 border-stone-800 px-2 py-1"
                  >
                    <p className="whitespace-nowrap font-jet text-[3vmin] font-bold text-stone-800">
                      {tool}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <PortableText value={post.long} /> */}
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "experience" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `*[_type == "experience" && slug.current == $slug][0]`,
    { slug }
  );
  let prev = "";
  if (post.previous) {
    const prevRef = post.previous?._ref;
    prev = await client.fetch(
      `*[_id == $prevRef][0]{
        slug
      }`,
      { prevRef }
    );
  }
  let next = "";
  if (post.next) {
    const nextRef = post.next?._ref;
    next = await client.fetch(
      `*[_id == $nextRef][0]{
        slug
      }`,
      { nextRef }
    );
  }

  return {
    props: {
      post,
      prev,
      next,
    },
  };
}

export default Post;
