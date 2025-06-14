import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Rustic Designs</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/rustic-designs/rustic-designs-bio.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for rustic designs"
          />
          <div className={styles.bio}><p>A little about myself. My name is Jessica. I&apos;m a full time nurse and woodworker by night. I started my business after hoarding a lot of left over wood from remodeling my home! Started by making some artwork for my own home which then turned into creating for friends and it just took off from there. I have two girls which I am currently single mom to while my boyfriend is deployed overseas. I love being able to show them that women can do hard things when they put their all into something. One of my favorite parts of my business is all of my wood is reclaimed so I save the landfills from being overfilled as well as turning other people&apos;s trash into treasure!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/search/top?q=rusticdesigns%201"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/Rusticdesigns.1"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://rusticdesigns1.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/rustic-designs/rustic-designs-1.jpeg"}
            img1Alt={"wood mountain art by rustic designs"}
            imgSrc2={"/images/vendors/rustic-designs/rustic-designs-2.jpeg"}
            img2Alt={"wood mountain art by rustic designs"}
            imgSrc3={"/images/vendors/rustic-designs/rustic-designs-3.jpeg"}
            img3Alt={"wood mountain art by rustic designs"}
            imgSrc4={"/images/vendors/rustic-designs/rustic-designs-4.jpeg"}
            img4Alt={"wood mountain art by rustic designs"}
            imgSrc5={"/images/vendors/rustic-designs/rustic-designs-5.jpeg"}
            img5Alt={"wood mountain art by rustic designs"}
            imgSrc6={"/images/vendors/rustic-designs/rustic-designs-6.jpeg"}
            img6Alt={"wood mountain art by rustic designs"}
            imgSrc7={"/images/vendors/rustic-designs/rustic-designs-7.jpeg"}
            img7Alt={"wood mountain art by rustic designs"}
            imgSrc8={"/images/vendors/rustic-designs/rustic-designs-8.jpeg"}
            img8Alt={"wood mountain art by rustic designs"}
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
