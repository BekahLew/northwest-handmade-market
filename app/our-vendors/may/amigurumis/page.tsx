import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Amigurumis</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/amigurumis/amigurumis-bio.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for amigurumis"
          />
          <div className={styles.bio}>
            <p>I am a mompreneur and crochet lover, and I live in Wenatchee, WA.</p>
            <p>In 2022, I started with small crochet projects for my daughters;
            crocheting became a passion and support for me and my family.
            Day by day, I find new ideas and projects to do, which have
            become personal challenges. I love knowing that my crochet
            craft brings joy to many people and creates beautiful memories
            full of love.</p>
            <p>In 2022, I started with small crochet projects for my daughters;
            crocheting became a passion and support for me and my family.
            Day by day, I find new ideas and projects to do, which have
            become personal challenges. I love knowing that my crochet
            craft brings joy to many people and creates beautiful memories
            full of love.</p>
            <p>You can find samples of my work on Instagram at
            @amigurumis.amar or craft fairs. If you have questions or a
            special order, send an email to amigurumis.amar@gmai.com
            Do not hesitate to contact me if you have a special idea for a
            crochet work. I&apos;ll be happy to crochet for you.</p>
          </div>  
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/amigurumis.amar/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          {/* @ts-expect-error Server Component */}
          <Slider
            imgSrc1={"/images/vendors/amigurumis/amigurumis-1.jpg"}
            img1Alt={"crocheted anoimals by amigurumis"}
            imgSrc2={"/images/vendors/amigurumis/amigurumis-2.jpg"}
            img2Alt={"crocheted anoimals by amigurumis"}
            imgSrc3={"/images/vendors/amigurumis/amigurumis-3.jpg"}
            img3Alt={"crocheted anoimals by amigurumis"}
            imgSrc4={"/images/vendors/amigurumis/amigurumis-4.jpg"}
            img4Alt={"crocheted anoimals by amigurumis"}
            imgSrc5={"/images/vendors/amigurumis/amigurumis-5.jpg"}
            img5Alt={"crocheted anoimals by amigurumis"}
            imgSrc6={"/images/vendors/amigurumis/amigurumis-6.jpg"}
            img6Alt={"crocheted anoimals by amigurumis"}
            imgSrc7={"/images/vendors/amigurumis/amigurumis-7.jpg"}
            img7Alt={"crocheted anoimals by amigurumis"}
            imgSrc8={"/images/vendors/amigurumis/amigurumis-8.jpg"}
            img8Alt={"crocheted anoimals by amigurumis"}
            imgSrc9={"/images/vendors/amigurumis/amigurumis-9.jpg"}
            img9Alt={"crocheted anoimals by amigurumis"}
            imgSrc10={"/images/vendors/amigurumis/amigurumis-10.jpg"}
            img10Alt={"crocheted anoimals by amigurumis"}
          />
        </div>
      </div>
    </div>
  )
}
