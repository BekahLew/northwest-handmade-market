import { ParallaxImageRight } from "@/components/ParallaxImageRight"
import { ParallaxImageLeft } from "@/components/ParallaxImageLeft"
import { ParallaxImageBottomRight } from "@/components/ParallaxImageBottomRight"
import { Spacer } from "@/components/spacer"
import { CustomButton } from "@/components/Button"
import { BannerImage } from "@/components/banner-image"
import { ContactForm } from "@/components/ContactForm"

export default async function Page() {
  return (
    <>
      <BannerImage src="/images/homepage-hero.jpg" alt="image of canned jams with a rustic look at a sunny outdoor market" />
      <div className="pl-[1rem] pr-[1rem] sm:pr-20 sm:pl-20 w-full mx-auto max-w-[2000px]">
        <p className="font-Forum text-[2.5rem] sm:text-6xl pt-6 text-center sm:text-left">OUR GOAL</p>
        <h1 className="font-bold text-2xl sm:text-3xl pt-8 sm:pr-[8rem] pb-[2rem] sm:pb-[1rem]">The Northwest Handmade Market aims to provide amazing handmade goods as close to home as possible.</h1>
        <div className="sm:pt-6 sm:pr-[8rem] sm:pl-20 pb-[2rem] flex items-center flex-col">
          <p>We&apos;ve hand-selected vendors from your neighborhood in order to provide you with the opportunity to directly support your community. Products at our shows include pottery, baked goods, quilts, macrame, jewelry, soaps, honey, candles, art, freeze-dried goodies and so much more!</p>
          {/* <CustomButton link='#' text="EXPLORE VENDORS" /> */}
          <div className="sm:pt-[4rem] pt-[2rem]"><Spacer /></div>
        </div>

        <ParallaxImageRight />
        <div className="flex items-center flex-col">
          <h2 className="text-center sm:text-left font-Forum text-[2.5rem] sm:text-6xl sm:pt-[4rem] sm:pl-[8rem] pt-[0]">WHY BUY LOCAL?</h2>
          <ul className="sm:pl-[7rem] sm:pb-[4rem] pt-[2rem] pl-[2rem]">
            <li>You can gain a personal connection with the items you buy directly from the maker.</li>
            <li>The community prospers when the money stays local and more jobs are created close to home.</li>
            <li>Reduces the environmental cost of transportation and emissions from fossil fuels.</li>
            <li>It reduces the amount of packaging that ends up in the landfill.</li>
            <li>You&apos;re supporting a person and their dreams.</li>
          </ul>
          {/* <CustomButton link='#' text="FIND A SHOW" /> */}
        </div>
        <ParallaxImageLeft />
      </div>
      {/* <ParallaxImageBottomRight /> */}
      {/* <ContactForm /> */}
    </>
  )
}
