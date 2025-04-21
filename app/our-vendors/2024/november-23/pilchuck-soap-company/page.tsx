import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/november-23"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November 23rd
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Pilchuck Soap Company</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/pilchuck-soap-company/pilchuck-soap-company-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for pilchuck soap company"
          />
          <div className={styles.bio}><p>Hi I&apos;m Jessica! I&apos;m a stay-at-home mama who enjoys creating artisan soaps and bath products. All of my products are small batch made with high quality ingredients. I&apos;m inspired by my love of the Pacific Northwest and all things geeky. Life is short, use the pretty soap!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/pilchucksoapcompany"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/pilchucksoapcompany/?etsrc=sdt"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-1.jpg"}
            img1Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
            imgSrc2={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-2.jpg"}
            img2Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
            imgSrc3={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-3.jpg"}
            img3Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
            imgSrc4={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-4.jpg"}
            img4Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
            imgSrc5={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-5.jpg"}
            img5Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
            imgSrc6={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-6.jpg"}
            img6Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
            imgSrc7={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-7.jpg"}
            img7Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
            imgSrc8={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-8.jpg"}
            img8Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
            imgSrc9={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-9.jpg"}
            img9Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
            imgSrc10={"/images/vendors/pilchuck-soap-company/pilchuck-soap-company-10.jpg"}
            img10Alt={"Handmade soap from the pacifc northwest by Pilchuck Soap Company"}
          />
        </div>
      </div>
    </div>
  )
}
