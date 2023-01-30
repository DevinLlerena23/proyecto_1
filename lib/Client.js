import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "n96qwj4r",
  dataset: "production",
  apiVersion: "2023-01-28",
  useCdn: true,
  token:
    "skcBLGE37DUcaRoCCUdvlbpHdWiUnsU4tMIJUCKVU06ti5XC34kRTgDelfejbH1kcTSqKTT6gbBgP3X9d64PB8gGiidqbwv6lP7zDvJ1WAXBQxkVJKG98rEeLpQr0NSIhDXagKjGkY92xs3KoZv7p6BZCq8aXACLTP3FXbyXA9CqoBsQHWxC",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
