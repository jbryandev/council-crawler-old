import { crawl as OKCcrawl } from '@/crawlers/okc';

export default async function crawl(slug: string) {
  if (slug == 'ocwut') {
    return await OKCcrawl(slug);
  } else {
    throw `No crawler function for the given slug, '${slug}'.`;
  }
}
