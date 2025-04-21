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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Writer&apos;s Co-op</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/writers-coop/writers-coop-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for writer&apos;s co-op"
          />
          <div className={styles.bio}><p>Publishing is changing daily and it is nearly impossible to keep up. Writers have become responsible for the creation, editing, and marketing of their books. This can become a personal trial that leaves the creative person confused, exhausted, and financially drained. Our purpose is to build an organization of creative geniuses in the Pacific Northwest to learn, trade skills, and bring quality original works to the page and readers. As members of the COOP we sell, support, and market as one. As members of the COOP we sell, support, and market as one.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/groups/601958716559052/"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.writers-coop.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/writers-coop/writers-coop-1.jpg"}
            img1Alt={"image of writers coop"}
            imgSrc2={"/images/vendors/writers-coop/writers-coop-2.png"}
            img2Alt={"image of writers coop"}
            imgSrc3={""}
            img3Alt={""}
            imgSrc4={""}
            img4Alt={""}
            imgSrc5={""}
            img5Alt={""}
            imgSrc6={""}
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
