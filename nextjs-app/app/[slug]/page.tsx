import type { Metadata } from "next";
import Head from "next/head";

import PageBuilderPage from "@/app/components/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { getPageQuery, pagesSlugs } from "@/sanity/lib/queries";
import { Page as PageType } from "@/sanity.types";
import { PageOnboarding } from "@/app/components/Onboarding";
import { client } from "@/sanity/lib/client";
import BlockRenderer from "../components/BlockRenderer";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: pagesSlugs,
    // // Use the published perspective in generateStaticParams
    perspective: "published",
    stega: false,
  });
  return data;
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  });

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  // use params.slug to fetch the page data
  const page = await client.fetch(
    '*[_type == "page" && slug.current == $slug][0]',
    { slug: params.slug }
  );

  if (!page?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    );
  }
  return (
    <div
      className={`font-teachers bg-[${page.pageBackgroundColor.hex}]`}
    >
      <Head>
        <title>{page.heading}</title>
      </Head>
      {/* {
        // Render the page builder
        page.pageBuilder.map((block: any, index: number) => (
          <BlockRenderer
            key={block._key}
            index={index}
            block={block}
            pageId={page._id}
            pageType={page._type}
          />
        ))  
      } */}
      <PageBuilderPage page={page as PageType} />
    </div>
  );
}
