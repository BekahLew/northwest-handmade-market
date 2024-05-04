'use client'

import Image from "next/image"
import styles from 'styles/Slider.module.css'

export default async function Slider({ imgSrc1, img1Alt, imgSrc2, img2Alt, imgSrc3, img3Alt, imgSrc4, img4Alt, imgSrc5, img5Alt, imgSrc6, img6Alt, imgSrc7, img7Alt, imgSrc8, img8Alt, imgSrc9, img9Alt, imgSrc10, img10Alt } : { imgSrc1: string, img1Alt: string, imgSrc2: string, img2Alt: string, imgSrc3: string, img3Alt: string,  imgSrc4: string, img4Alt: string,  imgSrc5: string, img5Alt: string,  imgSrc6: string, img6Alt: string,  imgSrc7: string, img7Alt: string,  imgSrc8: string, img8Alt: string,  imgSrc9: string, img9Alt: string,  imgSrc10: string, img10Alt: string,  }) {
    function handleClick(event: any) {
        let clickedImage = event.target
        const activeImage = document.querySelector('.active-image')
        console.log(activeImage)
        let clickedImageSrc = clickedImage?.getAttribute('src')

        console.log(clickedImage.attributes);

        activeImage?.setAttribute("src", clickedImageSrc)
        activeImage?.setAttribute("srcset", clickedImageSrc)
        activeImage?.setAttribute("width", clickedImageSrc)
        // clickedImage.alt = activeImage?.getAttribute('alt')
    }

    return (
      <div className={styles.slider + " dark:shadow-gray-200 dark:bg-[#272727] bg-[#ddcbbc] shadow-gray-800 w-[100%]"}>
        <div>
            <Image
                src={imgSrc1}
                height={300}
                width={600}
                alt={img1Alt}
                onClick={handleClick}
                className={styles.activeSlide + " active-image"}
            />
        </div>
        <div className={styles.thumbnails}>
            {imgSrc1 && (
                <Image
                    src={imgSrc1}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img1Alt}
                    onClick={handleClick}
                />
            )}

            {imgSrc2 && (
                <Image
                    src={imgSrc2}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img2Alt}
                    onClick={handleClick}
                />
            )}

            {imgSrc3 && (
                <Image
                    src={imgSrc3}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img3Alt}
                    onClick={handleClick}
                />
            )}
            {imgSrc4 && (
                <Image
                    src={imgSrc4}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img4Alt}
                    onClick={handleClick}
                />
            )}
            {imgSrc5 && (
                <Image
                    src={imgSrc5}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img5Alt}
                    onClick={handleClick}
                />
            )}
            {imgSrc6 && (
                <Image
                    src={imgSrc6}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img6Alt}
                    onClick={handleClick}
                />
            )}

            {imgSrc7 && (
                <Image
                    src={imgSrc7}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img7Alt}
                    onClick={handleClick}
                />
            )}

            {imgSrc8 && (
                <Image
                    src={imgSrc8}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img8Alt}
                    onClick={handleClick}
                />
            )}
            {imgSrc9 && (
                <Image
                    src={imgSrc9}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img9Alt}
                    onClick={handleClick}
                />
            )}

            {imgSrc10 && (
                <Image
                    src={imgSrc10}
                    height={300}
                    width={600}
                    className={styles.thumbnail}
                    alt={img10Alt}
                    onClick={handleClick}
                />
            )}
        </div>
      </div>
    )
  }

function renderToStaticMarkup(arg0: any) {
    throw new Error("Function not implemented.")
}
