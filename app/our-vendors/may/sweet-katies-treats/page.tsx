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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Sweet Katie&apos;s Treats</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/sweet-katies-treats/sweet-katies-treats-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for sweet katie&apos;s treats"
          />
          <div className={styles.bio}><p>I am a home baker who lives in Mountlake Terrace, WA. My baked goods can be see on instagram and Facebook. 
I got started with making chocolate chip cookies, all the time. I then perfect my recipe and started baking more and more. I ended up having to take all that I baked to my husbands work. Shortly after I was getting requests for cookies. And that&apos;s when my interest in baking became a passion. I love baking things homemade and fulfilling people&apos;s cravings, heart, and souls desires!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/profile.php?id=61557990270766"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/sweetkatiestreats/"
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
            imgSrc1={"/images/vendors/sweet-katies-treats/sweet-katies-treats-1.jpeg"}
            img1Alt={"homemade goods by sweet katie&apos;s treats"}
            imgSrc2={"/images/vendors/sweet-katies-treats/sweet-katies-treats-2.jpeg"}
            img2Alt={"homemade goods by sweet katie&apos;s treats"}
            imgSrc3={"/images/vendors/sweet-katies-treats/sweet-katies-treats-3.jpeg"}
            img3Alt={"homemade goods by sweet katie&apos;s treats"}
            imgSrc4={"/images/vendors/sweet-katies-treats/sweet-katies-treats-4.jpeg"}
            img4Alt={"homemade goods by sweet katie&apos;s treats"}
            imgSrc5={"/images/vendors/sweet-katies-treats/sweet-katies-treats-5.jpeg"}
            img5Alt={"homemade goods by sweet katie&apos;s treats"}
            imgSrc6={"/images/vendors/sweet-katies-treats/sweet-katies-treats-6.jpeg"}
            img6Alt={"homemade goods by sweet katie&apos;s treats"}
            imgSrc7={"/images/vendors/sweet-katies-treats/sweet-katies-treats-7.jpeg"}
            img7Alt={"homemade goods by sweet katie&apos;s treats"}
            imgSrc8={"/images/vendors/sweet-katies-treats/sweet-katies-treats-8.jpeg"}
            img8Alt={"homemade goods by sweet katie&apos;s treats"}
            imgSrc9={"/images/vendors/sweet-katies-treats/sweet-katies-treats-9.jpeg"}
            img9Alt={"homemade goods by sweet katie&apos;s treats"}
            imgSrc10={"/images/vendors/sweet-katies-treats/sweet-katies-treats-10.jpeg"}
            img10Alt={"homemade goods by sweet katie&apos;s treats"}
          />
        </div>
      </div>
    </div>
  )
}
