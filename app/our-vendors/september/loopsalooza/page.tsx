import Image from "next/image"
import Link from "next/link"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/september"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to September
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Loopsalooza</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/loopsalooza/loopsalooza-logo-pic.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for loopsalooza"
          />
          <div className={styles.bio}>
            <p>These are NOT the colorfully random loop and loom potholders / trivets that your mother, grandmother, I and, possibly, even you made in the 50s, 60&apos;s and early 70s.</p>
            <p>•	These potholders / trivets are made with cotton loops, not the don’t-use-with high-heat-because-they-will-melt nylon loops that were most commonly available back then and available still now.</p> 
            <p>•	Size-wise, you can now choose, by your personal preference or need, from the original and smaller 6” square potholders / trivets of old or the newer approximately 8” square size.</p>
            <p>•	These potholders / trivets are still colorful, but the finished pattern is only random by personal choice of the weaver.</p> 

            <p>A potholder weaving primer:</p>

            <h3 className="text-[2rem]">Plain Weave aka Tabby or Basic Weave</h3>  

            <p>Plain Weave was most likely the only loop and loom weave style known to me, your mother, grandmother (and you) when we were young. It is a very simple weave that starts with weaving under/over in the first row and then the second row starts with weaving over/under; the remaining rows follow this basic every other alternating motif.</p>

            <p>Plain Weave may be simple, but unknown to us in our childhood hobby weaving years, it is simply the layout of the colored loops on the loom that can create truly intricate designs.</p>
            <p>Flip the potholder / trivet over; a surprisingly different pattern might have emerged!</p>

            <h3 className="text-[2rem]">Complex Weaves</h3>

            <p>There are several different types of complex weaves:  Shadow Weave, Twill Weave, Basket Weave, Split-Loop, Clasp Weave and, sometimes, mixtures of different weaves. Making a complex weave potholder can be quite challenging; depending upon the intricacy of the finished design and the complexity of both the layout of the colored loops and the weave required to create the finished design, it can take 2-5 times longer to weave a Complex Weave potholder / trivet versus a Plain Weave potholder / trivet.</p>

            <p>A Complex Weave design often results in a thicker, smaller potholder / trivet with a very interesting and complex figurative pattern.</p>
            <p>And, as with Plain Weave, the two sides of a Complex Weave might be quite different!</p>

            <p>- Roberta</p>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/loopsalooza/loopsalooza-1.jpeg"}
            img1Alt={"custom handmade potholders by Loopsalooza"}
            imgSrc2={"/images/vendors/loopsalooza/loopsalooza-2.jpeg"}
            img2Alt={"custom handmade potholders by Loopsalooza"}
            imgSrc3={"/images/vendors/loopsalooza/loopsalooza-3.jpeg"}
            img3Alt={"custom handmade potholders by Loopsalooza"}
            imgSrc4={"/images/vendors/loopsalooza/loopsalooza-4.jpeg"}
            img4Alt={"custom handmade potholders by Loopsalooza"}
            imgSrc5={"/images/vendors/loopsalooza/loopsalooza-5.jpeg"}
            img5Alt={"custom handmade potholders by Loopsalooza"}
            imgSrc6={"/images/vendors/loopsalooza/loopsalooza-6.jpeg"}
            img6Alt={"custom handmade potholders by Loopsalooza"}
            imgSrc7={"/images/vendors/loopsalooza/loopsalooza-7.jpeg"}
            img7Alt={"custom handmade potholders by Loopsalooza"}
            imgSrc8={"/images/vendors/loopsalooza/loopsalooza-8.jpeg"}
            img8Alt={"custom handmade potholders by Loopsalooza"}
            imgSrc9={"/images/vendors/loopsalooza/loopsalooza-9.jpeg"}
            img9Alt={"custom handmade potholders by Loopsalooza"}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
