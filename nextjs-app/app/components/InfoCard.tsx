/* eslint-disable @next/next/no-img-element */
import { InfoCard as InfoCardType } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { PortableText, PortableTextBlock, stegaClean } from "next-sanity";
type InfoCardProps = {
  block: InfoCardType;
  index: number;
};

export default function InfoCard({ block }: InfoCardProps) {
  if (!block) return null;
  return (
    <section className={`flex flex-col lg:px-20 px-5 text-[${block?.textColor?.hex?.toUpperCase()}] pt-${block?.paddingT} pb-${block?.paddingB}`} data-section={block?.theme}>
      <h1 className="lg:text-[200px] text-8xl text-left lg:pl-40 max-w-10 leading-[1] pb-20">{block?.title}</h1>
      <img
      className="rounded-xl"
        src={urlForImage(block?.image)?.url() as string}
        alt={stegaClean(block?.imageAltText as string) || ""}
      />
      <div className="pt-20 text-2xl max-w-[900px] lg:pl-40">
       <PortableText value={block.text as PortableTextBlock[]} />
      </div>
    </section>
  );
}
