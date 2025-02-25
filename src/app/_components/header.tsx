/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @rjacobo
 */

import Link from "next/link";
import { JSX } from "react";
import Image from "next/image";

type HeaderItem =
  | "HOME"
  | "ARTISTS"
  | "EXHIBITIONS"
  | "ABOUT"
  | "SHOP"
  | "CONTACT";

const HeaderItems = [
  { title: "HOME", link: "/" },
  { title: "ARTISTS", link: "/artists" },
  { title: "EXHIBITIONS", link: "/" },
  { title: "ABOUT", link: "/" },
  { title: "SHOP", link: "/" },
  { title: "CONTACT", link: "/" },
];

const HeaderItem = ({
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
            px-2
        text-xs
          ${
            selected ? "font-bold hover:underline" : "font-normal"
          } cursor-pointer`}
      >
        {title}
      </div>
    </Link>
  );
};

export default function Header({ selected }: { selected: HeaderItem }) {
  return (
    <div className="flex bg-white justify-between sticky z-50  top-0 w-page h-[120px] px-20 items-center">
      <div className="flex ">
        <Image
          src={"./+gallery.svg"}
          alt={"+Gallery Logo"}
          width={80}
          height={20}
        />
      </div>
      <div className=" flex flex-row gap-6">
        {HeaderItems.map((item, index) => (
          <HeaderItem
            key={index}
            title={item.title}
            selected={item.title === selected}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
