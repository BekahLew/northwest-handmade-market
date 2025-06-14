import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">SunDrop Workshop</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/sundrop-workshop/sundrop-workshop-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for sundrop workshop"
          />
          <div className={styles.bio}>
            <p>Hi, I&apos;m Noelle and I design and create jewelry and small art pieces with polymer clay. I started SunDrop Workshop during COVID as a way to stay busy, hone my skills and lean into my creative side. I love designing statement pieces that stand out and bring a vibe, as well as creating pieces that you can grab every day to compliment your outfit.</p>
            <p>Besides the plethora of color, texture and style versatility of polymer clay, what I also love about working with it is how inherently lightweight it is. Wearing it won&apos;t weigh down your ears, and styling with it allows for easy coordination and flexibility.</p>
            <p>As time as gone on, and I&apos;ve delved into my love of home decor, I have been creating sun catchers and wall hangings, small dishes and art pieces to add a little drop of fun into your home and life! I love getting to know my customers and enjoy the challenge of working on custom pieces, so if you want something more customized to your style - let&apos;s connect and design your dream pieces together!</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/SunDropWorkshop"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/sundrop-workshop/sundrop-workshop-1.jpg"}
            img1Alt={"handmade jewelry in Edmonds by sundrop workshop"}
            imgSrc2={"/images/vendors/sundrop-workshop/sundrop-workshop-2.jpg"}
            img2Alt={"handmade jewelry in Edmonds by sundrop workshop"}
            imgSrc3={"/images/vendors/sundrop-workshop/sundrop-workshop-3.jpg"}
            img3Alt={"handmade jewelry in Edmonds by sundrop workshop"}
            imgSrc4={"/images/vendors/sundrop-workshop/sundrop-workshop-4.jpg"}
            img4Alt={"handmade jewelry in Edmonds by sundrop workshop"}
            imgSrc5={"/images/vendors/sundrop-workshop/sundrop-workshop-5.jpg"}
            img5Alt={"handmade jewelry in Edmonds by sundrop workshop"}
            imgSrc6={"/images/vendors/sundrop-workshop/sundrop-workshop-6.jpg"}
            img6Alt={"handmade jewelry in Edmonds by sundrop workshop"}
            imgSrc7={"/images/vendors/sundrop-workshop/sundrop-workshop-7.jpg"}
            img7Alt={"handmade jewelry in Edmonds by sundrop workshop"}
            imgSrc8={"/images/vendors/sundrop-workshop/sundrop-workshop-8.jpg"}
            img8Alt={"handmade jewelry in Edmonds by sundrop workshop"}
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
