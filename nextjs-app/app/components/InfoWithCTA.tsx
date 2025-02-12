import { InfoWithCTA as InfoWithCTAType } from "@/sanity.types";
import { PortableText, PortableTextBlock } from "next-sanity";
import Button from "./Button";

type InfoWithCTAProps = {
  block: InfoWithCTAType;
  index: number;
};

export default function InfoWithCTA({ block }: InfoWithCTAProps) {
  if (!block) return null;

  return (
    <section className={`grid grid-cols-12 pt-${block?.paddingT} pb-${block?.paddingB}  text-[${block?.textColor?.hex}] p-20`} data-section="light">
      <div className="text-3xl col-span-6">
        <PortableText value={block.firstColumnText as PortableTextBlock[]} />
      </div>
      <div className="text-base col-span-5">
        <PortableText value={block.secondColumnText as PortableTextBlock[]} />
      </div>
      <div className="col-span-1">
        <Button buttonText={block?.cta?.text as string} variant={block?.cta?.variant} />
      </div>
    </section>
  );
}
