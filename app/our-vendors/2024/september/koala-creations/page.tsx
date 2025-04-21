import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/september"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to September
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Koala Creations</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for koala creations"
          />
          <div className={styles.bio}>
            <p>When I was a 12 year old girl growing up in Australia, my grandmother taught me the basics of crocheting a granny square while on a sleepover at her house. I&apos;ve made many a square and blanket over the years, but it wasn&apos;t until much later when I moved to Seattle that I learned to make toys, and I haven&apos;t looked back since!</p>
            <p>What started out as a fun hobby has become something I love and want to share with others. Creating something out of what was nothing and being able to give it to others is what keeps me motivated and excited for what I do. It warms my heart to see someone enjoy the fruits of my labor and I look forward to creating something special for you!</p>
            <p>As for who the koala is behind Koala Creations, well….that&apos;s a whole other story!</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.koalacreations.net/"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/mykoalacreations/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/koala-creations/koala-creations-1.png"}
            img1Alt={"Adorable handmade crochet by Koala Creations"}
            imgSrc2={"/images/vendors/koala-creations/koala-creations-2.png"}
            img2Alt={"Adorable handmade crochet by Koala Creations"}
            imgSrc3={"/images/vendors/koala-creations/koala-creations-3.png"}
            img3Alt={"Adorable handmade crochet by Koala Creations"}
            imgSrc4={"/images/vendors/koala-creations/koala-creations-4.png"}
            img4Alt={"Adorable handmade crochet by Koala Creations"}
            imgSrc5={"/images/vendors/koala-creations/koala-creations-5.png"}
            img5Alt={"Adorable handmade crochet by Koala Creations"}
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
