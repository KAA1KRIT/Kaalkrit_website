import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Team KAALKRIT",
    short_name: "KAALKRIT",
    description:
      "Team KAALKRIT is the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru — building autonomous aerial systems, robotics, and intelligent engineering solutions.",
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
