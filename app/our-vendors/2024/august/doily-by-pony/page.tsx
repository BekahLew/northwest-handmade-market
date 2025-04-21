import Image from "next/image"
import Link from "next/link"
import { Instagram, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/august"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to August
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">
        Doily by Pony
      </h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/doily-by-pony/doily-by-pony-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for doily by pony"
          />
          <div className={styles.bio}>
            <p>Greetings from Redmond, Washington!</p> 
            <p>During these interesting times,
            I discovered the joy of crocheting. It became a delightful hobby
            that continues to bring me much pleasure. I create beautiful doilies
            in a charming vintage style, available on Etsy.</p> 
            <p>Perhaps you&apos;d like to add a touch of elegance to your home?</p>
            <p><span className="bold">Coffee Table Delight:</span> Imagine a small lamp resting on one of my doilies, creating a lovely
            base. Atop it, you could place a cherished candle, a treasured photo
            frame, or a delicate jewelry box.</p>
            <p><span className="bold">Dining Table Grace:</span> A doily
            beneath a flower vase would make a charming centerpiece for your
            table, adding a touch of beauty to your meals.</p> 
            <p><span>Wall Decor for the
            Heart:</span> These doilies can also be framed or used to create lovely
            dreamcatchers, adding a touch of whimsy to your walls.</p> 
            <p>I believe
            these handcrafted doilies would make a wonderful addition to any
            home. They&apos;d be perfect for yourself or a thoughtful gift for
            someone special. Do come and explore my creations!</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://doilybypony.etsy.com"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://instagram.com/doilybypony"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/doily-by-pony/doily-by-pony-1.jpg"}
            img1Alt={"picture of hand-crafted doily"}
            imgSrc2={"/images/vendors/doily-by-pony/doily-by-pony-2.jpg"}
            img2Alt={"picture of hand-crafted doily"}
            imgSrc3={"/images/vendors/doily-by-pony/doily-by-pony-3.jpg"}
            img3Alt={"picture of hand-crafted doily"}
            imgSrc4={"/images/vendors/doily-by-pony/doily-by-pony-4.jpg"}
            img4Alt={"picture of hand-crafted doily"}
            imgSrc5={"/images/vendors/doily-by-pony/doily-by-pony-5.jpg"}
            img5Alt={"picture of hand-crafted doily"}
            imgSrc6={"/images/vendors/doily-by-pony/doily-by-pony-6.jpg"}
            img6Alt={"picture of hand-crafted doily"}
            imgSrc7={"/images/vendors/doily-by-pony/doily-by-pony-7.jpg"}
            img7Alt={"picture of hand-crafted doily"}
            imgSrc8={"/images/vendors/doily-by-pony/doily-by-pony-8.jpg"}
            img8Alt={"picture of hand-crafted doily"}
            imgSrc9={"/images/vendors/doily-by-pony/doily-by-pony-9.jpg"}
            img9Alt={"picture of hand-crafted doily"}
            imgSrc10={"/images/vendors/doily-by-pony/doily-by-pony-10.jpg"}
            img10Alt={"picture of hand-crafted doily"}
          />
        </div>
      </div>
    </div>
  )
}
