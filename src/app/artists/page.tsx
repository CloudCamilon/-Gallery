"use client";

/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @rjacobo
 */

import { JSX } from "react";
import Header from "../_components/header";
import GalleryItem from "../_components/gallery-item";

const ARTISTS = [
  {
    title: "Francis Bejar",
    url: "/featured/prophetic.jpeg",
  },
  {
    title: "Knell Valdecanas",
    url: "/featured/fragment.png",
  },
  {
    title: "Li Cabangis",
    url: "/featured/chasing.jpeg",
  },
  {
    title: "Isak Isobel",
    url: "/featured/eclipsed.jpeg",
  },
  {
    title: "Nik Gamboa",
    url: "/featured/echoes.jpeg",
  },
  {
    title: "Juan Atienza",
    url: "/artists/juan.jpeg",
  },
  {
    title: "Mikko Hizon",
    url: "/artists/mikko.jpeg",
  },
  {
    title: "Plet Bolipata",
    url: "/artists/plet.jpeg",
  },
  {
    title: "Leonardo Aguinaldo",
    url: "/artists/leonardo.jpeg",
  },

  {
    title: "HR Campos III",
    url: "/artists/hr.jpeg",
  },
];

export default function Artists(): JSX.Element {
  return (
    <div className="bg-white px-0 2xl:px-[25%] text-black ">
      <Header selected={"Artists"} />
      <div className="flex flex-col px-6 py-10">
        <div className="flex flex-col justify-center">
          <div className="text-center text-2xl">Artists</div>
          <div className="mt-8 px-0.5">
            <div className="sm:px-14 gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
              {ARTISTS.map((item, index) => {
                return (
                  <GalleryItem
                    key={index}
                    title={item.title}
                    url={item.url}
                    mode={"artists"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
