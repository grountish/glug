/* eslint-disable @next/next/no-img-element */
import { ImageTextBlock as ImageTextBlockType } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { PortableText, PortableTextBlock } from "next-sanity";

type ImageTextBlockProps = {
  block: ImageTextBlockType;
  index: number;
};

export default function ImageTextBlock({ block }: ImageTextBlockProps) {
  if (!block) return null;

  const layout = block.layout || "leftImage";

  return (
    <section
      className={`flex items-center justify-center text-[${block?.textColor?.hex}] text-3xl pt-${block?.paddingT} pb-${block?.paddingB} font-semibold`}
      data-section="light"
    >
      {layout === "leftImage" && (
        <div className="flex flex-col md:flex-row items-end gap-6 px-20">
          <div className="w-1/2">
            <img
              src={urlForImage(block?.images[0])?.url() as string}
              alt="alttext"
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src={urlForImage(block?.illustration)?.url() as string}
              alt="alttext"
              className="w-[550px]"
            />
          </div>
        </div>
      )}

      {layout === "topText" && (
        <div className="flex flex-col items-end px-20">
          <div className="max-w-[580px] pb-20">
            <PortableText value={block?.text as PortableTextBlock[]} />
          </div>
          <div className="flex gap-6 justify-end pl-40">
            {block.images?.map((image, idx) => (
              <img
                key={idx}
                src={urlForImage(image)?.url() as string}
                alt={`alttext-${idx}`}
                className="rounded-xl w-[600px] h-auto"
              />
            ))}
          </div>
        </div>
      )}

      {layout === "leftTextImageIlustration" && (
        <div className="flex flex-col md:flex-row items-end gap-6 px-20">
          <div className="w-1/2">
            <div className="max-w-[580px] pb-20">
              <PortableText value={block?.text as PortableTextBlock[]} />
            </div>
            <img
              src={urlForImage(block?.images[0])?.url() as string}
              alt="alttext"
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src={urlForImage(block?.illustration)?.url() as string}
              alt="alttext"
              className="w-[550px]"
            />
          </div>
        </div>
      )}

      {layout === "rightImageNoText" && (
        <div className="flex items-center justify-center gap-6 pl-40">
          {block.images?.map((image, idx) => (
            <img
              key={idx}
              src={urlForImage(image)?.url() as string}
              alt={`alttext-${idx}`}
              className="rounded-xl w-1/2 h-auto"
            />
          ))}
        </div>
      )}
    </section>
  );
}
