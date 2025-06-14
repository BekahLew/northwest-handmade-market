import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Zarqa Makes</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/zarqa-makes/zarqa-makes-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio picture for zarqa makes"
          />
          <div className={styles.bio}><p>I came to pottery just as the world was opening up post-pandemic. I&apos;ve tried just about every craft imaginable, and this brand-new-to-me art form brought a unique and invigorating balance of making, learning, and community. Having long been a consumer of great art, I thought now is a good a time as any to delve into producing things that can bring joy and beauty into any home. My formal education leaned into the sciences so I&apos;m increasingly fascinated by the materials and processes of pot-making. I love the constant learning, experimentation and ways of creating afforded by this lovely alchemy of earth, water and fire.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/ZarqaMakes"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/zarqa-makes/zarqa-makes-1.JPEG"}
            img1Alt={"handmade pottery"}
            imgSrc2={"/images/vendors/zarqa-makes/zarqa-makes-2.JPEG"}
            img2Alt={"handmade pottery"}
            imgSrc3={"/images/vendors/zarqa-makes/zarqa-makes-3.JPEG"}
            img3Alt={"handmade pottery"}
            imgSrc4={"/images/vendors/zarqa-makes/zarqa-makes-4.JPEG"}
            img4Alt={"handmade pottery"}
            imgSrc5={"/images/vendors/zarqa-makes/zarqa-makes-5.JPEG"}
            img5Alt={"handmade pottery"}
            imgSrc6={"/images/vendors/zarqa-makes/zarqa-makes-6.JPEG"}
            img6Alt={"handmade pottery"}
            imgSrc7={"/images/vendors/zarqa-makes/zarqa-makes-7.JPEG"}
            img7Alt={"handmade pottery"}
            imgSrc8={"/images/vendors/zarqa-makes/zarqa-makes-8.jpeg"}
            img8Alt={"handmade pottery"}
            imgSrc9={"/images/vendors/zarqa-makes/zarqa-makes-9.jpeg"}
            img9Alt={"handmade pottery"}
            imgSrc10={"/images/vendors/zarqa-makes/zarqa-makes-10.jpeg"}
            img10Alt={"handmade pottery"}
          />
        </div>
      </div>
    </div>
  )
}
