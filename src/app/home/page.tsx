"use client";

/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @rjacobo
 */

import Header from "../_components/header";
import useDebouncedResize from "../hooks/useDebouncedResize";
import GalleryItem from "../_components/gallery-item";
import Footer from "../_components/footer";

const EXHIBITIONS = [
  {
    title: "Melted City 5",
    subtitle: "18 Feb 2025 – 2 Mar 2025",
    details: "West Gallery",
    url: "/exhibitions/melted-city.jpeg",
  },
  {
    title: "all drama begins with frailty",
    subtitle: "18 Feb 2025 – 2 Mar 2025",
    details: "Anima Art Space",
    url: "/exhibitions/all-drama.jpeg",
  },
  {
    title: "the no name show",
    subtitle: "18 Feb 2025 – 2 Mar 2025",
    details: "Vinyl On Vinyl",
    url: "/exhibitions/the-no.jpeg",
  },
  {
    title: "shameless",
    subtitle: "18 Feb 2025 – 2 Mar 2025",
    details: "Vinyl On Vinyl",
    url: "/exhibitions/shameless.jpeg",
  },
  {
    title: "Francis Bejar",
    subtitle: "18 Feb 2025 – 2 Mar 2025",
    details: "Gravity Art Space",
    url: "/exhibitions/francis-bejar.jpeg",
  },
];

const FEATURED = [
  {
    title: "Prophetic Failure Without Particular Order",
    subtitle: "Francis Bejar",
    url: "/featured/prophetic.jpeg",
  },
  {
    title: "Fragments of Celestial Echoes",
    subtitle: "Knell Valdecanas",
    url: "/featured/fragment.png",
  },
  {
    title: "Chasing Dreams in Pastel",
    subtitle: "Li Cabangis",
    url: "/featured/chasing.jpeg",
  },
  {
    title: "Eclipsed Dreams",
    subtitle: "Francis Bejar",
    url: "/featured/eclipsed.jpeg",
  },
  {
    title: "Echoes in a Starlit Abyss",
    subtitle: "Francis Bejar",
    url: "/featured/echoes.jpeg",
  },
];

export default function Home() {
  const { width } = useDebouncedResize();

  return (
    <div className="">
      <Header selected="Home" />
      <div className="flex flex-col px-6 py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[80%] text-center text-2xl">
            Current & Upcoming Exhibitions
          </div>
          <div className="mt-8 px-0.5">
            <div className="sm:px-0 gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
              {EXHIBITIONS.map((item, index) => {
                if (index > 3 && width <= 425) return;
                return (
                  <GalleryItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    details={item.details}
                    url={item.url}
                    thin={true}
                  />
                );
              })}
            </div>
          </div>
          <div className="block md:hidden w-full text-center mt-9 font-urbanist font-normal  size-6">
            View all
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40">
          <div className="w-[80%] text-center text-2xl">Featured</div>
          <div className="mt-8 lg:px-0">
            <div className="sm:px-4 gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {FEATURED.map((item, index) => {
                if (index > 3 && width <= 425) return null;
                return (
                  <GalleryItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    url={item.url}
                    thin={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer selected="Home" />
    </div>
  );
}
