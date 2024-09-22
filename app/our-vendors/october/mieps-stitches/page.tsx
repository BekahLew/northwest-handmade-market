import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/october"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to October
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Miep&apos;s Stitches</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/mieps-stitches/mieps-stitches-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for mieps stitches"
          />
          <div className={styles.bio}>
            <p>Inspired by my Dutch grandmother, Miep, and her love for creating, I bring a touch of handmade charm to every stitch. My journey began with a present – a sewing machine – that sparked my passion for sewing, starting with gifts and clothes for my children. Now, I specialize in crafting one-of-a-kind bags and pouches for pencils, glasses, iPads, and more. My signature is blending printed and solid patterns in vibrant colors.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/mieps_stitches/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/mieps-stitches/mieps-stitches-1.jpg"}
            img1Alt={"hand sewn goods in Edmonds by mieps stitches"}
            imgSrc2={"/images/vendors/mieps-stitches/mieps-stitches-2.jpg"}
            img2Alt={"hand sewn goods in Edmonds by mieps stitches"}
            imgSrc3={"/images/vendors/mieps-stitches/mieps-stitches-3.jpg"}
            img3Alt={"hand sewn goods in Edmonds by mieps stitches"}
            imgSrc4={"/images/vendors/mieps-stitches/mieps-stitches-4.jpg"}
            img4Alt={"hand sewn goods in Edmonds by mieps stitches"}
            imgSrc5={"/images/vendors/mieps-stitches/mieps-stitches-5.jpg"}
            img5Alt={"hand sewn goods in Edmonds by mieps stitches"}
            imgSrc6={"/images/vendors/mieps-stitches/mieps-stitches-6.jpg"}
            img6Alt={"hand sewn goods in Edmonds by mieps stitches"}
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
