import Link from 'next/link';
import { platformProject } from '@/content/projects';

export function HardwarePlatformSection() {
  if (!platformProject) return null;
  return (
    <section className="public-section public-section--tight" aria-labelledby="hardware-platform-heading">
      <div className="public-container">
        <div className="feature-split feature-split--platform">
          <div>
            <p className="eyebrow">Platform / 07</p>
            <h2 id="hardware-platform-heading">Build With Hardware</h2>
          </div>
          <div>
            <p className="lede">KAALKRIT’s flagship engineering platform is currently in development for structured learning, projects, documentation, collaborative workspaces and AI-powered engineering assistance.</p>
            <Link href="/projects#build-with-hardware" className="text-link">Read the platform brief <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
