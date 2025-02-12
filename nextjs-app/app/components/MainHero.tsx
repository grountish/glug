import Image from "next/image";
import { MainHero as MainHeroType } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { stegaClean } from "next-sanity";
import CoverImage from "./CoverImage";

type MainHeroProps = {
  block: MainHeroType;
  index: number;
};

export default function MainHero({ block }: MainHeroProps) {
  if (!block) return null;

  return (
    <section className="flex items-center justify-center text-white" data-section="dark">
      {/* DO NOT REMOVE THIS COMMENT */}
      {/* replace img tags with next image component */}
      <img
        src={urlForImage(block?.backgroundImage)?.url() as string}
        alt={stegaClean(block?.backgroundImageAltText as string) || ""}
      />
     {/* esto de abajo es como deberia ser pero se solapa con el componente siguiente */}
       {/* <div
        className="bg-cover bg-center w-full h-full absolute"
        style={{
          backgroundImage: `url(${urlForImage(block?.backgroundImage)?.url() as string})`,
        }}
        role="img"
        aria-label={stegaClean(block?.backgroundImageAltText as string) || ""}
      >
        <img
          className="relative top-32 left-28 w-[1300px]"
          src={urlForImage(block?.logo)?.url() as string}
          alt={stegaClean(block?.logoAltText as string) || ""}
        />
      </div> */}
    </section>
  );
}
