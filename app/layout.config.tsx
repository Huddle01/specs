import { pageTree } from '@/app/source';
import type { BaseLayoutProps, DocsLayoutProps } from 'fumadocs-ui/layout';
import Image from 'next/image';

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    // title: 'Huddle01 Specs',
    enableSearch: true,
    url: '/specs',
    title: (
      <>
        <Image
          alt="huddle01"
          src="/logo.png"
          width={100}
          height={100}
          className="w-full flex-auto align-center"
        />
      </>
    ),
  },
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
