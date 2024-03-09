import { ParallaxImageRight } from "@/components/ParallaxImageRight"
import { ParallaxImageLeft } from "@/components/ParallaxImageLeft"
import { ParallaxImageBottomRight } from "@/components/ParallaxImageBottomRight"
import { Spacer } from "@/components/spacer"
import { CustomButton } from "@/components/Button"
import { BannerImage } from "@/components/banner-image"
import Contact from "@/components/contact"
// import { seedSanityData } from "@/lib/seed"

export default async function Page() {
  // const homepages = await getPages();

  return (
    <>
      <BannerImage src="/images/homepage-banner.webp" alt="man holding handmade soaps"/>
      <div className="pl-[1rem] pr-[1rem] w-full mx-auto max-w-[2000px]">
        <p className="font-Forum text-[2.5rem] md:text-6xl pt-6 text-center">Our Goal</p>
        <div className="max-w-[95%] md:max-w-[65%] mx-auto">
          <h1 className="font-bold text-2xl md:text-3xl pt-8 pb-[2rem] md:pb-[1rem]">The Northwest Handmade Market aims to provide amazing handmade goods as close to home as possible.</h1>
          <div className="md:pt-6 pb-[2rem] flex items-center flex-col">
            <p>We&apos;ve hand-selected vendors from your neighborhood in order to provide you with the opportunity to directly support your community. Products at our shows include pottery, baked goods, quilts, macrame, jewelry, soaps, honey, candles, art, freeze-dried goodies and so much more!</p>
            <CustomButton link="/events" text="Find Shows" />
            <div className="md:pt-[4rem] pt-[2rem]"><Spacer /></div>
          </div>
        </div>

        <ParallaxImageRight />
        <div className="flex items-center flex-col">
          <h2 className="text-center md:text-left font-Forum text-[2.5rem] md:text-6xl md:pt-[4rem] pt-[0]">Why Buy Local?</h2>
          <ul className="max-w-[95%] md:max-w-[65%] md:pb-[2rem] pt-[2rem] pl-[2rem]">
            <li className="mb-[1rem] leading-tight">You can gain a personal connection with the items you buy directly from the maker.</li>
            <li className="mb-[1rem] leading-tight">The community prospers when the money stays local and more jobs are created close to home.</li>
            <li className="mb-[1rem] leading-tight">It decreases the environmental cost of transportation and emissions from fossil fuels.</li>
            <li className="mb-[1rem] leading-tight">It reduces the amount of packaging that ends up in the landfill.</li>
            <li className="mb-[1rem] leading-tight">You&apos;re supporting a person and their dreams.</li>
          </ul>
          <CustomButton link="/our-vendors" text="Explore Vendors"  />
        </div>
        <ParallaxImageLeft />
        <ParallaxImageBottomRight />
      </div>
      <Contact />
    </>
  )
}
