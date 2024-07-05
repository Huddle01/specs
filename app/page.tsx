import Head from 'next/head';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/specs');

  return (
    <>
      <Head>
        <title>Huddle01 | Specs</title>
      </Head>
      <main className="flex h-screen flex-col justify-center text-center">
        <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
        <p className="text-muted-foreground">
          You can open
          <Link
            href="/docs"
            className="text-foreground font-semibold underline"
          >
            /specs
          </Link>
          and see the documentation.
        </p>
      </main>
    </>
  );
}
