import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">November 2nd Vendors</h1>
        <div className="text-center">
          <div className={styles.vendors}>
            <Link href="/our-vendors/november/dw-crafts" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/dw-crafts/dw-crafts-logo.png"
                height={200}
                width={200}
                alt="logo for DW Crafts"
              />
            </Link>
            <Link href="/our-vendors/november/way-cool-stuff" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/way-cool-stuff/way-cool-stuff-logo-pic.jpeg"
                height={200}
                width={200}
                alt="Logo for way cool stuff"
              />
            </Link>
            <Link href="/our-vendors/november/the-forest-blues" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/the-forest-blues/the-forest-blues-logo.jpg"
                height={200}
                width={200}
                alt="logo for The Forest Blues"
              />
            </Link>
            <Link href="/our-vendors/november/from-my-art" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/from-my-art/from-my-art-logo.jpg"
                height={200}
                width={200}
                alt="logo for from my art"
              />
            </Link>
            <Link href="/our-vendors/november/gemini-gems-ak" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
                height={200}
                width={200}
                alt="Starry logo for gemini gems ak"
              />
            </Link>
            <Link href="/our-vendors/november/hae-candles" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/hae-candles/hae-candles-logo.jpeg"
                height={200}
                width={200}
                alt="logo for hae candles"
              />
            </Link>
            <Link href="/our-vendors/november/little-okie-studio" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/little-okie-studio/little-okie-studio-logo.jpeg"
                height={200}
                width={200}
                alt="logo for little okie studio"
              />
            </Link>
            <Link href="/our-vendors/november/elevar-sundry-company" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
                height={200}
                width={200}
                alt="Logo for elevar sundry company"
              />
            </Link>
            <Link href="/our-vendors/november/sunny-sasha-pottery" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/sunny-sasha-pottery/sunny-sasha-pottery-logo.jpeg"
                height={200}
                width={200}
                alt="logo for Sunny Sasha Pottery"
              />
            </Link>
            <Link href="/our-vendors/november/mieps-stitches" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/mieps-stitches/mieps-stitches-logo.png"
                height={200}
                width={200}
                alt="logo for mieps stitches"
              />
            </Link>
            <Link href="/our-vendors/november/casi-g-designs" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/casi-g-designs/casi-g-designs-logo.jpg"
                height={200}
                width={200}
                alt="logo for casi g designs"
              />
            </Link>
            <Link href="/our-vendors/november/koala-creations" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
                height={200}
                width={200}
                alt="logo for koala creations"
              />
            </Link>
            <Link href="/our-vendors/november/jm-stained-glass-design" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/jm-stained-glass-design/jm-stained-glass-design-logo.png"
                height={200}
                width={200}
                alt="Blue to yellow gradient for JM stained glass design logo"
              />
            </Link>
            <Link href="/our-vendors/november/sweet-dlily-shop" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/sweet-dlily-shop/sweet-dlily-shop-logo.png"
                height={200}
                width={200}
                alt="sweet d lily shop logo"
              />
            </Link>
            <Link href="/our-vendors/november/brownie-n-blondie" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/brownie-n-blondie/brownie-n-blondie-logo.PNG"
                height={200}
                width={200}
                alt="logo for brownie n blondie"
              />
            </Link>
            <Link href="/our-vendors/november/linked-with-joy" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/linked-with-joy/linked-with-joy-logo.png"
                height={200}
                width={200}
                alt="Logo for Linked with Joy"
              />
            </Link>
            <Link href="/our-vendors/november/trinda-magic" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/trinda-magic/trinda-magic-logo.png"
                height={200}
                width={200}
                alt="Logo for Trinda Magic"
              />
            </Link>
            
            <a href="https://www.goblin-spleen.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/goblin-spleen-logo.png"
                height={200}
                width={200}
                alt="logo for goblin spleen"
              />
            </a>
            <a href="https://c2seen.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/c2seen-logo.png"
                height={200}
                width={200}
                alt="logo for c2seen"
              />
            </a>
            <a href="https://savialux.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/savia-lux-logo.png"
                height={200}
                width={200}
                alt="logo for savia lux"
              />
            </a>
            <a href="https://dogearproductions.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/dogear-productions-logo-new.png"
                height={200}
                width={200}
                alt="logo for dogear productions"
              />
            </a>
            <a href="https://stuffedstudio.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/stuffed-studio-logo.png"
                height={200}
                width={200}
                alt="logo for stuffed studio"
              />
            </a>
            <a href="https://rainbornstudios.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/rainborn-studios-logo.png"
                height={200}
                width={200}
                alt="logo for rainborn studios"
              />
            </a>
            <a href="https://www.metamorphicdelights.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/metamorphic-delights-logo.webp"
                height={200}
                width={200}
                alt="logo for metamorphic delights"
              />
            </a>
            <a href="https://www.instagram.com/p/DAgw8kORE64/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/mingled-whimsy-logo.png"
                height={200}
                width={200}
                alt="logo for mingled whimsy"
              />
            </a>
            <a href="https://wilderandjean.etsy.com" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/wilder-and-jean/wilder-and-jean.png"
                height={200}
                width={200}
                alt="logo for wilder and jean"
              />
            </a>
            <a href="https://www.facebook.com/Happicraft.shop" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/happicraft-logo.jpg"
                height={200}
                width={200}
                alt="logo for happicraft"
              />
            </a>
            
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/logos/marks-smokehouse-logo.png"
                height={200}
                width={200}
                alt="logo for marks smokehouse"
              />
            </div>
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/logos/griffith-works-logo.png"
                height={200}
                width={200}
                alt="logo for griffith works"
              />
            </div>
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/logos/rebeccas-whimsical-art-logo.png"
                height={200}
                width={200}
                alt="logo for Rebeccas Whimsical Art"
              />
            </div>
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/logos/Ma-n-da-quilts-n-crafts-logo.png"
                height={200}
                width={200}
                alt="logo for Rebeccas Ma-n-da-quilts-n-crafts"
              />
            </div>
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/logos/elisabethartwork.png"
                height={200}
                width={200}
                alt="logo for elisabethartwork"
              />
            </div>
            
          </div>

          <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>
          <div className="bg-orange-100 dark:text-black rounded flex mx-auto xl:w-[100%] mt-[1rem] mb-[1rem] max-w-[800px]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Nov</p>
              <p className="text-[3rem] leading-8">02</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/events/7663982810288696?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_going_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20241102T170000Z%2F20241102T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20November%202nd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-11-02T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-11-02T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20November%202nd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-11-02T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-11-02T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20November%202nd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20241102T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20241102T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20November%202nd%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1QGScmz4_xTJv4zrJGaiXO516Us-vix48/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>
        </div>
      </div>
    )
  }