'use client';

import { useEffect } from 'react';
import { GlobalErrorExperience } from '@/components/system/GlobalErrorExperience';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { void error; }, [error]);
  return <GlobalErrorExperience reset={reset} />;
}
