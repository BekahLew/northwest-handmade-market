import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/july"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to July
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Oddpetz Emporium</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/oddpetz-emporium/oddpetz-emporium-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for Oddpetz Emporium"
          />
          <div className={styles.bio}><p>Welcome to our Pet Shop: The OddPetz Emporium! Jackie is our lifelong artist. Chris is our Booth Babe who helps out in many ways. We make stuffed animals. A digital piece of art is created as a design in a pattern. This is printed by Spoonflower onto Minky fabric. We buy it back by the yard, cut them out, sew them together by hand on a sewing machine. They are stuffed, and body parts are stitched together. We have about 125 designs right now that we sell regularly, all made by us. They include Batz, MerPurrz, Axolotlz, Dragonz, Owlz, Foxez, Ferretz, Red Pandaz, Roly Catz and Kittenz, Magic Catz, Unicorn Kittiez, Spiderz, and whatever other designs she gets done by then. In addition, we print 3D articulated animals (Wyverns, Axolotlz, Kosha) and Bat key chains, which Jackie paints eyes and details on. She also designs stickers and bookmarks. And crochets jellyfish for our MerPurrz to play with, and nests for petz. Plus, she braids dog toys from the longer leftover scrap fabric from the Stuffed Toy making process. She focuses on them all being fun and safe for humans and pets of all ages.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://fb.me/oddpetz"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://oddpetz.square.site"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/oddpetz-emporium/oddpetz-emporium-1.jpg"}
            img1Alt={"Stuffed animals and 3D toys by oddpetz-emporium"}
            imgSrc2={"/images/vendors/oddpetz-emporium/oddpetz-emporium-2.png"}
            img2Alt={"Stuffed animals and 3D toys by oddpetz-emporium"}
            imgSrc3={"/images/vendors/oddpetz-emporium/oddpetz-emporium-3.png"}
            img3Alt={"Stuffed animals and 3D toys by oddpetz-emporium"}
            imgSrc4={"/images/vendors/oddpetz-emporium/oddpetz-emporium-4.jpg"}
            img4Alt={"Stuffed animals and 3D toys by oddpetz-emporium"}
            imgSrc5={"/images/vendors/oddpetz-emporium/oddpetz-emporium-5.jpg"}
            img5Alt={"Stuffed animals and 3D toys by oddpetz-emporium"}
            imgSrc6={"/images/vendors/oddpetz-emporium/oddpetz-emporium-6.jpg"}
            img6Alt={"Stuffed animals and 3D toys by oddpetz-emporium"}
            imgSrc7={"/images/vendors/oddpetz-emporium/oddpetz-emporium-7.jpg"}
            img7Alt={"Stuffed animals and 3D toys by oddpetz-emporium"}
            imgSrc8={"/images/vendors/oddpetz-emporium/oddpetz-emporium-8.png"}
            img8Alt={"Stuffed animals and 3D toys by oddpetz-emporium"}
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
