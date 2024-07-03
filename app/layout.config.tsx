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
            alt="Fumadocs"
            src={Logo}
            sizes="100px"
            className="hidden w-20 md:w-24 [.uwu_&]:block"
            aria-label="Fumadocs"
          />
          <span className="font-medium [.uwu_&]:hidden max-md:[header_&]:hidden">
            Fumadocs
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
