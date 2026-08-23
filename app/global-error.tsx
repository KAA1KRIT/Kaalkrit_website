"use client";

import { GlobalErrorExperience } from "@/components/system/GlobalErrorExperience";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalErrorExperience reset={reset} />
      </body>
    </html>
  );
}
