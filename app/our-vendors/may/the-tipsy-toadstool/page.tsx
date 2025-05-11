import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/may"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to May
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">The Tipsy Toadstool</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-bio-new.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for the-tipsy-toadstool"
          />
          <div className={styles.bio}>
            <p>My name is Katelyn, and I&apos;m the artist behind The Tipsy Toadstool! Based in beautiful Whatcom County, I bring the whimsical magic of the Pacific Northwest to life through bold watercolors and alternative mediums, like Washington State wine. My artwork extends beyond prints and can be found on hand-bound journals and coloring books, inviting others to add their own touch of magic.</p>
            <p>Sustainability is at the heart of my work—I breathe new life into forgotten treasures through projects like Blind Date with a Book and repurposed crayons. My art and creations celebrate creativity, sustainability, and the enchanting beauty of the place I&apos;m lucky to call home.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/the.tipsy.toadstool?igsh=MWlibGhqazdsdGJqaA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-1.jpeg"}
            img1Alt={"Unique art by the tipsy toadstool"}
            imgSrc2={"/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-2.jpeg"}
            img2Alt={"Unique art by the tipsy toadstool"}
            imgSrc3={"/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-3.jpeg"}
            img3Alt={"Unique art by the tipsy toadstool"}
            imgSrc4={"/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-4.jpeg"}
            img4Alt={"Unique art by the tipsy toadstool"}
            imgSrc5={"/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-5.jpeg"}
            img5Alt={"Unique art by the tipsy toadstool"}
            imgSrc6={"/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-6.jpeg"}
            img6Alt={"Unique art by the tipsy toadstool"}
            imgSrc7={"/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-7.jpeg"}
            img7Alt={"Unique art by the tipsy toadstool"}
            imgSrc8={"/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-8.jpeg"}
            img8Alt={"Unique art by the tipsy toadstool"}
            imgSrc9={"/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-9.png"}
            img9Alt={"Unique art by the tipsy toadstool"}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
