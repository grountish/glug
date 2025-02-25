"use client";

import { useEffect, useState } from "react";
import { Settings as SettingsType } from "@/sanity.types";
import MenuIcon from "./MenuIcon";
import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextBlock } from "next-sanity";

type MobileMenuProps = {
  block: SettingsType | null;
  onClose: () => void;
};

export default function MobileMenu({ onClose, block }: MobileMenuProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setIsAnimating(true); // Start animation

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false); // Start exit animation
    setTimeout(() => onClose(), 300); // Close menu after animation
  };

  if (!block) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#F8F6F2] flex flex-col justify-between p-8 z-50 font-teachers 
        transition-transform duration-300 ${isAnimating ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-start">
        <Image
          // @ts-ignore
          src={block?.mainNavigation?.darkLogo?.url as string}
          alt="Logo"
          width={150}
          height={50}
          className="rounded-xl md:pr-20 w-auto h-auto transition-opacity duration-300"
        />
        <button onClick={handleClose} aria-label="Close menu">
          <MenuIcon width={26} height={25} color="#712538" isOpen={true} />
        </button>
      </div>

      <nav className="flex flex-col items-end space-y-8 text-[#541B1E] text-5xl">
        {block?.mainNavigation?.navLinks?.map((link, i) => (
          <Link
            key={i}
            href={
              // @ts-ignore
              link?.linkType === "navLink"
              // @ts-ignore
                ? `/${link?.navLink}`
                : // @ts-ignore
                  `/${link?.page?.slug?.current}`
            }
            className="hover:opacity-70 transition-opacity"
            onClick={handleClose} // Close menu on link click
          >
            {/* @ts-ignore */}
            {link?.linkType === "navLink" ? link?.navLink : link?.page?.name}
          </Link>
        ))}
      </nav>

      <div className="text-right text-[#541B1E] pb-12">
        <PortableText
          value={block.footer?.secondColumnFooter as PortableTextBlock[]}
        />
      </div>
    </div>
  );
}
