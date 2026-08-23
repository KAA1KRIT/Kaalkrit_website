"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function ScrollRestoration() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    lenis?.scrollTo(0, { immediate: true });
  }, [lenis, pathname]);

  return null;
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        anchors: true,
        respectReducedMotion: true,
        stopInertiaOnNavigate: true,
      }}
    >
      <ScrollRestoration />
      {children}
    </ReactLenis>
  );
}
