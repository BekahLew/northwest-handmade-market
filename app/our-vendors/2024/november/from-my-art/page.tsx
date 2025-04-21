import Image from "next/image"
import Link from "next/link"
import { Leaf, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/november"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">From my Art</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/from-my-art/from-my-art-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for From my Art"
          />
          <div className={styles.bio}>
            <p>Something that has been part of me forever is my burning desire to create things. At three years old I needed to make pies. Specifically, mud pies. I&apos;d pat each one until the liquid settled on top, then sprinkle fresh-picked grass across it for decoration. A few years later, I got an art degree, and now spend as much time as I can bringing my visions of beautiful things into this world. I work in many mediums and materials, from painting and printing to epoxy and pottery, from metal sculpture to photography and I am a published author.</p>
            <p>My booth display focuses on wearable or functional art inspired by Nature, using a variety of materials. For my &quot;other job&quot; I take people outside into nature to destress and rejuvenate them through creative activities.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://frommyart.com/art/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/erikak99"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://eventswild.com/"
              target="_blank"
              rel="noopener"
            >
              <Leaf size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/from-my-art/from-my-art-1.jpg"}
            img1Alt={"custom crafts by From my Art"}
            imgSrc2={"/images/vendors/from-my-art/from-my-art-2.jpg"}
            img2Alt={"custom crafts by From my Art"}
            imgSrc3={"/images/vendors/from-my-art/from-my-art-3.jpg"}
            img3Alt={"custom crafts by From my Art"}
            imgSrc4={"/images/vendors/from-my-art/from-my-art-4.jpg"}
            img4Alt={"custom crafts by From my Art"}
            imgSrc5={"/images/vendors/from-my-art/from-my-art-5.JPG"}
            img5Alt={"custom crafts by From my Art"}
            imgSrc6={"/images/vendors/from-my-art/from-my-art-6.jpg"}
            img6Alt={"custom crafts by From my Art"}
            imgSrc7={"/images/vendors/from-my-art/from-my-art-7.jpg"}
            img7Alt={"custom crafts by From my Art"}
            imgSrc8={"/images/vendors/from-my-art/from-my-art-8.jpg"}
            img8Alt={"custom crafts by From my Art"}
            imgSrc9={"/images/vendors/from-my-art/from-my-art-9.JPG"}
            img9Alt={"custom crafts by From my Art"}
            imgSrc10={"/images/vendors/from-my-art/from-my-art-10.jpg"}
            img10Alt={"custom crafts by From my Art"}
          />
        </div>
      </div>
    </div>
  )
}
