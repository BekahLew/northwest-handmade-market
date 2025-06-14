import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Art Studio by Akash </h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/art-studio-by-akash/art-studio-by-akash-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for art-studio-by-akash"
          />
          <div className={styles.bio}><p>Hello!</p>
<p>My name is Akash, the artist behind Art Studio by Akash. I specialize in handmade resin art clocks and decorative wall pieces that bring elegance and creativity to any home or space.</p>
<br/>
<p>At my art booth, I&apos;ll be showcasing:</p><br/>
<p>🕰️ Unique resin art wall clocks</p><br/>
<p>🖼️ Custom-designed resin wall art</p><br/>
<p>✨ Modern, eye-catching designs with high-quality finish</p><br/>
<p>🎁 Ready-to-gift pieces perfect for home décor or special occasions</p><br/>

<p>Every item is handcrafted with love and attention to detail. I&apos;m excited to share my work and connect with fellow art lovers!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/artstudiobyakash"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.artstudiobyakash.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/art-studio-by-akash/art-studio-by-akash-1.jpeg"}
            img1Alt={"Handmade bags by art-studio-by-akash"}
            imgSrc2={"/images/vendors/art-studio-by-akash/art-studio-by-akash-2.jpeg"}
            img2Alt={"Handmade bags by art-studio-by-akash"}
            imgSrc3={"/images/vendors/art-studio-by-akash/art-studio-by-akash-3.jpeg"}
            img3Alt={"Handmade bags by art-studio-by-akash"}
            imgSrc4={"/images/vendors/art-studio-by-akash/art-studio-by-akash-4.jpeg"}
            img4Alt={"Handmade bags by art-studio-by-akash"}
            imgSrc5={"/images/vendors/art-studio-by-akash/art-studio-by-akash-8.jpg"}
            img5Alt={"Handmade bags by art-studio-by-akash"}
            imgSrc6={"/images/vendors/art-studio-by-akash/art-studio-by-akash-6.jpeg"}
            img6Alt={"Handmade bags by art-studio-by-akash"}
            imgSrc7={"/images/vendors/art-studio-by-akash/art-studio-by-akash-7.jpeg"}
            img7Alt={"Handmade bags by art-studio-by-akash"}
            imgSrc8={"/images/vendors/art-studio-by-akash/art-studio-by-akash-5.jpeg"}
            img8Alt={"Handmade bags by art-studio-by-akash"}
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
