import { getListCategory } from "@/api/category";
import MainFooter from "@/components/Footers/MainFooter";
import MainHeaderMobile from "@/components/Headers/MailHeaderMobile";
import MainHeaderDesktop from "@/components/Headers/MainHeaderDesktop";
import { IFilter, ILayout } from "@/interfaces";
export async function MainLayout({ children }: Readonly<ILayout>) {
  const categories = await getListCategory({} as IFilter);
  return (
    <section className="w-screen   bg-[url('/images/bg_light.png')] dark:bg-[url('/images/bg_dark.gif')]  bg-cover text-[#4e4e4e]  relative  ">
      <MainHeaderMobile categories={categories} />
      <MainHeaderDesktop categories={categories} />
      {children}
      <MainFooter />
    </section>
  );
}
