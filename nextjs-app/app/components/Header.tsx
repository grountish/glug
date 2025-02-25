"use client";

import { useState } from "react";
import Link from "next/link";
import { Settings as SettingsType } from "@/sanity.types";
import { PortableText, PortableTextBlock } from "next-sanity";
import DynamicHeader from "./DynamicHeader";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";

type HeaderProps = {
  block: SettingsType | null;
};

export default function Header({ block }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  if (!block) return null;

  return (
    <div>
      <header className="lg:hidden flex justify-between w-full fixed top-8 left-0 px-8 items-center z-50">
        <DynamicHeader />
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <MenuIcon width={40} height={22} color="#712538" isOpen={isMenuOpen} />
        </button>
      </header>

      {isMenuOpen && <MobileMenu block={block} onClose={toggleMenu} />}

      <header className="fixed top-0 left-0 lg:flex hidden items-center text-base justify-between px-10 py-8 bg-transparent z-50 w-full font-teachers transition-colors duration-300">
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
            // @ts-ignore
            return link?.linkType === "navLink" ? (
              // @ts-ignore
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
    </div>
  );
}
