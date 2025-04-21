import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/june"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to June
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">V&apos;s Treats Bakery</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/vs-treats/vs-treats-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for vs treats"
          />
          <div className={styles.bio}><p>V grew up in Seattle, WA with a terrible sweet tooth. She decided she needed to learn how to make all these delicious baked goods she loved so much on her own! This was a fun adventure but it also created a self-proclaimed, &quot;food snob.&quot; She would later pursue her studies in a STEM field, where she learned more about nutrition and developed an interest in eating with fresh and real ingredients as opposed to those filled with preservatives and artificial flavors. During this time, V started baking more and more for family and friends and focused on scratch-made items so others would know her goodies were made with love & only real ingredients.  Fast forward several years later to the pandemic where most of the world had shut down and V started dating her now- husband who lived in Texas. Long distance was hard & she figured the best way to show him she cared other than video calls was to send him her baked goods. He especially loved her jumbo cookies & sourdough breads! Soon after they got married, V&apos;s Treats home bakery was born.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/vs_treats/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/vs-treats/vs-treats-1.jpg"}
            img1Alt={"Homemade baked goods by Vs Treats"}
            imgSrc2={"/images/vendors/vs-treats/vs-treats-2.jpg"}
            img2Alt={"Homemade baked goods by Vs Treats"}
            imgSrc3={"/images/vendors/vs-treats/vs-treats-3.png"}
            img3Alt={"Homemade baked goods by Vs Treats"}
            imgSrc4={"/images/vendors/vs-treats/vs-treats-4.jpg"}
            img4Alt={"Homemade baked goods by Vs Treats"}
            imgSrc5={"/images/vendors/vs-treats/vs-treats-5.jpg"}
            img5Alt={"Homemade baked goods by Vs Treats"}
            imgSrc6={"/images/vendors/vs-treats/vs-treats-6.jpg"}
            img6Alt={"Homemade baked goods by Vs Treats"}
            imgSrc7={"/images/vendors/vs-treats/vs-treats-7.jpg"}
            img7Alt={"Homemade baked goods by Vs Treats"}
            imgSrc8={"/images/vendors/vs-treats/vs-treats-8.jpg"}
            img8Alt={"Homemade baked goods by Vs Treats"}
            imgSrc9={"/images/vendors/vs-treats/vs-treats-9.jpg"}
            img9Alt={"Homemade baked goods by Vs Treats"}
            imgSrc10={"/images/vendors/vs-treats/vs-treats-10.jpg"}
            img10Alt={"Homemade baked goods by Vs Treats"}
          />
        </div>
      </div>
    </div>
  )
}
