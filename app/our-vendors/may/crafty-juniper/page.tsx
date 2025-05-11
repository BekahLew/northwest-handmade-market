import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, Facebook } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Crafty Juniper</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/crafty-juniper-2025/crafty-juniper-2025-bio.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for crafty-juniper-2025"
          />
          <div className={styles.bio}>
            <p>After retirement from a corporate job, I sought an outlet for my creative energy using my passion for sewing.  Since adding some professional tools to my collection and learning techniques from many who share skills online, Crafty Juniper was born.  You can find me at local artisan fairs and indoor shows year round.
            As a Bothell based small handmade business, I sew durable handbags, crossbodies and backpacks to meet the demands of a northwest lifestyle. Crafted of leather, Pendleton wool, cork, waxed canvas and faux leather with sturdy straps and closures, my bags will outlast cheap imports. I frequently seek out fabrics destined for the landfill and give them a second life.  As well as bags, I also create leather and fabric wallets, key fobs, batik scarves, embroidered tea towels and anything else that stimulates my creativity.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/crafty_juniper/reels/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/craftyjuniperbags"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://craftyjuniperbags.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-1.png"}
            img1Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc2={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-2.png"}
            img2Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc3={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-3.png"}
            img3Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc4={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-4.jpg"}
            img4Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc5={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-5.png"}
            img5Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc6={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-6.png"}
            img6Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc7={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-7.png"}
            img7Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc8={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-8.png"}
            img8Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc9={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-9.jpg"}
            img9Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc10={"/images/vendors/crafty-juniper-2025/crafty-juniper-2025-10.png"}
            img10Alt={"Hand-crafted bags by crafty juniper"}
          />
        </div>
      </div>
    </div>
  )
}
