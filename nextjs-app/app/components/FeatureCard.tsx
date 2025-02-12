import { FeatureCard as FeatureCardType } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { PortableText, PortableTextBlock } from "next-sanity";
import Button from "./Button";

type FeatureCardProps = {
  block: FeatureCardType;
  index: number;
};

export default function FeatureCard({ block }: FeatureCardProps) {
  if (!block) return null;

  return (
    <section
      className={`flex flex-col h-full bg-[${block?.backgroundColor?.hex?.toUpperCase()}] px-20 pt-${block?.paddingT} pb-${block?.paddingB} text-[${block?.textColor?.hex?.toUpperCase()}]`}
      data-section={block?.theme}
    >
      <h6 className="self-end">{block?.variant}</h6>
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <img
            src={urlForImage(block?.illustration)?.url() as string}
            alt="alttext"
            className="rounded-xl w-full h-auto"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-[160px] leading-[1] pb-16">{block?.title}</h1>
          <p className="pb-16">{block?.description}</p>
          <Button
            buttonText={block?.cta?.text as string}
            variant={block?.cta?.variant}
            buttonUrl={block?.cta?.text}
          />
        </div>
      </div>
    </section>
  );
}
