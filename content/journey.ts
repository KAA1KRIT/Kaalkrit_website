import type { Milestone } from "@/lib/types";

export const milestones: Milestone[] = [
  {
    id: "vision",
    year: 2024,
    yearLabel: "Vision",
    kind: "founding",
    title:
      "Engineering the Future Through Innovation, Autonomy, and Intelligent Systems.",
    description:
      "At Team KAALKRIT, we envision a future where student-led innovation becomes a driving force behind technological advancement. Our goal is to establish ourselves as one of India's leading university engineering teams, recognized for developing intelligent autonomous systems, advanced robotics, and transformative technologies that create meaningful real-world impact.\n\nWe aspire to build an ecosystem where research, innovation, and practical engineering come together seamlessly. By continuously exploring emerging technologies in drones, robotics, embedded systems, artificial intelligence, automation, and intelligent software, we aim to develop solutions that are scalable, sustainable, and capable of addressing tomorrow's challenges.\n\nOur vision extends beyond competitions. We strive to inspire future engineers, collaborate with academia, industry, startups, and research organizations, contribute to India's vision of technological self-reliance, and build engineering solutions that improve lives.",
    contentStatus: "ready",
  },
  {
    id: "future-scope",
    year: null,
    yearLabel: "Future Scope",
    kind: "forward",
    title: "Building the next generation of intelligent engineering.",
    description:
      "The journey of Team KAALKRIT has only just begun. Our long-term vision is to evolve into one of India's most respected student-led research and innovation organizations, pioneering advancements in autonomous systems, robotics, artificial intelligence, and intelligent engineering.\n\nIn the coming years, we aim to develop next-generation autonomous drones, AI-powered robotic systems, swarm intelligence, computer vision-driven autonomy, advanced embedded platforms, intelligent robotic manipulators, and integrated autonomous ecosystems capable of transforming industries such as agriculture, healthcare, infrastructure inspection, environmental monitoring, disaster response, logistics, manufacturing, and smart cities.\n\nAlongside our hardware innovations, we envision expanding Build With Hardware (BWH) into a globally recognized collaborative platform that empowers students, researchers, startups, and engineering communities to learn, build, share knowledge, and accelerate hardware innovation at scale.\n\nOur ambition is not simply to participate in innovation — we aspire to define its future.",
    contentStatus: "ready",
  },
  {
    id: "commitment",
    year: null,
    yearLabel: "Our Commitment",
    kind: "forward",
    title: "We don't just imagine the future — we engineer it.",
    description:
      "At Team KAALKRIT, engineering is driven by curiosity, innovation, integrity, and an unwavering pursuit of excellence. We believe that every challenge presents an opportunity to innovate, every setback becomes a lesson for improvement, and every project brings us closer to technologies that create meaningful impact.\n\nAs technology continues to reshape the world, Team KAALKRIT remains dedicated to pushing the boundaries of autonomous systems, robotics, embedded technologies, and intelligent engineering. We don't just imagine the future — we engineer it.",
    contentStatus: "ready",
  },
];

export const journeyContent = { status: "ready" as const, milestones };
