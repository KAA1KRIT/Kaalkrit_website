import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Team KAALKRIT",
    short_name: "KAALKRIT",
    description:
      "Team KAALKRIT is the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru — building autonomous aerial systems, robotics, and intelligent engineering solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070c",
    theme_color: "#377dff",
    icons: [
      {
        src: "/icon.png",
        sizes: "1536x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
