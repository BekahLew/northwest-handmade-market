import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"
import { Instagram, ShoppingBag, Music2 } from "lucide-react"

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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Tyche Handcrafted</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/tyche-handcrafted/tyche-handcrafted-logo-img.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for tyche handcrafted"
          />
          <div className={styles.bio}>
            <p>Based in the heart of Bellevue, I am a passionate artist who brings creativity to life through the art, fragrance, and candles. I began crafting candles as a hobby and my personal endeavor soon blossomed into something more profound. With an abundance of handmade candles and a desire to share my aromatic creations with the community, I embarked on a new adventure, establishing my own business.</p>
            <p>Beyond the allure of my products lies a deeper connection to the community. I find solace and joy in the camaraderie of local women small business owners. Each event I attend becomes not only an opportunity to showcase my wares but also a chance to recharge my social battery among like-minded individuals.</p>
            <p>For me, the true magic lies in the reactions of those who encounter my candles. Witnessing the myriad of emotions and memories evoked by my fragrances is a source of endless inspiration and fulfillment.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/TycheHandcrafted"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/tyche_handcrafted/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.tiktok.com/@tychehandcrafted"
              target="_blank"
              rel="noopener"
            >
              <Music2 size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/tyche-handcrafted/tyche-handcrafted-1.jpg"}
            img1Alt={"handmade candles by tyche handcrafted"}
            imgSrc2={"/images/vendors/tyche-handcrafted/tyche-handcrafted-2.jpg"}
            img2Alt={"handmade candles by tyche handcrafted"}
            imgSrc3={"/images/vendors/tyche-handcrafted/tyche-handcrafted-3.jpg"}
            img3Alt={"handmade candles by tyche handcrafted"}
            imgSrc4={"/images/vendors/tyche-handcrafted/tyche-handcrafted-4.jpg"}
            img4Alt={"handmade candles by tyche handcrafted"}
            imgSrc5={"/images/vendors/tyche-handcrafted/tyche-handcrafted-5.jpg"}
            img5Alt={"handmade candles by tyche handcrafted"}
            imgSrc6={"/images/vendors/tyche-handcrafted/tyche-handcrafted-6.jpg"}
            img6Alt={"handmade candles by tyche handcrafted"}
            imgSrc7={"/images/vendors/tyche-handcrafted/tyche-handcrafted-7.jpg"}
            img7Alt={"handmade candles by tyche handcrafted"}
            imgSrc8={"/images/vendors/tyche-handcrafted/tyche-handcrafted-8.jpg"}
            img8Alt={"handmade candles by tyche handcrafted"}
            imgSrc9={"/images/vendors/tyche-handcrafted/tyche-handcrafted-9.jpg"}
            img9Alt={"handmade candles by tyche handcrafted"}
            imgSrc10={"/images/vendors/tyche-handcrafted/tyche-handcrafted-10.jpg"}
            img10Alt={"handmade candles by tyche handcrafted"}
          />
        </div>
      </div>
    </div>
  )
}
