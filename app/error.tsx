"use client";

import { GlobalErrorExperience } from "@/components/system/GlobalErrorExperience";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <GlobalErrorExperience reset={reset} />;
}
