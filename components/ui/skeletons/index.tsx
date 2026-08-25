type SkeletonBlockProps = { className?: string };

function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return (
    <span
      aria-hidden="true"
      className={`block animate-pulse rounded-[var(--k-radius)] bg-[color-mix(in_srgb,var(--k-line-strong)_58%,transparent)] motion-reduce:animate-none ${className}`.trim()}
    />
  );
}

function LoadingRegion({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      role="status"
      aria-label={`Loading ${label}`}
      aria-busy="true"
      className="py-[var(--k-section-y)]"
    >
      <div className="k-container">{children}</div>
    </section>
  );
}

function HeadingShape() {
  return (
    <div className="grid gap-[var(--k-4)]">
      <SkeletonBlock className="h-3 w-40" />
      <SkeletonBlock className="h-12 max-w-[42rem]" />
      <SkeletonBlock className="h-5 max-w-[34rem]" />
      <SkeletonBlock className="h-5 max-w-[28rem]" />
    </div>
  );
}

export function HomepageSkeleton() {
  return (
    <LoadingRegion label="homepage">
      <HeadingShape />
      <div className="mt-[var(--k-section-y)] grid gap-[var(--k-6)] md:grid-cols-3">
        {["identity", "engineering", "work"].map((item) => (
          <div key={item} className="grid gap-[var(--k-3)]">
            <SkeletonBlock className="h-3 w-24" />
            <SkeletonBlock className="h-8" />
            <SkeletonBlock className="h-20" />
          </div>
        ))}
      </div>
    </LoadingRegion>
  );
}

export function ProjectsSkeleton() {
  return (
    <LoadingRegion label="projects">
      <HeadingShape />
      <div className="mt-[var(--k-10)] grid gap-[var(--k-6)] lg:grid-cols-2">
        {["one", "two", "three", "four"].map((item) => (
          <article
            key={item}
            className="grid gap-[var(--k-4)] border-t border-[var(--k-line)] pt-[var(--k-5)]"
          >
            <SkeletonBlock className="h-3 w-28" />
            <SkeletonBlock className="h-9 max-w-[26rem]" />
            <SkeletonBlock className="h-24" />
          </article>
        ))}
      </div>
    </LoadingRegion>
  );
}

export function ProjectDetailSkeleton() {
  return (
    <LoadingRegion label="project record">
      <HeadingShape />
      <div className="mt-[var(--k-10)] grid gap-[var(--k-8)] md:grid-cols-12">
        <div className="grid gap-[var(--k-3)] md:col-span-4">
          <SkeletonBlock className="h-4 w-28" />
          <SkeletonBlock className="h-24" />
        </div>
        <div className="grid gap-[var(--k-4)] md:col-span-7 md:col-start-6">
          <SkeletonBlock className="h-10 w-52" />
          <SkeletonBlock className="h-32" />
          <SkeletonBlock className="h-32" />
        </div>
      </div>
    </LoadingRegion>
  );
}

export function TeamSkeleton() {
  return (
    <LoadingRegion label="team">
      <HeadingShape />
      <div className="mx-auto mt-[var(--k-10)] grid max-w-[22rem] gap-[var(--k-4)]">
        <SkeletonBlock className="aspect-[2/3] w-full" />
        <div className="flex justify-center gap-[var(--k-2)]">
          <SkeletonBlock className="size-10" />
          <SkeletonBlock className="h-10 w-24" />
          <SkeletonBlock className="size-10" />
        </div>
      </div>
    </LoadingRegion>
  );
}

export function JourneySkeleton() {
  return (
    <LoadingRegion label="journey">
      <HeadingShape />
      <ol className="mt-[var(--k-10)] grid gap-[var(--k-8)] border-s border-[var(--k-line)] ps-[var(--k-6)]">
        {["origin", "direction", "commitment"].map((item) => (
          <li key={item} className="grid gap-[var(--k-3)]">
            <SkeletonBlock className="h-3 w-32" />
            <SkeletonBlock className="h-9 max-w-[34rem]" />
            <SkeletonBlock className="h-24 max-w-[44rem]" />
          </li>
        ))}
      </ol>
    </LoadingRegion>
  );
}
