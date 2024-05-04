import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/Vendors.module.css'
import Image from 'next/image'
import { Card } from "@/components/card"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Our Vendors</h1>
        <p className="mb-[2rem] max-w-[1000px] mx-auto">Click on a month to explore the vendors that will be at our upcoming shows! No two shows will be the same. Don&apos;t forget to RSVP if you&apos;re interested!</p>
        <div className={styles.months}>
          <Card pageLink={"/our-vendors/may"} imageSrc={"/images/May.png"} alt={"Soft purple flowers for May"} facebookLink={"https://fb.me/e/3BvL2w77T"} calendarLink={"https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240525T170000Z%2F20240525T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#a8a5c8]"} />
          <Card pageLink={"/our-vendors/june"} imageSrc={"/images/June.png"} alt={"Soft yellow flowers for June"} facebookLink={"https://fb.me/e/gqsgKZHOh"} calendarLink={""} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#ffcb79]"} />
          <Card pageLink={"/our-vendors/july"} imageSrc={"/images/July.png"} alt={"Red roses for July"} facebookLink={"https://fb.me/e/7x2wY7PmE"} calendarLink={""} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#a43644]"} />
          <Card pageLink={"/our-vendors/august"} imageSrc={"/images/August.png"} alt={"Green and gold flowers for August"} facebookLink={"https://fb.me/e/3VxOWlg7n"} calendarLink={""} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#d8ab5c]"} />
          <Card pageLink={"/our-vendors/september"} imageSrc={"/images/September.png"} alt={"Colorful grasses for September"} facebookLink={"https://fb.me/e/7lDxX4BlT"} calendarLink={""} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#a4b8c8]"} />
          <Card pageLink={"/our-vendors/october"} imageSrc={"/images/October.png"} alt={"Autumn foliage and pumpkins for October"} facebookLink={"https://fb.me/e/4gMFrfQSM"} calendarLink={""} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#d16839]"} />
          <Card pageLink={"/our-vendors/november"} imageSrc={"/images/November.png"} alt={"Strings of holly for November"} facebookLink={"https://fb.me/e/6jsJtXKU1"} calendarLink={""} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#73855d]"} />
        </div>
      </div>
    )
  }