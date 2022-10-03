import client from "../../client";
import { PortableText } from "@portabletext/react";

type Props = {
  post: any;
};

const Post = ({ post }: Props) => {
  return (
    <article>
      <h1>{post?.title}</h1>
      {/*<PortableText value={post.long} />*/}
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
    `
    *[_type == "experience" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
}

export default Post;
