import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Handslow Pottery</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/handslow-pottery/handslow-pottery-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for handslow pottery"
          />
          <div className={styles.bio}>
            <p>With each piece, I reconnect my hands with the simple joy of creation, with a sense of family, and humanity.</p>
            <p>My journey into pottery began with cherished moments of claywork alongside my grandmother. When I inherited her studio a decade ago, my childhood dabbling transformed into a serious hobby of making dishes for my own home and family. And last year, Hand Slow Pottery grew as a healing micro-business, a gentle project where I could regain strength and clarity after illness.</p>
            <p>Today, Hand Slow Pottery stands as a testament to slow living and human connection. Each piece, simply glazed and richly textured, evokes a sense of timelessness. It&apos;s an invitation to touch, to feel the firm presence of living in a moment - to eat, drink, and feed one another from a handmade vessel.</p>
            <p>As you stroll through the craft market, I invite you to stop by and say hello. Let yourself be drawn in by the tactile aesthetic of my work. With each piece, I hope to create a moment of connection, a reminder of the beauty found in the simple things.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/handslowpottery"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.handslowpottery.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/handslow-pottery/handslow-pottery-1.jpeg"}
            img1Alt=""
            imgSrc2={"/images/vendors/handslow-pottery/handslow-pottery-2.JPG"}
            img2Alt=""
            imgSrc3={"/images/vendors/handslow-pottery/handslow-pottery-3.JPG"}
            img3Alt=""
            imgSrc4={"/images/vendors/handslow-pottery/handslow-pottery-4.JPG"}
            img4Alt=""
            imgSrc5={"/images/vendors/handslow-pottery/handslow-pottery-5.jpg"}
            img5Alt=""
            imgSrc6={""}
            img6Alt=""
            imgSrc7={""}
            img7Alt=""
            imgSrc8={""}
            img8Alt=""
            imgSrc9={""}
            img9Alt=""
            imgSrc10={""}
            img10Alt=""
          />
        </div>
      </div>
    </div>
  )
}
