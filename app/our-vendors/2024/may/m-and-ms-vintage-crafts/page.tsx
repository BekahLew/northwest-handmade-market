import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/may"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to May
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">M&M&apos;s Vintage Crafts and Decor</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/m-and-m/m-and-m-6.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for m&m vintage"
          />
          <div className={styles.bio}>
            <p>Hello, my name is Mandy. I am the creator of M&M&apos;s Vintage Crafts and Decor. I live in Mountlake Terrace with my family.</p>
            <p>My creative journey started when I was making Mother&apos;s Day gifts for friends and family. A few little hens and chicks in a teacup is all it took, I was hooked.</p>
            <p>Since then I have been doing local craft shows for over 7 years.</p>
            <p>My company name, as with my style, is very eclectic. From mason jar lights to succulents, I just love to repurpose items in a new and unique way.</p>
            <p>It&apos;s vintage inspiration with a boho vibe!</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/MandMsVintagecrafts"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/m-and-m/m-and-m-1.jpeg"}
            img1Alt={"rustic vintage goods"}
            imgSrc2={"/images/vendors/m-and-m/m-and-m-2.jpeg"}
            img2Alt={"rustic vintage goods"}
            imgSrc3={"/images/vendors/m-and-m/m-and-m-3.jpeg"}
            img3Alt={"rustic vintage goods"}
            imgSrc4={"/images/vendors/m-and-m/m-and-m-4.jpeg"}
            img4Alt={"rustic vintage goods"}
            imgSrc5={"/images/vendors/m-and-m/m-and-m-5.jpeg"}
            img5Alt={"rustic vintage goods"}
            imgSrc6={"/images/vendors/m-and-m/m-and-m-6.jpeg"}
            img6Alt={""}
            imgSrc7={""}
            img7Alt={""}
            imgSrc8={""}
            img8Alt={""}
            imgSrc9={""}
            img9Alt={""}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
