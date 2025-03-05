/**
 * Property of the B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 */

import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";

type FooterItem =
  | "Home"
  | "Artists"
  | "Exihibitions"
  | "About"
  | "Shop"
  | "Contact";

const FooterItems = [
  { title: "Home", link: "/" },
  { title: "Artists", link: "/artists" },
  { title: "Exihibitions", link: "/" },
  { title: "About", link: "/" },
  { title: "Shop", link: "/" },
  { title: "Contact", link: "/" },
];

const FooterItem = ({
  title,
  selected,
  link,
}: {
  title: string;
  selected?: boolean;
  link: string;
}): JSX.Element => {
  return (
    <Link href={link}>
      <div
        className={`
          text-xs
          ${selected && "font-normal"} cursor-pointer`}
      >
        {title}
      </div>
    </Link>
  );
};

export default function Footer({
  selected,
}: {
  selected: FooterItem;
}): JSX.Element {
  return (
    <div className="w-page bg-[#F2F2F2] p-20">
      <div className="sm:flex gap-6">
        <div className="flex-col text-customGray xs:text-black gap-1 flex sm:flex">
          {FooterItems.map((item, index) => (
            <FooterItem
              key={index}
              title={item.title}
              selected={item.title === selected || item.title === ""}
              link={item.link}
            />
          ))}
        </div>
        <div className="sm:flex flex-col mt-10 xs:mt-0">
          <p className="pb-1 text-md">Contact Us</p>
          <p className="text-xs">info@plusgallery.com</p>
          <p className="text-xs">
            123 Santolan Street, Katipunan Ave, Quezon City, Metro Manila, 1500,
            Philippines
          </p>
          <p className="pt-8 text-md">Follow Us</p>
          <div className="gap-2 flex">
            <Image
              src={"./instagram.svg"}
              alt={"+Instagram Logo"}
              width={16}
              height={16}
            />
            <Image
              src={"./linkedin.svg"}
              alt={"+linkedin Logo"}
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 pt-20 justify-between w-page flex-col xs:flex-row ">
        <div className="flex gap-6 flex-col xl:flex-row">
          <p className="text-xs">
            All images on +GALLERY are approved by the artist.
          </p>
          <div className="sm:hidden xl:flex xl:flex-row xl:gap-6">
            <p className="text-xs text-[#515151] pb-4">Terms and Conditions</p>
            <p className="text-xs text-[#515151]">Privacy Policy</p>
          </div>
        </div>
        <div className="flex">
          <p className="text-xs">©2025 +Gallery - all rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
