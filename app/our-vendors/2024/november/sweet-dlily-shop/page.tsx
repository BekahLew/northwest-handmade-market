import Image from "next/image"
import Link from "next/link"
import { Instagram, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/november"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Sweet D&apos;lily Shop</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/sweet-dlily-shop/sweet-dlily-shop-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for sweet d lily shop"
          />
          <div className={styles.bio}><p>My name is Ayu sewing is my hobby, I sell tote-bags, wallets, and scrunchies that are all handmade by me. Please visit my Etsy store https://sweetdlilyshop.etsy.com/  and add me on instagram, my username is sweetdlilyshop, thank you.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/sweetdlilyshop"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://sweetdlilyshop.etsy.com/"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-1.jpeg"}
            img1Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc2={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-2.jpeg"}
            img2Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc3={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-3.jpeg"}
            img3Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc4={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-4.jpeg"}
            img4Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc5={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-5.jpeg"}
            img5Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc6={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-6.jpeg"}
            img6Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc7={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-7.jpeg"}
            img7Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc8={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-8.jpeg"}
            img8Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc9={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-9.jpeg"}
            img9Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc10={"/images/vendors/sweet-dlily-shop/sweet-dlily-shop-10.jpeg"}
            img10Alt={"Handmade sewn goods by Sweet d lily shop"}
          />
        </div>
      </div>
    </div>
  )
}
