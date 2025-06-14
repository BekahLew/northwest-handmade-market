import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Elevar Sundry Company</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for elevar sundry company"
          />
          <div className={styles.bio}><p>Elevar Sundry Company offers hand casted concrete candle vessels that are hand poured using Coconut Apricot Ceda Serica wax.  Each candle is finished with a handmade, signature design for a special touch!  Our fragrance and essential oils are cruelty and phthalate free, and our wicks are cotton.  These considerations create a cleaner candle burn.  We are a new, local, small business and would love for you to stop by our table and see what we have created.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://elevarsundrycompany.etsy.com"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/elevar-sundry-company/elevar-sundry-company-1.jpg"}
            img1Alt={"Handmade candles by Elevar Sundry Company"}
            imgSrc2={"/images/vendors/elevar-sundry-company/elevar-sundry-company-2.jpeg"}
            img2Alt={"Handmade candles by Elevar Sundry Company"}
            imgSrc3={"/images/vendors/elevar-sundry-company/elevar-sundry-company-3.jpeg"}
            img3Alt={"Handmade candles by Elevar Sundry Company"}
            imgSrc4={"/images/vendors/elevar-sundry-company/elevar-sundry-company-4.jpeg"}
            img4Alt={"Handmade candles by Elevar Sundry Company"}
            imgSrc5={"/images/vendors/elevar-sundry-company/elevar-sundry-company-5.jpeg"}
            img5Alt={"Handmade candles by Elevar Sundry Company"}
            imgSrc6={"/images/vendors/elevar-sundry-company/elevar-sundry-company-6.jpeg"}
            img6Alt={"Handmade candles by Elevar Sundry Company"}
            imgSrc7={"/images/vendors/elevar-sundry-company/elevar-sundry-company-7.jpeg"}
            img7Alt={"Handmade candles by Elevar Sundry Company"}
            imgSrc8={"/images/vendors/elevar-sundry-company/elevar-sundry-company-8.jpeg"}
            img8Alt={"Handmade candles by Elevar Sundry Company"}
            imgSrc9={"/images/vendors/elevar-sundry-company/elevar-sundry-company-9.jpeg"}
            img9Alt={"Handmade candles by Elevar Sundry Company"}
            imgSrc10={"/images/vendors/elevar-sundry-company/elevar-sundry-company-10.jpeg"}
            img10Alt={"Handmade candles by Elevar Sundry Company"}
          />
        </div>
      </div>
    </div>
  )
}
