/* eslint-disable @next/next/no-img-element */
import { SettingsQueryResult, Settings as SettingsType } from "@/sanity.types";
import Link from "next/link";
import { PortableText, PortableTextBlock } from "next-sanity";

type FooterProps = {
  block: SettingsQueryResult | null;
};

export default function Footer({ block }: FooterProps) {
  if (!block) return null;

  return (
    <footer className="text-[#ECE8E2] flex flex-col lg:grid grid-cols-5 gap-4 [align-items:flex-start] text-base justify-start pb-40 pt-20 lg:px-20 px-8 bg-[#712538] z-50 w-full font-teachers border-t border-[#ECE8E2]">
      <Link href="/">
        <img
          src={block?.mainNavigation?.lightLogo?.url as string}
          alt="alttext"
          className="lg:w-1/3 h-auto"
        />
      </Link>
      <div className="text-left h-full">
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
      <div className="text-left cursor-pointer max-w-32">
        <a href={`mailto:${block.footer?.email}`}>
          <p>{block.footer?.workWithUs}</p>
        </a>
      </div>
    </footer>
  );
}
