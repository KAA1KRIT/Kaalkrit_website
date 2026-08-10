export type CapabilityPanel = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: string;
  accent: 'cyan' | 'violet' | 'amber';
};

export const capabilityPanels: CapabilityPanel[] = [
  {
    id: 'aerial-systems',
    label: '01 // Aerial systems',
    title: 'Autonomous UAS',
    description: 'Drone technology, flight-controller integration and autonomous navigation across the aerial system.',
    items: 'Autonomous unmanned aerial systems · intelligent drone technologies · flight control',
    accent: 'cyan',
  },
  {
    id: 'intelligent-systems',
    label: '02 // Intelligent systems',
    title: 'Embedded intelligence',
    description: 'Embedded systems, AI, computer vision, sensors and software connected into one engineered system.',
    items: 'Embedded systems · PCB design · AI and computer vision · sensor integration · software',
    accent: 'violet',
  },
  {
    id: 'robotics',
    label: '03 // Robotics',
    title: 'Motion & automation',
    description: 'Robotics, mechanical design, rapid prototyping and control systems for precise physical movement.',
    items: 'Robotics and automation · mechanical design · rapid prototyping · control systems',
    accent: 'amber',
  },
];
