import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/august"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to August
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Coco Crafts</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/coco-crafts/coco-crafts-logo-pic.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for dw crafts"
          />
          <div className={styles.bio}>
            <p>Hello! I am Cory, the creator behind Coco Crafts. My sewing journey began quite suddenly in the spring of 2020. At the start of the pandemic I made face masks for my family.  Friends started asking for them, and before I knew it, orders were pouring in and I had a small business in the works!  I have always been creative and exploring different crafts so when the need for masks started to slow down, I decided to try sewing pouches. That quickly inspired me to learn new skills and start making totes, crossbody, and handbags. I love going through the creative process with my customers. Helping them to design a custom bag that becomes an expression of who they are through style, color, and features is a huge part of my success. I source the fabric, faux leather and vinyl interfacings and hardware myself. Then I cut, iron, sew, zip, pinch, punch and rivet it into a beautiful bag or the like.  Custom orders are my favorite because I am able to make something my customer will love.</p>
            <p>Selling at handmade markets around the northwest has been an exhilarating experience over the last 3 years. Being able to show off my creativity and craftsmanship inspires me to keep making what my customers love. It’s always fun to see repeat customers who are thrilled to see me at the same market year after year.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/cococraftsllc"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/coco_crafts_/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://coco-crafts.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/coco-crafts/coco-crafts-1.jpg"}
            img1Alt={"wood crafts by DW Crafts"}
            imgSrc2={"/images/vendors/coco-crafts/coco-crafts-2.jpg"}
            img2Alt={"wood crafts by DW Crafts"}
            imgSrc3={"/images/vendors/coco-crafts/coco-crafts-3.jpg"}
            img3Alt={"wood crafts by DW Crafts"}
            imgSrc4={"/images/vendors/coco-crafts/coco-crafts-4.jpg"}
            img4Alt={"wood crafts by DW Crafts"}
            imgSrc5={"/images/vendors/coco-crafts/coco-crafts-5.jpg"}
            img5Alt={"wood crafts by DW Crafts"}
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
