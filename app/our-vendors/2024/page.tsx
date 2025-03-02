import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/Vendors.module.css'
import Image from 'next/image'
import { Card } from "@/components/card"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to Current Vendors
      </Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Our 2024 Vendors</h1>
        <p className="mb-[2rem] max-w-[1000px] mx-auto">Click on a month to explore the vendors that will be at our upcoming shows! No two shows will be the same. Don&apos;t forget to RSVP if you&apos;re interested!</p>
        <div className={styles.months}>
          <Card pageLink={"/our-vendors/2024/may"} imageSrc={"/images/May.png"} alt={"Soft purple flowers for May"} facebookLink={"https://fb.me/e/3BvL2w77T"} calendarLink={"https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240525T170000Z%2F20240525T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#a8a5c8]"} />
          <Card pageLink={"/our-vendors/2024/june"} imageSrc={"/images/June.png"} alt={"Soft yellow flowers for June"} facebookLink={"https://fb.me/e/gqsgKZHOh"} calendarLink={"https://calendar.google.com/calendar/u/0/r/eventedit?dates=20240615T170000Z/20240615T230000Z&details=Shopping+at+the+Northwest+Handmade+Market&location=515+Dayton+St,+Edmonds,+WA+98020&text=Northwest+Handmade+Market+Show+-+June+15th+2024"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#ffcb79]"} />
          <Card pageLink={"/our-vendors/2024/july"} imageSrc={"/images/July.png"} alt={"Red roses for July"} facebookLink={"https://fb.me/e/7x2wY7PmE"} calendarLink={"https://calendar.google.com/calendar/u/0/r/eventedit?dates=20240706T170000Z/20240706T230000Z&details=Shopping+at+the+Northwest+Handmade+Market&location=515+Dayton+St,+Edmonds,+WA+98020&text=Northwest+Handmade+Market+Show+-+July+6th+2024"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#a43644]"} />
          <Card pageLink={"/our-vendors/2024/august"} imageSrc={"/images/August.png"} alt={"Green and gold flowers for August"} facebookLink={"https://fb.me/e/3VxOWlg7n"} calendarLink={"https://calendar.google.com/calendar/u/0/r/eventedit?dates=20240803T170000Z/20240803T230000Z&details=Shopping+at+the+Northwest+Handmade+Market&location=515+Dayton+St,+Edmonds,+WA+98020&text=Northwest+Handmade+Market+Show+-+August+3rd+2024"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#d8ab5c]"} />
          <Card pageLink={"/our-vendors/2024/september"} imageSrc={"/images/September.png"} alt={"Colorful grasses for September"} facebookLink={"https://fb.me/e/7lDxX4BlT"} calendarLink={"https://calendar.google.com/calendar/u/0/r/eventedit?dates=20240907T170000Z/20240907T230000Z&details=Shopping+at+the+Northwest+Handmade+Market&location=515+Dayton+St,+Edmonds,+WA+98020&text=Northwest+Handmade+Market+Show+-+September+7th+2024"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#a4b8c8]"} />
          <Card pageLink={"/our-vendors/2024/october"} imageSrc={"/images/October.png"} alt={"Autumn foliage and pumpkins for October"} facebookLink={"https://fb.me/e/4gMFrfQSM"} calendarLink={"https://calendar.google.com/calendar/u/0/r/eventedit?dates=20241005T170000Z/20241005T230000Z&details=Shopping+at+the+Northwest+Handmade+Market&location=515+Dayton+St,+Edmonds,+WA+98020&text=Northwest+Handmade+Market+Show+-+October+5th+2024"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#d16839]"} />
          <Card pageLink={"/our-vendors/2024/november"} imageSrc={"/images/November.png"} alt={"Strings of holly for November"} facebookLink={"https://fb.me/e/6jsJtXKU1"} calendarLink={"https://calendar.google.com/calendar/u/0/r/eventedit?dates=20241102T170000Z/20241102T230000Z&details=Shopping+at+the+Northwest+Handmade+Market&location=515+Dayton+St,+Edmonds,+WA+98020&text=Northwest+Handmade+Market+Show+-+November+2nd+2024"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#73855d]"} />
          <Card pageLink={"/our-vendors/2024/november-23"} imageSrc={"/images/November-23rd.png"} alt={"Strings of holly for November 23rd"} facebookLink={"https://www.facebook.com/share/DPdxK5KahjCCCjDF/"} calendarLink={"https://calendar.google.com/calendar/u/0/r/eventedit?dates=20241123T180000Z/20241124T000000Z&details=Shopping+at+Northwest+Handmade+Market&location=515+Dayton+Street+Edmonds,+WA+98020&text=Northwest+Handmade+Market"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#963a33]"} />
        </div>
      </div>
    )
  }