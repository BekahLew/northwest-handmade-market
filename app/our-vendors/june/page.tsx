import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"


export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">June Vendors</h1>
        <div className={styles.vendors}>
          <Link href="/our-vendors/june/tyche-handcrafted" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/tyche-handcrafted/tyche-handcrafted-logo-img.png"
              height={200}
              width={200}
              alt="logo for tyche handcrafted"
            />
          </Link>
          <Link href="/our-vendors/june/corina-kay-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/corina-kay-designs/corina-kay-designs-logo.png"
              height={200}
              width={200}
              alt="logo for corina kay designs"
            />
          </Link>
          <Link href="/our-vendors/june/soha365" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/soha365/soha365-logo.png"
              height={200}
              width={200}
              alt="logo for soha 365"
            />
          </Link>
          <Link href="/our-vendors/june/gemini-gems-ak" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
              height={200}
              width={200}
              alt="Starry logo for gemini gems ak"
            />
          </Link>
          <Link href="/our-vendors/june/handslow-pottery" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/handslow-pottery/handslow-pottery-logo.png"
              height={200}
              width={200}
              alt="Sketch of hand holding pottery"
            />
          </Link>
          <Link href="/our-vendors/june/wanderlust-scents-studio" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/wanderlust/wanderlust-logo.png"
              height={200}
              width={200}
              alt="Black and white pencil sketch of mountains and a sunset for wanderlust scents studio logo"
            />
          </Link>
          <Link href="/our-vendors/june/oddpetz-emporium" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/the-oddpetz-emporium/the-oddpetz-emporium-logo.jpg"
                height={200}
                width={200}
                alt="Logo for OddPetz Emporium"
              />
            </Link>
            <Link href="/our-vendors/june/colorful-discoveries" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/colorful-discoveries/colorful-discoveries-logo.jpeg"
                height={200}
                width={200}
                alt="Logo for Colorful Discoveries"
              />
            </Link>
            <Link href="/our-vendors/june/marisi-ceramics" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/marisi-ceramics/marisi-ceramics-logo.png"
                height={200}
                width={200}
                alt="Logo for Marisi Ceramics"
              />
            </Link>
            <Link href="/our-vendors/june/trinda-magic" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/trinda-magic/trinda-magic-logo.png"
                height={200}
                width={200}
                alt="Logo for Trinda Magic"
              />
            </Link>
            <Link href="/our-vendors/june/routea" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/routea/routea-logo.jpeg"
                height={200}
                width={200}
                alt="Logo for ROUTEA"
              />
            </Link>
            <Link href="/our-vendors/june/crafty-juniper" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/crafty-juniper/crafty-juniper-logo.png"
                height={200}
                width={200}
                alt="Logo for Crafty Juniper"
              />
            </Link>
            <Link href="/our-vendors/june/red-sunset-designs" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
                height={200}
                width={200}
                alt="Logo for Red Sunset Designs"
              />
            </Link>
            <Link href="/our-vendors/june/aromatic-creations" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/aromatic-creations/aromatic-creations-logo.png"
                height={200}
                width={200}
                alt="Logo for Aromatic Creations"
              />
            </Link>
            <Link href="/our-vendors/june/plantern-glass-and-novelty" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-logo-img.png"
                height={200}
                width={200}
                alt="Logo for Plantern Glass and Novelty"
              />
            </Link>
            <Link href="/our-vendors/june/tickle-my-sweets" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/tickle-my-sweets/tickle-my-sweets-logo.png"
                height={200}
                width={200}
                alt="Logo for TickleMySweets"
              />
            </Link>
            <Link href="/our-vendors/june/vs-treats-bakery" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/vs-treats/vs-treats-logo.png"
                height={200}
                width={200}
                alt="Logo for V&apos;s Treats"
              />
            </Link>
            <Link href="/our-vendors/june/linked-with-joy" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/linked-with-joy/linked-with-joy-logo.png"
                height={200}
                width={200}
                alt="Logo for Linked with Joy"
              />
            </Link>
            <Link href="/our-vendors/june/mca-creations" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/mca-creations/mca-creations-logo.png"
                height={200}
                width={200}
                alt="Logo for MCA Creations"
              />
            </Link>
            <Link href="/our-vendors/june/shiki-clay" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/shiki-clay/shiki-clay-logo.png"
                height={200}
                width={200}
                alt="Logo for Shiki Clay"
              />
            </Link>
            <Link href="/our-vendors/june/birdcraft-studio" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/birdcraft-studio/birdcraft-studio-logo-img.png"
                height={200}
                width={200}
                alt="Logo for Birdcraft Studio"
              />
            </Link>
            <Link href="/our-vendors/june/taylors-creative-nook" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/taylors-creative-nook/taylors-creative-nook-logo.webp"
                height={200}
                width={200}
                alt="Logo for Taylor&apos;s Creative Nook"
              />
            </Link>
            <a href="https://www.instagram.com/ma_and_pa_prints_3d_toys/?igsh=bXRwZzQ0NjRzM25o" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/ma-and-pa-prints-logo.png"
                height={200}
                width={200}
                alt="logo for ma and pa prints"
              />
            </a>
            <a href="https://www.estherlillianandco.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/esther-lillian-and-co-logo.png"
                height={200}
                width={200}
                alt="logo for Esther Lillian and Co"
              />
            </a>
            <a href="https://www.instagram.com/aurorabyalexis" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/aurora-designs-logo.png"
                height={200}
                width={200}
                alt="logo for Aurora Designs"
              />
            </a>
            <a href="https://www.egj-studios.com" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
              <Image
                src="/images/vendors/logos/egj-studios-logo.png"
                height={200}
                width={200}
                alt="logo for EGJ Studios"
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
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/logos/cards-by-meesh-logo.png"
                height={200}
                width={200}
                alt="logo for Cards by Meesh"
              />
            </div>
            <div className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/logos/rebeccas-whimsical-art-logo.png"
                height={200}
                width={200}
                alt="logo for Rebecca's Whimsical Art"
              />
            </div>
        </div>

        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>

        <div className="bg-orange-100 dark:text-black rounded flex mx-auto xl:w-[100%] mt-[1rem] mb-[1rem] max-w-[800px]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">June</p>
              <p className="text-[3rem] leading-8">15</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/events/934550801663217?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_going_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240615T170000Z%2F20240615T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20June%2015th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-06-15T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-06-15T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20June%2015th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-06-15T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-06-15T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20June%2015th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240615T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240615T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20June%2015th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1Tx8SUQcrRqJ3CQ8xYo2bXAjhkgIMuNSx/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>
      </div>
    )
  }