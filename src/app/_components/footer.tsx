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
        <div className="flex-col text-customGray xs:text-black">
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
          <p className="pb-1">Contact Us</p>
          <p className="text-sm">info@plusgallery.com</p>
          <p className="text-sm">
            123 Santolan Street, Katipunan Ave, Quezon City, Metro Manila, 1500,
            Philippines
          </p>
          <p className="pt-8">Follow Us</p>
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
        <div className="flex">
          <p className="text-sm">
            All images on +GALLERY are approved by the artist.
          </p>
        </div>
        <div className="md:hidden">
          <p className="text-sm text-[#515151]">Terms and Conditions</p>
          <p className="text-sm text-[#515151] pt-2">Privacy Policy</p>
        </div>
        <div className="flex">
          <p className="text-sm">©2025 +Gallery - all rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
