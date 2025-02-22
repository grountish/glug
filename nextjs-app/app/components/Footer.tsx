/* eslint-disable @next/next/no-img-element */
import { Settings as SettingsType } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { PortableText, PortableTextBlock } from "next-sanity";

type FooterProps = {
  block: SettingsType;
};

export default function Footer({ block }: FooterProps) {
  if (!block) return null;

  return (
    <footer className="text-[#ECE8E2] grid grid-cols-5 gap-4 items-start text-base justify-between pb-40 pt-20 px-20 bg-[#712538] z-50 w-full font-teachers border-t border-[#ECE8E2]">
      <Link href="/">
        <img
          src={(urlForImage(block.mainNavigation)?.url() as string) || ""}
          alt="alttext"
          className="rounded-xl w-1/3 h-auto"
        />
      </Link>
      <div className="text-left">
        <PortableText
          value={block.footer?.secondColumnFooter as PortableTextBlock[]}
        />
      </div>
      <div className="text-left">
        <PortableText
          value={block.footer?.thirdColumnFooter as PortableTextBlock[]}
        />
      </div>
      <div className="text-left">
        <PortableText
          value={block.footer?.fourthColumnFooter as PortableTextBlock[]}
        />
      </div>
      <div className="text-left">
        <PortableText
          value={block.footer?.fifthColumnFooter as PortableTextBlock[]}
        />
      </div>
    </footer>
  );
}
