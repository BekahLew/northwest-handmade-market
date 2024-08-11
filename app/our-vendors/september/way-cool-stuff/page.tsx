import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/september"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to September
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Way Cool Stuff</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/way-cool-stuff/way-cool-stuff-bio.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for red sunset designs"
          />
          <div className={styles.bio}><p>I have been knitting since I was a little girl, taught by my Mom.  I discovered big needles and felting and THEN spinning Art Yarn!  Bliss!!  All my yarn is handspun from roving or fleece that I have purchased from a few favorite sheppards.  I began selling at Farmers Markets, still do, and have increased my product line based on what inspires me. I handknit my bags then felt them in my washing machine, add interesting buttons and leather belts for wearing crossbody.  My hats are whimsically fun!  The only style I offer. :)  My scarves are actually fiber necklaces, made to be worn as a &quot;jewelry&quot; accessory. My interests range from elegant to eclectic to practical and even conservative.  Everything I sell is handmade by me and I love every process that I have learned. My birdfeeders are made from pairing together dishware that creates a practical and whimsical addition for your garden.  My newest adventure is making jewelry utilizing a variety of mediums and creating awesome pieces that hopefully inspire YOU!  You will find lamp work glass beads, metal, enamel, polymer clay, ceramic and porcelain pieces. I often combine multiple mediums and have been known to mix up the metals....makes it more interesting, I think. I hope you will find something of mine that you love and will make your own.  Sandy</p></div>
          <div className="flex justify-center">
          <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/profile.php?id=100027192112773"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/iswaycoolstuff"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/waycoolstuff09"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
    
        <div>
          <Slider
            imgSrc1={"/images/vendors/way-cool-stuff/way-cool-stuff-2.jpeg"}
            img1Alt={"Unique spun art yarn by Way Cool Stuff"}
            imgSrc2={"/images/vendors/way-cool-stuff/way-cool-stuff-1.jpeg"}
            img2Alt={"Unique spun art yarn by Way Cool Stuff"}
            imgSrc3={"/images/vendors/way-cool-stuff/way-cool-stuff-3.jpeg"}
            img3Alt={"Unique spun art yarn by Way Cool Stuff"}
            imgSrc4={"/images/vendors/way-cool-stuff/way-cool-stuff-4.jpeg"}
            img4Alt={"Unique spun art yarn by Way Cool Stuff"}
            imgSrc5={"/images/vendors/way-cool-stuff/way-cool-stuff-5.jpeg"}
            img5Alt={"Unique spun art yarn by Way Cool Stuff"}
            imgSrc6={"/images/vendors/way-cool-stuff/way-cool-stuff-6.jpeg"}
            img6Alt={"Unique spun art yarn by Way Cool Stuff"}
            imgSrc7={"/images/vendors/way-cool-stuff/way-cool-stuff-7.jpeg"}
            img7Alt={"Unique spun art yarn by Way Cool Stuff"}
            imgSrc8={"/images/vendors/way-cool-stuff/way-cool-stuff-8.jpeg"}
            img8Alt={"Unique spun art yarn by Way Cool Stuff"}
            imgSrc9={"/images/vendors/way-cool-stuff/way-cool-stuff-9.jpeg"}
            img9Alt={"Unique spun art yarn by Way Cool Stuff"}
            imgSrc10={"/images/vendors/way-cool-stuff/way-cool-stuff-10.jpeg"}
            img10Alt={"Unique spun art yarn by Way Cool Stuff"}
          />
        </div>
      </div>
    </div>
  )
}
