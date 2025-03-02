import styles from 'styles/Vendors.module.css'
import { Card } from "@/components/card"
import Link from 'next/link'

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Our 2025 Vendors</h1>
      <p className="mb-[2rem] max-w-[1000px] mx-auto">Click on a month to explore the vendors that will be at our upcoming shows! No two shows will be the same. Don&apos;t forget to RSVP if you&apos;re interested!</p>
      <div className={styles.months}>
        <Card pageLink={"/our-vendors/may"} imageSrc={"/images/May.png"} alt={"Soft purple flowers for May"} facebookLink={"https://www.facebook.com/share/1BNMzQeQhg/"} calendarLink={"https://drive.google.com/file/d/1X89q243D3uk_YwoeYGlvupHSJfnUQWA6/view?usp=sharing"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#a8a5c8]"} />
        <Card pageLink={"/our-vendors/june"} imageSrc={"/images/June.png"} alt={"Soft yellow flowers for June"} facebookLink={"https://www.facebook.com/share/15UFPsodPf/"} calendarLink={"https://drive.google.com/file/d/1GBbXGHFt23sfKo0VK45MNs9qbBX8QRly/view?usp=sharing"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#ffcb79]"} />
        <Card pageLink={"/our-vendors/july"} imageSrc={"/images/July.png"} alt={"Red roses for July"} facebookLink={"https://www.facebook.com/share/18orLMTuWi/"} calendarLink={"https://drive.google.com/file/d/1_LJGnavh-UHc1JVKHg60oqq1vrR46_Vs/view?usp=sharing"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#a43644]"} />
        <Card pageLink={"/our-vendors/august"} imageSrc={"/images/August.png"} alt={"Green and gold flowers for August"} facebookLink={"https://www.facebook.com/share/1Ezw7awZYs/"} calendarLink={"https://drive.google.com/file/d/1LeoHaA4jewImWLjkak65TDXPvn6hu8KD/view?usp=sharing"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#d8ab5c]"} />
        <Card pageLink={"/our-vendors/september"} imageSrc={"/images/September.png"} alt={"Colorful grasses for September"} facebookLink={"https://www.facebook.com/share/18Rj4pDUMn/"} calendarLink={"https://drive.google.com/file/d/1lieSfQJmdsWrVdQl8nhNUHv2PlVR1AzV/view?usp=sharing"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#a4b8c8]"} />
        <Card pageLink={"/our-vendors/october"} imageSrc={"/images/October.png"} alt={"Autumn foliage and pumpkins for October"} facebookLink={"https://www.facebook.com/share/15piFuQDL7/"} calendarLink={"https://drive.google.com/file/d/16b3iDD2okwlG1I9yQxXRi49uM04X4pV7/view?usp=sharing"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#d16839]"} />
        <Card pageLink={"/our-vendors/november"} imageSrc={"/images/November.png"} alt={"Strings of holly for November"} facebookLink={"https://www.facebook.com/share/1BaPvcb2Rs/"} calendarLink={"https://drive.google.com/file/d/1dpNqQaPXN9HPfILjldSsbrntdiQdo7S7/view?usp=sharing"} mapLink={"https://maps.app.goo.gl/vXcek3U6FCi9jnMa9"} className={"bg-[#73855d]"} />
      </div>
      <Link href="/our-vendors/2024" className='text-[2.5rem] my-9'><h2>View 2024 Vendors</h2></Link>
    </div>
  )
}