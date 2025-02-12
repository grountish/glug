import { Settings as SettingsType } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { PortableText, PortableTextBlock } from "next-sanity";

type HeaderProps = {
  block: SettingsType;
};

export default function Header({ block }: HeaderProps) {
  if (!block) return null;

  const navLinks = block.mainNavigation?.navLinks || [];
  return (
    <header className="fixed text-[#ECE8E2] top-0 left-0 flex items-center text-base justify-between px-10 py-8 bg-transparent z-50 w-full font-teachers">
      <div className="flex justify-between w-1/2">
        <Link href="/" className="flex items-center">
          <img
            src={(urlForImage(block.mainNavigation)?.url() as string) || ""}
            alt="alttext"
            className="rounded-xl w-full h-auto"
          />
        </Link>
        <div className="text-left leading-tight">
          <PortableText
            value={block.mainNavigation?.secondColumnNav as PortableTextBlock[]}
          />
        </div>
        <div className="text-left leading-tight">
          <PortableText
            value={block.mainNavigation?.thirdColumnNav as PortableTextBlock[]}
          />
        </div>
      </div>

      <nav className="flex justify-end gap-8 w-1/2">
        {navLinks.map((link, i) => {
          if (link.linkType === "navLink") {
            return <h3 key={i}>{link.navLink}</h3>;
          } else {
            return (
              <Link href={`/${link?.page?.slug?.current}`} key={i}>
                {link?.page?.name}
              </Link>
            );
          }
        })}
      </nav>
    </header>
  );
}


// import { useEffect, useState } from "react";
// import { Settings as SettingsType } from "@/sanity.types";
// import Link from "next/link";
// import { PortableText, PortableTextBlock } from "next-sanity";

// type HeaderProps = {
//   block: SettingsType;
// };

// export default function Header({ block }: HeaderProps) {
//   if (!block) return null;

//   const [textColor, setTextColor] = useState("#ECE8E2"); // Default

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         for (const entry of entries) {
//           if (entry.isIntersecting) {
//             const sectionType = entry.target.getAttribute("data-section");
//             setTextColor(sectionType === "light" ? "#712538" : "#ECE8E2");
//           }
//         }
//       },
//       { rootMargin: "-50px 0px 0px 0px", threshold: 0.6 } // Adjust threshold for better accuracy
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <header
//       className="fixed top-0 left-0 flex items-center text-base justify-between px-10 py-8 bg-transparent z-50 w-full font-teachers transition-colors duration-300"
//       style={{ color: textColor }}
//     >
//       <div className="flex justify-between w-1/2">
//         <Link href="/" className="flex items-center">
//           <img
//             src={(block.mainNavigation?.image as string) || ""}
//             alt="alttext"
//             className="rounded-xl w-full h-auto"
//           />
//         </Link>
//         <div className="text-left leading-tight">
//           <PortableText value={block.mainNavigation?.secondColumnNav as PortableTextBlock[]} />
//         </div>
//         <div className="text-left leading-tight">
//           <PortableText value={block.mainNavigation?.thirdColumnNav as PortableTextBlock[]} />
//         </div>
//       </div>

//       <nav className="flex justify-end gap-8 w-1/2">
//         {block.mainNavigation?.navLinks?.map((link, i) => {
//           return link.linkType === "navLink" ? (
//             <h3 key={i}>{link.navLink}</h3>
//           ) : (
//             <Link href={`/${link?.page?.slug?.current}`} key={i}>
//               {link?.page?.name}
//             </Link>
//           );
//         })}
//       </nav>
//     </header>
//   );
// }
