"use client";

import Spinningbg from "@/components/spinning/Spinningbg";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      {/* background gradient radial effectv*/}
      <div>
        <Spinningbg />
      </div>
      {/* main contents */}
      <div className="">
        {/* header */}
        <div className="">
          <Header />
        </div>
      </div>
    </main>
  );
}
