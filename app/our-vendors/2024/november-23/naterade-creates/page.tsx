import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram, Youtube } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Naterade Creates</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/naterade-creates/naterade-creates-bio.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for Naterade Creates"
          />
          <div className={styles.bio}>
            <p>Hi there! My name is Natalya Durheim, I create whimsical illustrations of People, Plants and Animals! Naterade Creates was started on May 3rd, 2019; when I decided to establish a business where I could offer and share my art with everyone!</p>
            <p>Top quality products, handmade with love. Gorgeous print quality, crisp colors and exceptional materials. Whether it be stickers, cards or anything else, Naterade Creates strives to bring customers the best and most whimsical products. I spend hours hand-drawing every animal, flower and custom portrait to bring you the biggest smile possible!</p>
            <p>I have an Associate&apos;s Degree in Fine Arts, and spend every day honing my skills in illustration. I&apos;ve posted tons of videos on my YouTube and Social Media Accounts where you can see my full drawing process, as well as behind-the-scenes of running my small business.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://nateradecreates.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/nateradecreates/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/Naterrrade/"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.youtube.com/channel/UCyffJY892ygdMxPezqVO-ZQ"
              target="_blank"
              rel="noopener"
            >
              <Youtube size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/naterade-creates/naterade-creates-1.jpeg"}
            img1Alt={"custom crafts by Naterade Creates"}
            imgSrc2={"/images/vendors/naterade-creates/naterade-creates-2.jpeg"}
            img2Alt={"custom crafts by Naterade Creates"}
            imgSrc3={"/images/vendors/naterade-creates/naterade-creates-3.jpeg"}
            img3Alt={"custom crafts by Naterade Creates"}
            imgSrc4={"/images/vendors/naterade-creates/naterade-creates-4.jpeg"}
            img4Alt={"custom crafts by Naterade Creates"}
            imgSrc5={"/images/vendors/naterade-creates/naterade-creates-5.jpeg"}
            img5Alt={"custom crafts by Naterade Creates"}
            imgSrc6={"/images/vendors/naterade-creates/naterade-creates-6.jpeg"}
            img6Alt={"custom crafts by Naterade Creates"}
            imgSrc7={"/images/vendors/naterade-creates/naterade-creates-7.jpeg"}
            img7Alt={"custom crafts by Naterade Creates"}
            imgSrc8={"/images/vendors/naterade-creates/naterade-creates-8.jpeg"}
            img8Alt={"custom crafts by Naterade Creates"}
            imgSrc9={"/images/vendors/naterade-creates/naterade-creates-9.jpeg"}
            img9Alt={"custom crafts by Naterade Creates"}
            imgSrc10={"/images/vendors/naterade-creates/naterade-creates-10.jpeg"}
            img10Alt={"custom crafts by Naterade Creates"}
          />
        </div>
      </div>
    </div>
  )
}
