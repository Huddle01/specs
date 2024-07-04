import { pageTree } from '@/app/source';
import type { BaseLayoutProps, DocsLayoutProps } from 'fumadocs-ui/layout';
import Image from 'next/image';

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    // title: 'Huddle01 Specs',
    enableSearch: true,
    url: '/specs',
    transparentMode: 'none',
    title: (
      <div className='flex items-center w-full justify-center gap-2' >
        <Image
          alt="huddle01"
          src="/logo.png"
          width={40}
          height={40}
          className="w-full pb-1 pl-1 flex-auto align-center"
        />
        <div className='flex font-mono gap-2 text-xl font-bold -translate-y-[1px]' >
          <p className=' w-full' >
            Huddle01
          </p>
          <p>Specs</p>
        </div>
      </div>
    ),
  },
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
