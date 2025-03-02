/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @rjacobo
 */

import { JSX } from "react";
import Image from "next/image";

interface GalleryItemProp {
  title: string;
  subtitle: string;
  details?: string;
  url: string;
  thin: boolean;
}

export default function GalleryItem({
  title,
  subtitle,
  details,
  url,
  thin,
}: GalleryItemProp): JSX.Element {
  return (
    <div className="gap-2 flex flex-col cursor-pointer">
      <div
        className={`relative w-full ${
          thin ? "h-[222px]" : "h-[178px]"
        } md:h-[275px]`}
      >
        <Image fill style={{ objectFit: "cover" }} src={url} alt="Earnest" />
      </div>
      <div className="text-sm font-urbanist font-bold uppercase">{title}</div>
      <div className="text-sm font-urbanist">{subtitle}</div>
      <div className="text-sm font-urbanist">{details}</div>
    </div>
  );
}
