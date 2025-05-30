import React from "react";
import SearchFrom from "@/components/SearchForm";
import PackagesSection from "@/components/Packages";
import HeroSection from "@/components/HeroBanner";
import Combanner from "@/components/CommBanner";
import MapLocation from "@/components/Map";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section className="max-w-full flex justify-center items-center bg-gradient-to-br from-purple-50 to-indigo-50">
        <SearchFrom/>
        </section>
        <section className="pb-10">
        <PackagesSection/>
        </section>
       <section className="mb-4 py-4">
        <HeroSection/>
        <Combanner/>
       </section>
       <section className="">
        <MapLocation/>
       </section>
      </main>
    </div>
  );
}
