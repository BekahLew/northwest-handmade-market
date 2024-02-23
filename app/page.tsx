import { ParallaxImageRight } from "@/components/ParallaxImageRight"
import { ParallaxImageLeft } from "@/components/ParallaxImageLeft"
import { ParallaxImageBottomRight } from "@/components/ParallaxImageBottomRight"
import { Spacer } from "@/components/spacer"
import { CustomButton } from "@/components/Button"
import { BannerImage } from "@/components/banner-image"
import Contact from "@/components/contact"
import { getPages } from "@/sanity/schemas/sanity-utils"
import { PortableText } from "@portabletext/react"

export default async function Page() {
  const homepages = await getPages();

  return (
    <>
      {homepages.map((page) => (        
        <div key={page._id}>
          <BannerImage src={page.heroImage} alt={page.heroImageAltText}/>
          <div className="pl-[1rem] pr-[1rem] md:pr-20 md:pl-20 w-full mx-auto max-w-[2000px]">
            <p className="font-Forum text-[2.5rem] md:text-6xl pt-6 text-center md:text-left">{page.mainTitle}</p>
            <h1 className="font-bold text-2xl md:text-3xl pt-8 md:pr-[8rem] pb-[2rem] md:pb-[1rem]"><PortableText value={page.snippet}/></h1>
            <div className="md:pt-6 md:pr-[8rem] md:pl-20 pb-[2rem] flex items-center flex-col">
              <p><PortableText value={page.mainText}/></p>
              {/* <CustomButton link={page.bottomButtonLink} text={page.bottomButtonText} /> */}
              <div className="md:pt-[4rem] pt-[2rem]"><Spacer /></div>
            </div>

            <ParallaxImageRight />
            <div className="flex items-center flex-col">
              <h2 className="text-center md:text-left font-Forum text-[2.5rem] md:text-6xl md:pl-[8rem] pl-0 md:pt-[4rem] pt-[0]">{page.secondaryTitle}</h2>
              <div className="2xl:pl-0 md:pl-[7rem] md:pb-[2rem] pt-[2rem] pl-[2rem]">
                <PortableText value={page.secondaryText}/>
              </div>
              {/* <CustomButton link={page.buttonLink} text={page.buttonText} /> */}
            </div>
            <ParallaxImageLeft />
            <ParallaxImageBottomRight />
          </div>
          <Contact />
        </div>
      ))}
    </>
  )
}
