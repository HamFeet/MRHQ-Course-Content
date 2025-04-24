import styles from "./Image.module.css"
import catSrc from "../assets/cat-src.png"

function Image() {
    return (
        <>
        {/* <h1 className={styles.imagePublic}>Image in public folder</h1>
        <img src="/cat-public.png" alt="Picture of a cute cat" /> */}

        <h1 className={styles.imageSrc}>Image in src folder</h1>
        <img src={catSrc} alt="Picture of a cute cat" />

        </>
    )
}
export default Image