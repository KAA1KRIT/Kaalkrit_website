"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { milestones } from "@/content/journey";
import { getPublicProject } from "@/content/projects";

const kindLabels: Record<string, string> = {
  founding: "Founding",
  competition: "Competition",
  project: "Project",
  achievement: "Achievement",
  forward: "Direction",
};

/**
 * A vertical spine with dated milestones — the scale rule turned upright.
 *
 * Scroll drives the amber progress fill and nothing else: no parallax on
 * text, no scroll hijacking. Under reduced motion the fill is static and
 * the content is unaffected, because progress is decorative here.
 */
export function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const anchor = window.innerHeight * 0.5;
      const travelled = anchor - rect.top;
      const ratio = rect.height === 0 ? 0 : travelled / rect.height;
      setProgress(Math.min(100, Math.max(0, ratio * 100)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const items = Array.from(
      trackRef.current?.querySelectorAll<HTMLElement>("[data-milestone]") ?? [],
    );
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-milestone"));
            if (!Number.isNaN(index)) setActiveIndex(index);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    for (const item of items) observer.observe(item);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={trackRef} className="relative">
      {/* The spine. Decorative: the list order carries the real sequence. */}
      <div
        aria-hidden="true"
        className="k-rule-v absolute left-0 top-0 bottom-0 md:left-[calc(25%-1px)]"
        style={{ "--k-progress": `${progress}%` } as CSSProperties}
      />

      <ol
        className="grid gap-[var(--k-10)] pl-[var(--k-6)] md:pl-0"
        aria-label="[MILESTONES ARIA LABEL PLACEHOLDER]"
      >
        {milestones.map((milestone, index) => {
          const project = milestone.projectSlug
            ? getPublicProject(milestone.projectSlug)
            : undefined;
          const active = index === activeIndex;

          return (
            <li key={milestone.id} data-milestone={index} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(var(--k-6)+3px)] top-[10px] block size-[7px] rounded-[var(--k-radius-pill)] transition-colors duration-[var(--k-dur)] md:left-[calc(25%-4px)]"
                style={{
                  background: active
                    ? "var(--k-signal)"
                    : "var(--k-line-strong)",
                }}
              />

              <div className="grid gap-[var(--k-4)] md:grid-cols-4 md:gap-[var(--k-5)]">
                <div className="md:col-span-1 md:pr-[var(--k-7)] md:text-right">
                  <p
                    className="font-[family-name:var(--font-mono)] text-[1.75rem] leading-none transition-colors duration-[var(--k-dur)]"
                    style={{
                      color: active ? "var(--k-text)" : "var(--k-text-faint)",
                    }}
                  >
                    {milestone.year ?? "—"}
                  </p>
                  <p className="k-meta mt-[var(--k-2)]">
                    {kindLabels[milestone.kind]}
                  </p>
                </div>

                <div className="md:col-span-3 md:pl-[var(--k-7)]">
                  <p className="k-meta">{milestone.yearLabel}</p>
                  <h2 className="k-display mt-[var(--k-2)] text-[length:var(--k-t-h3)]">
                    {milestone.title}
                  </h2>
                  <p className="k-body mt-[var(--k-4)]">
                    {milestone.description}
                  </p>
                  {project ? (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-[var(--k-4)] inline-flex items-center gap-[var(--k-2)] min-h-[44px] text-[var(--k-t-small)] text-[var(--k-text)] underline decoration-[var(--k-line-strong)] underline-offset-4 hover:decoration-[var(--k-signal)] transition-colors duration-[var(--k-dur-fast)]"
                    >
                      {project.shortTitle}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
