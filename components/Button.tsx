
"use client"

import styles from "styles/Button.module.css";

export function CustomButton({ text, link } : { text: string, link: string }) {
    return (
        <a className={styles.button} href={ link }>{ text }</a>
    );
}