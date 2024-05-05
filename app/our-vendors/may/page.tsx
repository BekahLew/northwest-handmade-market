import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"
import { Spacer } from "@/components/spacer"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[1600px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">May Vendors</h1>
        <div className={styles.vendors}>
          <Link href="/our-vendors/may/wanderlust-scents-studio" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/wanderlust/wanderlust-logo.png"
                height={200}
                width={200}
                alt="Black and white pencil sketch of mountains and a sunset for wanderlust scents studio logo"
              />
            </Link>
            <Link href="/our-vendors/may/jm-stained-glass-design" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/jm-stained-glass-design/jm-stained-glass-design-logo.png"
                height={200}
                width={200}
                alt="Blue to yellow gradient for JM stained glass design logo"
              />
            </Link>
            <Link href="/our-vendors/may/handslow-pottery" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/handslow-pottery/handslow-pottery-logo.png"
                height={200}
                width={200}
                alt="Sketch of hand holding pottery"
              />
            </Link>
            <Link href="/our-vendors/may/doily-by-pony" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/doily-by-pony/doily-by-pony-logo.jpg"
                height={200}
                width={200}
                alt="Blue and green gradient with logo for doily by pony"
              />
            </Link>
            <a href="https://wilderandjean.etsy.com" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/wilder-and-jean/wilder-and-jean.png"
                height={200}
                width={200}
                alt="logo for wilder and jean"
              />
            </a>
            <Link href="/our-vendors/may/gemini-gems-ak" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
                height={200}
                width={200}
                alt="Starry logo for gemini gems ak"
              />
            </Link>
            <Link href="/our-vendors/may/rustic-designs" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/rustic-designs/rustic-designs-logo.png"
                height={200}
                width={200}
                alt="Hand sketched square with mountains logo for rustic designs"
              />
            </Link>
            <Link href="/our-vendors/may/writers-coop" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/writers-coop/writers-coop-logo.jpg"
                height={200}
                width={200}
                alt="logo of books for writer&apos;s coop"
              />
            </Link>
            <Link href="/our-vendors/may/sweet-katies-treats" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/sweet-katies-treats/sweet-katies-treats-logo.png"
                height={200}
                width={200}
                alt="logo for sweet katie&apos;s treats"
              />
            </Link>
            <Link href="/our-vendors/may/amigurumis" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/amigurumis/amigurumis-logo-pic.png"
                height={200}
                width={200}
                alt="logo for amigurumis"
              />
            </Link>
            <Link href="/our-vendors/may/inti-the-label" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/inti-the-label/inti-the-label-logo-pic.png"
                height={200}
                width={200}
                alt="logo for inti the label"
              />
            </Link>
            <Link href="/our-vendors/may/little-okie-studio" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/little-okie-studio/little-okie-studio-logo.jpeg"
                height={200}
                width={200}
                alt="logo for little okie studio"
              />
            </Link>
            <a href="https://wellrooted.net/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/well-rooted/well-rooted-logo.jpg"
                height={200}
                width={200}
                alt="logo for well rooted"
              />
            </a>
            <Link href="/our-vendors/may/soha365" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/soha365/soha365-logo.png"
                height={200}
                width={200}
                alt="logo for soha 365"
              />
            </Link>
            <Link href="/our-vendors/may/babaubles" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/babaubles/babaubles-logo.png"
                height={200}
                width={200}
                alt="logo for babaubles"
              />
            </Link>
            <Link href="/our-vendors/may/corina-kay-designs" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/corina-kay-designs/corina-kay-designs-logo.png"
                height={200}
                width={200}
                alt="logo for corina kay designs"
              />
            </Link>
            <Link href="/our-vendors/may/zarqa-makes" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/zarqa-makes/zarqa-makes-logo.png"
                height={200}
                width={200}
                alt="logo for zarqa makes"
              />
            </Link>
            <Link href="/our-vendors/may/bonafide-pets" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/bonafide-pets/bonafide-pets-logo.png"
                height={200}
                width={200}
                alt="logo for bonafide pets"
              />
            </Link>
            <Link href="/our-vendors/may/hae-candles" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/hae-candles/hae-candles-logo.jpeg"
                height={200}
                width={200}
                alt="logo for hae candles"
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
            <a href="https://www.etsy.com/shop/TycheHandcrafted" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/tyche-handcrafted-logo.png"
                height={200}
                width={200}
                alt="logo for tyche handcrafted"
              />
            </a>
            <a href="https://megansjohnston.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/megan-johnstons-art-logo.png"
                height={200}
                width={200}
                alt="logo for megan johnstons art"
              />
            </a>
            <a href="https://nuricreations.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/nuri-creations-logo.png"
                height={200}
                width={200}
                alt="logo for nuri creations"
              />
            </a>
            <a href="" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/moore-than-stitches-logo-img.png"
                height={200}
                width={200}
                alt="logo for moore than stitches"
              />
            </a>
            <Link href="/our-vendors/may/m-and-ms-vintage-crafts" className={styles.vendor + " bg-[#bc5738]"}>
              <p>M&M's Vintage Crafts and Decor</p>
            </Link>
            <a href="https://www.instagram.com/catnipkickers/?igsh=MTVuZHQ2azR6ZWl3dg%3D%3D&utm_source=qr" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <p>2 Pouch People <span>Catnip Toys</span></p>
            </a>
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <p>Edmonds Kids Collective <span>Various Crafts</span></p>
            </div>
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <p>ZunZun <span>Bath and Body</span></p>
            </div>
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <p>Cards by Meesh <span>Handmade Cards</span></p>
            </div>
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <p>Created by Qualley <span>Mandala Painted Stones, magnets and coasters</span></p>
            </div>
        </div>

        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>

        <div className="bg-orange-100 dark:text-black rounded flex mx-auto xl:w-[100%] mt-[1rem] mb-[1rem] max-w-[800px]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">May</p>
              <p className="text-[3rem] leading-8">25</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/events/1550942905692492?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_going_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240525T170000Z%2F20240525T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-05-25T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-05-25T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-05-25T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-05-25T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240525T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240525T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1cXaW66-fjeosCEVCUPC4CPXYMaTqGSBl/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>
      </div>
    )
  }