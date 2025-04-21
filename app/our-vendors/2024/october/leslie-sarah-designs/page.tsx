import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/october"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to October
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">LeslieSarah Designs</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for leslie sarah designs"
          />
          <div className={styles.bio}>
            <p>I am a recovering lawyer, originally from NYC. In my second year of law school I joined the U.S. Navy Judge Advocate General&apos;s Corp and served for 1 year in the reserves and 11 years on active duty. During those years, I was stationed in Newport, RI, Norfolk, VA, Diego Garcia B.I.O.T., Bremerton, WA, and San Diego, CA before begging to come back to Washington and serving my last tour back in Bremerton, WA. I couldn&apos;t be a lawyer anymore (the memes about unhappy lawyers are real!) and wanted to pursue something more creative, so I went all the way back to undergrad to get a Bachelor&apos;s of Fine Arts in Graphic Design at Cornish College of the Arts in Seattle, WA.</p>
            <p>I started Leslie Sarah Designs for my freelance graphic design and jewelry design work. I love drawing inspiration from nature and the beauty that surrounds me here in the PNW. If you need me and I&apos;m not working, I&apos;m probably in the mountains - either hiking or snowboarding - or out on the water paddle boarding or swimming, probably with my dog, Jeeter.</p>
            <p>I offer jewelry for any gender and home good products. This includes, but is not limited to, earrings, bracelets, rings, necklaces, hair clips, lapel pins, cufflinks, tie clips, plant indicator signs, magnets, keychains, and trinket trays. All items are handmade out of polymer clay and  a variety of metals. All items are hypoallergenic, and may be customized. Customizations that cannot be completed on site at market events will be shipped by the end of the following week at no cost to the customer.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.lesliesarahdesigns.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-1.jpg"}
            img1Alt={"custom crafts by leslie sarah designs"}
            imgSrc2={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-2.jpg"}
            img2Alt={"custom crafts by leslie sarah designs"}
            imgSrc3={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-3.jpg"}
            img3Alt={"custom crafts by leslie sarah designs"}
            imgSrc4={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-4.jpg"}
            img4Alt={"custom crafts by leslie sarah designs"}
            imgSrc5={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-1.jpg"}
            img5Alt={"custom crafts by leslie sarah designs"}
            imgSrc6={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-6.jpg"}
            img6Alt={"custom crafts by leslie sarah designs"}
            imgSrc7={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-7.jpg"}
            img7Alt={"custom crafts by leslie sarah designs"}
            imgSrc8={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-8.jpg"}
            img8Alt={"custom crafts by leslie sarah designs"}
            imgSrc9={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-9.jpg"}
            img9Alt={"custom crafts by leslie sarah designs"}
            imgSrc10={"/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-10.jpg"}
            img10Alt={"custom crafts by leslie sarah designs"}
          />
        </div>
      </div>
    </div>
  )
}
