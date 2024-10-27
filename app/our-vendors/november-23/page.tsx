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
          <p className="mt-[.5rem] mb-[1rem]">Coming soon! We&apos;re getting vendors signed up for the show.</p>
          <p className="mt-[.5rem] mb-[1rem]">In the meantime, please RSVP to the event so you don&apos;t miss it.</p>
            
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