import type { Metadata } from "next";
import { redirect } from "next/navigation"; // Import redirect function
import Head from "next/head";

import PageBuilderPage from "@/app/components/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { getPageQuery, pagesSlugs } from "@/sanity/lib/queries";
import { Page as PageType } from "@/sanity.types";
import { client } from "@/sanity/lib/client";

type Props = {
  params: { slug: string };
};

/**
 * Generate the static params for the page.
 */
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: pagesSlugs,
    perspective: "published",
    stega: false,
  });
  return data;
}

/**
 * Generate metadata for the page.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params,
    stega: false,
  });

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata;
}

export default async function Page({ params }: Props) {
  // Handle known error pages
  if (params.slug === "404") return null;
  if (params.slug === "500") return null;

  // Fetch page data from Sanity
  const page = await client.fetch(
    '*[_type == "page" && slug.current == $slug][0]',
    { slug: params.slug }
  );

  // **Redirect to homepage if the page does not exist**
  if (!page?._id) {
    redirect("/"); // Redirect to homepage
  }

  return (
    <div className={`font-teachers bg-[${page.pageBackgroundColor.hex}]`}>
      <Head>
        <title>{page.heading}</title>
      </Head>
      <PageBuilderPage page={page as PageType} />
    </div>
  );
}
