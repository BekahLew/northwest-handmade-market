import styles from "styles/Card.module.css"
import Image from "next/image";
import { Facebook, CalendarHeart, Map } from "lucide-react";
import Link from "next/link";

export function Card({ pageLink, imageSrc, alt, facebookLink, calendarLink, mapLink, className } : { pageLink: string, imageSrc: string, alt:string, facebookLink: string, calendarLink: string, mapLink: string, className: string }) {
    return (
        <div className={styles.card + " " + className}>  
        <Link href={pageLink}>
          <Image
            src={imageSrc}
            height={240}
            width={240}
            alt={alt}
          />
        </Link>
        <div className="flex justify-center">
            <a className="p-[.9rem] hover:scale-125 transition" href={facebookLink} target="_blank">
                <Facebook size={35} strokeWidth={1.25} color="#000" />
            </a>
            <a className="p-[.9rem] hover:scale-125 transition" href={calendarLink} target="_blank" rel="noopener">
                <CalendarHeart size={35} strokeWidth={1.25} color="#000" />
            </a>
            <a className="p-[.9rem] hover:scale-125 transition" href={mapLink} target="_blank" rel="noopener">
                <Map size={35} strokeWidth={1.25} color="#000" />
            </a>
        </div>
      </div>
    );
}