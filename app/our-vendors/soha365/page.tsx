import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">SoHa365</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/soha365/soha365-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for soha365"
          />
          <div className={styles.bio}><p>I am a stay home mother of three from Kikrland, WA. I have loved sewing since I was very young. For the last couple of years, I have  been working on making dance wear (ice skating dresses, ballet skirts,  leotards..) and recycled denim products when I have some free time. I started my first shop on Etsy. (Here is the link to my shop: <a href="https://soha365.etsy.com" target="_blank">https://soha365.etsy.com</a>, <a href="https://soha-365.com" target="_blank">https://soha-365.com</a> , <a href="https://www.facebook.com/soha.365.fashion" target="_blank">https://www.facebook.com/soha.365.fashion</a>). I have had some amount of returned customers after a while. To me, reused denim or other fabrics are great ideas to save sources, environment. It also gives me so many ways to create.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/soha.365.fashion"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://soha-365.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://soha365.etsy.com"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/soha365/soha365-1.jpeg"}
            img1Alt={"Custon designed clothes by SoHa365"}
            imgSrc2={"/images/vendors/soha365/soha365-2.jpeg"}
            img2Alt={"Custon designed clothes by SoHa365"}
            imgSrc3={"/images/vendors/soha365/soha365-3.jpeg"}
            img3Alt={"Custon designed clothes by SoHa365"}
            imgSrc4={"/images/vendors/soha365/soha365-4.jpeg"}
            img4Alt={"Custon designed clothes by SoHa365"}
            imgSrc5={"/images/vendors/soha365/soha365-5.jpeg"}
            img5Alt={"Custon designed clothes by SoHa365"}
            imgSrc6={"/images/vendors/soha365/soha365-6.jpeg"}
            img6Alt={"Custon designed clothes by SoHa365"}
            imgSrc7={"/images/vendors/soha365/soha365-7.png"}
            img7Alt={"Custon designed clothes by SoHa365"}
            imgSrc8={"/images/vendors/soha365/soha365-8.jpeg"}
            img8Alt={"Custon designed clothes by SoHa365"}
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
