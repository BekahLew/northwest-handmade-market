import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">November 23rd Vendors</h1>
        <div className="text-center">
          <div className={styles.vendors}>
            <Link href="/our-vendors/november-23/the-secret-door" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/the-secret-door/the-secret-door-logo.jpeg"
                height={200}
                width={200}
                alt="Logo for the secret door"
              />
            </Link>
            <Link href="/our-vendors/november-23/celestial-fluff" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/celestial-fluff/celestial-fluff-logo.png"
                height={200}
                width={200}
                alt="Logo for lucy b candle co"
              />
            </Link>
            <Link href="/our-vendors/november-23/lucy-b-candle-co" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/lucy-b-candle-co/lucy-b-candle-co-logo.jpg"
                height={200}
                width={200}
                alt="Logo for lucy b candle co"
              />
            </Link>
            <Link href="/our-vendors/november-23/glimmer-glassworks" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/glimmer-glassworks/glimmer-glassworks-logo.png"
                height={200}
                width={200}
                alt="Logo for glimmer glassworks"
              />
            </Link>
            <Link href="/our-vendors/november-23/ziggys-jade-creations" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/ziggys-jade-creations/ziggys-jade-creations-logo-new.png"
                height={200}
                width={200}
                alt="Logo for ziggys jade creations"
              />
            </Link>
            <Link href="/our-vendors/november-23/gemini-gems-ak" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
                height={200}
                width={200}
                alt="Starry logo for gemini gems ak"
              />
            </Link>
            <Link href="/our-vendors/november-23/love-my-resin" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/love-my-resin/love-my-resin-logo.png"
                height={200}
                width={200}
                alt="logo for love my resin"
              />
            </Link>
            <Link href="/our-vendors/november-23/mieps-stitches" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/mieps-stitches/mieps-stitches-logo.png"
                height={200}
                width={200}
                alt="logo for mieps stitches"
              />
            </Link>
            <Link href="/our-vendors/november-23/handslow-pottery" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/handslow-pottery/handslow-pottery-logo.png"
                height={200}
                width={200}
                alt="Sketch of hand holding pottery"
              />
            </Link>
            <Link href="/our-vendors/november-23/rainborn-studios" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/rainborn-studios/rainborn-studios-logo.jpg"
                height={200}
                width={200}
                alt="Logo for Rainborn Studios"
              />
            </Link>
            <Link href="/our-vendors/november-23/taylors-creative-nook" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/taylors-creative-nook/taylors-creative-nook-logo.webp"
                height={200}
                width={200}
                alt="Logo for Taylor&apos;s Creative Nook"
              />
            </Link>
            <Link href="/our-vendors/november-23/doily-by-pony" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/doily-by-pony/doily-by-pony-logo.jpg"
                height={200}
                width={200}
                alt="Blue and green gradient with logo for doily by pony"
              />
            </Link>
            <Link href="/our-vendors/november-23/bold-intent" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/bold-intent/bold-intent-logo.jpg"
                height={200}
                width={200}
                alt="Logo for bold intent"
              />
            </Link>
            <Link href="/our-vendors/november-23/naterade-creates" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/naterade-creates/naterade-creates-logo.jpeg"
                height={200}
                width={200}
                alt="logo for naterade creates"
              />
            </Link>
            <Link href="/our-vendors/november-23/corina-kay-designs" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/corina-kay-designs/corina-kay-designs-pic-logo.png"
                height={200}
                width={200}
                alt="logo for corina kay designs"
              />
            </Link>
            <Link href="/our-vendors/november-23/brownie-n-blondie" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/brownie-n-blondie/brownie-n-blondie-logo.PNG"
                height={200}
                width={200}
                alt="logo for brownie n blondie"
              />
            </Link>
            <Link href="/our-vendors/november-23/pilchuck-soap-company" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/pilchuck-soap-company/pilchuck-soap-company-logo.png"
                height={200}
                width={200}
                alt="Logo for pilchuck soap company"
              />
            </Link>
            <Link href="/our-vendors/november-23/shiki-clay" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/shiki-clay/shiki-clay-logo.png"
                height={200}
                width={200}
                alt="Logo for Shiki Clay"
              />
            </Link>

            <a href="https://lovemears.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/love-mears-logo.webp"
                height={200}
                width={200}
                alt="logo for love mears"
              />
            </a>
            <a href="https://www.dreamhatcherblankets.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/dreamhatcher-blankets-logo.png"
                height={200}
                width={200}
                alt="logo for dreamhatcher blankets"
              />
            </a>
            <a href="https://www.instagram.com/chronicbaubles" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/chronicbaubles-logo.jpg"
                height={200}
                width={200}
                alt="logo for chronicbaubles"
              />
            </a>
            <a href="https://www.instagram.com/goa.col" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/goa-logo.jpg"
                height={200}
                width={200}
                alt="logo for goa"
              />
            </a>
            <a href="https://savialux.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/savia-lux-logo.png"
                height={200}
                width={200}
                alt="logo for savia lux"
              />
            </a>
            <a href="https://rebloomdesigns.com" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/rebloom-designs-logo.png"
                height={200}
                width={200}
                alt="logo for rebloom designs"
              />
            </a>
            <a href="https://www.instagram.com/lunaluz.paperie" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/lunaluz-paperie-logo.jpeg"
                height={200}
                width={200}
                alt="logo for lunaluz paperie"
              />
            </a>
            <a href="https://wilderandjean.etsy.com" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/wilder-and-jean/wilder-and-jean.png"
                height={200}
                width={200}
                alt="logo for wilder and jean"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61562329045892" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/glaciers-edge-stained-glass-logo.jpg"
                height={200}
                width={200}
                alt="logo for glaciers edge stained glass"
              />
            </a>
            
            <div className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/logos/marks-smokehouse-logo.png"
                height={200}
                width={200}
                alt="logo for marks smokehouse"
              />
            </div>          
          </div>

          <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>
          <div className="bg-orange-100 dark:text-black rounded flex mx-auto xl:w-[40%] mt-[1rem] mb-[1rem] max-w-[800px]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Nov</p>
              <p className="text-[3rem] leading-8">23</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/share/8bBhmGgnFdvjRzcn/" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20241123T180000Z/20241124T000000Z&details=Shopping+at+Northwest+Handmade+Market&location=515+Dayton+Street+Edmonds,+WA+98020&text=Northwest+Handmade+Market" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://stripo.email/storage/ics/2024/10/ics_northwest-handmade-market-2024-10-24-033807.ics" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS</a>
            </div>
          </div>
        </div>
      </div>
    )
  }