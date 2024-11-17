import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/november-23"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November 23rd
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Rainborn Studios</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/rainborn-studios/rainborn-studios-bio.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for rainborn-studios"
          />
          <div className={styles.bio}><p>Hey! I&apos;m Lauren and I run Rainborn Studios, established in 2022 in Seattle Wa. I love to make very silly and cute artwork, that doesn&apos;t take itself too seriously. I make stickers, a variety of paper goods, and I just started making oven baked clay items in 2024 which I have fallen in love with making. Those items include my popular planter buddies and my worms with magnetic interchangeable hats. A lot of my artwork has a nod to growing up in Seattle, or has a heavy PNW influence. I&apos;m excited to see where my small business takes me, and I appreciate everyone who has supported me in any way!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://rainbornstudios.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/rainborn-studios/rainborn-studios-1.jpeg"}
            img1Alt={"Ceramic handmade goods by Rainborn Studios"}
            imgSrc2={"/images/vendors/rainborn-studios/rainborn-studios-2.jpeg"}
            img2Alt={"Ceramic handmade goods by Rainborn Studios"}
            imgSrc3={"/images/vendors/rainborn-studios/rainborn-studios-3.jpeg"}
            img3Alt={"Ceramic handmade goods by Rainborn Studios"}
            imgSrc4={"/images/vendors/rainborn-studios/rainborn-studios-4.jpeg"}
            img4Alt={"Ceramic handmade goods by Rainborn Studios"}
            imgSrc5={"/images/vendors/rainborn-studios/rainborn-studios-5.jpeg"}
            img5Alt={"Ceramic handmade goods by Rainborn Studios"}
            imgSrc6={"/images/vendors/rainborn-studios/rainborn-studios-6.jpeg"}
            img6Alt={"Ceramic handmade goods by Rainborn Studios"}
            imgSrc7={"/images/vendors/rainborn-studios/rainborn-studios-7.jpeg"}
            img7Alt={"Ceramic handmade goods by Rainborn Studios"}
            imgSrc8={"/images/vendors/rainborn-studios/rainborn-studios-8.jpeg"}
            img8Alt={"Ceramic handmade goods by Rainborn Studios"}
            imgSrc9={"/images/vendors/rainborn-studios/rainborn-studios-9.jpeg"}
            img9Alt={"Ceramic handmade goods by Rainborn Studios"}
            imgSrc10={"/images/vendors/rainborn-studios/rainborn-studios-10.jpeg"}
            img10Alt={"Ceramic handmade goods by Rainborn Studios"}
          />
        </div>
      </div>
    </div>
  )
}
