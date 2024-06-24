import MainFooter from "@/components/Footers/MainFooter";
import MainHeaderMobile from "@/components/Headers/MailHeaderMobile";
import MainHeaderDesktop from "@/components/Headers/MainHeaderDesktop";
import { ILayout } from "@/interfaces";
import * as React from "react";
export function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className="w-screen   text-[#4e4e4e]  relative  bg-[#D3D3D3] bg-gradient-to-b from-[#d4d4d4] to-[#f4f4f4] ">
      <MainHeaderMobile />
      <MainHeaderDesktop />
      {children}
      <MainFooter />
    </section>
  );
}
