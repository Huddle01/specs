import { getPage, getPages } from '@/app/source';
import { DocsBody, DocsPage } from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;

  return (
    <DocsPage
      footer={{
        enabled: true,
      }}
      breadcrumb={{
        enabled: true,
      }}
      key="specs-root-page"
      toc={page.data.exports.toc}
      tableOfContent={{
        enabled: true,
      }}
      lastUpdate={page.data.exports.lastModified}
      tableOfContentPopover={{
        enabled: true,
      }}
      full={page.data.full}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
