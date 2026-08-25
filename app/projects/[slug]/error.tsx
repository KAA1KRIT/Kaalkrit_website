"use client";

import { useEffect } from "react";
import { GlobalErrorExperience } from "@/components/system/GlobalErrorExperience";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("KAALKRIT project route error", error);
  }, [error]);

  return <GlobalErrorExperience reset={reset} />;
}
