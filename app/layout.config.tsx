import { pageTree } from '@/app/source';
import type { BaseLayoutProps, DocsLayoutProps } from 'fumadocs-ui/layout';

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Huddle01 Specs',
  },
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
