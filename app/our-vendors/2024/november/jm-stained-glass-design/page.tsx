import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/november"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">
        JM Stained Glass Design
      </h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/jm-stained-glass-design/jm-stained-glass-design-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="Blue to yellow gradient for JM stained glass design logo"
          />
          <div className={styles.bio}>
            <p>
              Hi, I am an artist and Shoreline native. I am excited to share my
              stained glass creations with my friends and neighbors. A little
              about me and my passion for stained glass. I have been making art
              most of my life. From photography and cake decorating to sewing
              and macrame, I have dabbled in many artistic fields. I enjoy the
              process of learning how to make something and mastering the
              details. I have always admired the old rickity windows you find at
              antique stores, which led me to take a basic stained glass class.
              After the class, I dove right into this art. I create small
              pieces, like little stained glass friends for your flower pots,
              and also larger suncathers that are one of a kind. My style comes
              from the love of nature, design, and a hint of 70&apos;s influence. I
              hope you will stop by my booth and take a look!
            </p>
            <p className="bold">JM Stained Glass Design</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/jmstainedglassdesign?igsh=cWE5MnRvZ3RqZ2Vy"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={
              "/images/vendors/jm-stained-glass-design/jm-stained-glass-design-1.jpg"
            }
            img1Alt={""}
            imgSrc2={
              "/images/vendors/jm-stained-glass-design/jm-stained-glass-design-2.jpg"
            }
            img2Alt={""}
            imgSrc3={
              "/images/vendors/jm-stained-glass-design/jm-stained-glass-design-3.jpg"
            }
            img3Alt={""}
            imgSrc4={
              "/images/vendors/jm-stained-glass-design/jm-stained-glass-design-4.jpg"
            }
            img4Alt={""}
            imgSrc5={
              "/images/vendors/jm-stained-glass-design/jm-stained-glass-design-5.jpg"
            }
            img5Alt={""}
            imgSrc6={
              "/images/vendors/jm-stained-glass-design/jm-stained-glass-design-6.jpg"
            }
            img6Alt={""}
            imgSrc7={
              "/images/vendors/jm-stained-glass-design/jm-stained-glass-design-7.jpg"
            }
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
