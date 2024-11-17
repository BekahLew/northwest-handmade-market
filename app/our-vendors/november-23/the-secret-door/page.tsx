import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">The Secret Door</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/the-secret-door/the-secret-door-logo.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for the-secret-door"
          />
          <div className={styles.bio}><p>Hello! I&apos;m miranda. I&apos;m a wire wrap artist with a love for crystals. My little store includes both of these things! Handmade wire wrapped pendants in copper and sterling silver, beaded jewelry such as bracelets and necklaces, and a wide variety high quality crystal cuts and types.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://shopthesecretdoor.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/shopthesecretdoor"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/the-secret-door/the-secret-door-1.jpeg"}
            img1Alt={"Crystals, books and wire jewelry by the secret door"}
            imgSrc2={"/images/vendors/the-secret-door/the-secret-door-2.jpeg"}
            img2Alt={"Crystals, books and wire jewelry by the secret door"}
            imgSrc3={"/images/vendors/the-secret-door/the-secret-door-3.jpeg"}
            img3Alt={"Crystals, books and wire jewelry by the secret door"}
            imgSrc4={"/images/vendors/the-secret-door/the-secret-door-4.jpeg"}
            img4Alt={"Crystals, books and wire jewelry by the secret door"}
            imgSrc5={"/images/vendors/the-secret-door/the-secret-door-5.jpeg"}
            img5Alt={"Crystals, books and wire jewelry by the secret door"}
            imgSrc6={"/images/vendors/the-secret-door/the-secret-door-6.jpeg"}
            img6Alt={"Crystals, books and wire jewelry by the secret door"}
            imgSrc7={"/images/vendors/the-secret-door/the-secret-door-7.jpeg"}
            img7Alt={"Crystals, books and wire jewelry by the secret door"}
            imgSrc8={"/images/vendors/the-secret-door/the-secret-door-8.jpeg"}
            img8Alt={"Crystals, books and wire jewelry by the secret door"}
            imgSrc9={"/images/vendors/the-secret-door/the-secret-door-9.jpeg"}
            img9Alt={"Crystals, books and wire jewelry by the secret door"}
            imgSrc10={"/images/vendors/the-secret-door/the-secret-door-10.jpeg"}
            img10Alt={"Crystals, books and wire jewelry by the secret door"}
          />
        </div>
      </div>
    </div>
  )
}
