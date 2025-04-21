import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">2 Pouch People</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/2-pouch-people/2-pouch-people-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for 2 pouch people"
          />
          <div className={styles.bio}></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/catnipkickers/?igsh=MTVuZHQ2azR6ZWl3dg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/2-pouch-people/2-pouch-people-1.jpeg"}
            img1Alt={"Custom pet toys"}
            imgSrc2={"/images/vendors/2-pouch-people/2-pouch-people-2.jpeg"}
            img2Alt={"Custom pet toys"}
            imgSrc3={"/images/vendors/2-pouch-people/2-pouch-people-3.jpeg"}
            img3Alt={"Custom pet toys"}
            imgSrc4={"/images/vendors/2-pouch-people/2-pouch-people-4.jpeg"}
            img4Alt={"Custom pet toys"}
            imgSrc5={"/images/vendors/2-pouch-people/2-pouch-people-5.jpeg"}
            img5Alt={"Custom pet toys"}
            imgSrc6={"/images/vendors/2-pouch-people/2-pouch-people-6.jpeg"}
            img6Alt={"Custom pet toys"}
            imgSrc7={"/images/vendors/2-pouch-people/2-pouch-people-7.jpeg"}
            img7Alt={"Custom pet toys"}
            imgSrc8={"/images/vendors/2-pouch-people/2-pouch-people-8.jpeg"}
            img8Alt={"Custom pet toys"}
            imgSrc9={"/images/vendors/2-pouch-people/2-pouch-people-9.jpeg"}
            img9Alt={"Custom pet toys"}
            imgSrc10={"/images/vendors/2-pouch-people/2-pouch-people-10.jpeg"}
            img10Alt={"Custom pet toys"}
          />
        </div>
      </div>
    </div>
  )
}
