import { lifecycleStages } from '@/content/domains';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function EngineeringLifecycle() {
  return <section id="lifecycle" className="public-section public-section--tight" aria-labelledby="lifecycle-heading"><div className="public-container"><SectionHeader eyebrow="Lifecycle / 03" id="lifecycle-heading" heading="Research becomes autonomy through the whole system." lede="The team follows a full engineering lifecycle: research, system architecture, design, manufacturing, electronics integration, software development, testing, validation and continuous improvement." /><ol className="lifecycle-list">{lifecycleStages.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong></li>)}</ol></div></section>;
}
