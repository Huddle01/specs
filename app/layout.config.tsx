import { pageTree } from '@/app/source';
import type { BaseLayoutProps, DocsLayoutProps } from 'fumadocs-ui/layout';
import Image from 'next/image';
import Logo from '@/public/logo.png';

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
            sizes="100px"
            width={30}
            height={30}
            className=""
            aria-label="huddle01"
          />
          <span>
            Huddle01
          </span>
        </>
    )
  },
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
