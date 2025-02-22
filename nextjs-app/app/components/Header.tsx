import Link from "next/link";
import { Settings as SettingsType } from "@/sanity.types";
import { PortableText, PortableTextBlock } from "next-sanity";
import DynamicHeader from "./DynamicHeader";

type HeaderProps = {
  block: SettingsType | null;
};

export default function Header({ block }: HeaderProps) {
  if (!block) return null;


  return (
    <header className="fixed top-0 left-0 flex items-center text-base justify-between px-10 py-8 bg-transparent z-50 w-full font-teachers transition-colors duration-300">
      <DynamicHeader />

      <div className="flex w-1/2">
        <div className="text-left pr-24 leading-tight">
          <PortableText
            value={block?.mainNavigation?.secondColumnNav as PortableTextBlock[]}
          />
        </div>
        <div className="text-left leading-tight">
          <PortableText
            value={block?.mainNavigation?.thirdColumnNav as PortableTextBlock[]}
          />
        </div>
      </div>

      <nav className="flex justify-end gap-8 w-1/2 font-semibold">
        {block?.mainNavigation?.navLinks?.map((link, i) => {
          return link.linkType === "navLink" ? (
            <h3 key={i}>{link.navLink}</h3>
          ) : (
            // @ts-ignore
            <Link href={`/${link?.page?.slug?.current}`} key={i}>
              {/* @ts-ignore */}
              {link?.page?.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
