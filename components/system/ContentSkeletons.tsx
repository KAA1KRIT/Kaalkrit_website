export function PageSkeleton() {
  return <div className="content-skeleton content-skeleton--page" aria-busy="true"><span className="sr-only">Loading page</span><div /><div /><div /></div>;
}

export function ProjectCardSkeleton() {
  return <div className="content-skeleton content-skeleton--card" aria-busy="true"><span className="sr-only">Loading project</span><div /><div /><div /></div>;
}

export function TeamCardSkeleton() {
  return <div className="content-skeleton content-skeleton--team" aria-busy="true"><span className="sr-only">Loading team profile</span><div /><div /><div /></div>;
}

export function TimelineSkeleton() {
  return <div className="content-skeleton content-skeleton--timeline" aria-busy="true"><span className="sr-only">Loading timeline</span>{[1, 2, 3].map((item) => <div key={item} />)}</div>;
}

export function MediaSkeleton() {
  return <div className="content-skeleton content-skeleton--media" aria-busy="true"><span className="sr-only">Loading media</span><div /></div>;
}

export function HeroMediaSkeleton() {
  return <div className="content-skeleton content-skeleton--hero" aria-busy="true"><span className="sr-only">Loading hero visual</span><div /><div /></div>;
}

export function ProjectDetailSkeleton() {
  return <div className="content-skeleton content-skeleton--project-detail" aria-busy="true"><span className="sr-only">Loading project record</span><div /><div /><div /><div /></div>;
}

export function PartnerStripSkeleton() {
  return <div className="content-skeleton content-skeleton--partner-strip" aria-busy="true"><span className="sr-only">Loading partner information</span>{[1, 2, 3, 4].map((item) => <div key={item} />)}</div>;
}

export function ContactFormSkeleton() {
  return <div className="content-skeleton content-skeleton--form" aria-busy="true"><span className="sr-only">Loading contact options</span>{[1, 2, 3].map((item) => <div key={item} />)}</div>;
}

export function NavigationSkeleton() {
  return <div className="content-skeleton content-skeleton--navigation" aria-busy="true"><span className="sr-only">Loading navigation</span><div /><div /></div>;
}
