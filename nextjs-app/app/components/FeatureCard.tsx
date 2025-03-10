/* eslint-disable @next/next/no-img-element */
import { FeatureCard as FeatureCardType } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import Button from "./Button";
import Link from "next/link";

type FeatureCardProps = {
  block: FeatureCardType;
  index: number;
};

export default function FeatureCard({ block }: FeatureCardProps) {
  if (!block) return null;

  const cta = block?.cta?.link;
  const isExternalLink = cta?.linkType === "href" && cta?.openType === "newTab";

  return (
    <section
      className={`flex flex-col h-full bg-[${block?.backgroundColor?.hex?.toUpperCase()}] lg:px-20 px-5 pt-${block?.paddingT} pb-${block?.paddingB} text-[${block?.textColor?.hex?.toUpperCase()}]`}
      data-section={block?.theme}
    >
      <h6 className="self-end anim">{block?.variant}</h6>
      <div className="flex lg:flex-row flex-col lg:items-center lg:justify-center justify-start items-start">
        <div className="lg:w-1/2 flex justify-center items-start">
          <img
            src={urlForImage(block?.illustration)?.url() as string}
            alt="alttext"
            className="lg:w-[450px] w-[250px] anim"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="lg:text-[160px] text-7xl leading-[1] pb-16 anim">
            {block?.title}
          </h1>
          <p className="pb-16 anim">{block?.description}</p>
          {cta &&
            (isExternalLink ? (
              <a href={cta.href} className="anim" target="_blank" rel="noopener noreferrer">
                <Button
                  buttonText={block?.cta?.text as string}
                  variant={block?.cta?.variant}
                />
              </a>
            ) : (
              <Link className="anim" href={cta.href || "/"}>
                <Button
                  buttonText={block?.cta?.text as string}
                  variant={block?.cta?.variant}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
