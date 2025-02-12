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
    <section className={`flex flex-col px-20 text-[${block?.textColor?.hex.toUpperCase()}]`} data-section="light">
      <h1 className="text-[200px] text-left pl-40 max-w-10 leading-[1]">{block?.title}</h1>
      <img
      className="rounded-xl"
        src={urlForImage(block?.image)?.url() as string}
        alt={stegaClean(block?.imageAltText as string) || ""}
      />
      <div className="py-20 text-2xl max-w-[900px] pl-40">
       <PortableText value={block.text as PortableTextBlock[]} />
      </div>
    </section>
  );
}
