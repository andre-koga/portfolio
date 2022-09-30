// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "6e7mei75", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: "2022-09-29",
  token:
    "skkctJy3XAcZZJSywnFYRkeCmscUgIGiGhzIiOWxofsTs6a6jbIRN8aniLIgjpDeL1CBdQa9ZPy5a4q6EUlVoUeaXjIvJcMexBO62PGvJDuju47L8aylHOi4zi4aPrCvMbOvBtKKv7frMbTJABvzzwuZUpquAvHDiltJmMNeAztXdHnrNhPk",
  useCdn: true, // `false` if you want to ensure fresh data
});
