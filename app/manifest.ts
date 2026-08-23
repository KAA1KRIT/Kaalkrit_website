import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "[MANIFEST NAME PLACEHOLDER]",
    short_name: "[MANIFEST SHORT NAME PLACEHOLDER]",
    description: "[MANIFEST DESCRIPTION PLACEHOLDER]",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f3bc16",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
