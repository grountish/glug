"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { settingsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default function DynamicHeader() {
  const [textColor, setTextColor] = useState("#ECE8E2");
  const [currentLogo, setCurrentLogo] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [darkLogoUrl, setDarkLogoUrl] = useState("");

  const getData = async () => {
    const data = await client.fetch(settingsQuery);
    setLogoUrl(data?.mainNavigation?.lightLogo.url);
    setDarkLogoUrl(data?.mainNavigation?.darkLogo.url);
    setCurrentLogo(data?.mainNavigation?.lightLogo.url);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionType = entry.target.getAttribute("data-section");
            console.log(sectionType);
            if (sectionType === "lightTheme") {
              setTextColor("#712538");
              setCurrentLogo(darkLogoUrl);
            } else {
              setTextColor("#ECE8E2");
              setCurrentLogo(logoUrl);
            }
          }
        }
      },
      { rootMargin: "-50px 0px 0px 0px", threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [darkLogoUrl, logoUrl]);

  return (
    <>
      <style>{`
        header {
          color: ${textColor};
        }
      `}</style>

      <Link href="/" className="flex items-center">
        {currentLogo && (
          <Image
            src={currentLogo}
            alt="Logo"
            width={150}
            height={50}
            className="rounded-xl pr-20 w-auto h-auto transition-opacity duration-300"
          />
        )}
      </Link>
    </>
  );
}
