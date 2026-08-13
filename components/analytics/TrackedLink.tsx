'use client';

import Link from 'next/link';
import type { ComponentProps, MouseEvent, ReactNode } from 'react';
import { track } from '@vercel/analytics';

export type AnalyticsEvent =
  | 'primary_cta_click'
  | 'partner_cta_click'
  | 'recruitment_cta_click'
  | 'email_click'
  | 'social_outbound_click'
  | 'project_detail_click'
  | 'contact_form_submit';

type PropertyValue = string | number | boolean | null | undefined;
type Properties = Record<string, PropertyValue>;

type SharedProps = {
  href: string;
  children: ReactNode;
  event?: AnalyticsEvent;
  properties?: Properties;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

type TrackedLinkProps = SharedProps &
  Omit<ComponentProps<typeof Link>, 'href' | 'children' | 'onClick'> & {
    target?: string;
    rel?: string;
  };

const analyticsEnabled =
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' && process.env.VERCEL === '1';

function record(event: AnalyticsEvent | undefined, properties: Properties | undefined) {
  if (!analyticsEnabled || !event) return;
  track(event, properties);
}

export function TrackedLink({
  href,
  children,
  event,
  properties,
  onClick,
  ...rest
}: TrackedLinkProps) {
  const handleClick = (clickEvent: MouseEvent<HTMLAnchorElement>) => {
    record(event, properties);
    onClick?.(clickEvent);
  };

  const isExternal = href.startsWith('mailto:') || href.startsWith('http');

  if (isExternal) {
    return (
      <a href={href} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
