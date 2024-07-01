import { map } from '@/.map';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/spcs',
  rootDir: 'specs',
  source: createMDXSource(map),
});
