import styles from "./Button.module.css";

function Button (props){
    return (
        <>
        <div>
            <button className={styles.button}>{props.children}</button>

            <br />
            
            <button className={`${styles.button} ${styles.link}`}>Button Component With Nultiple Class Names</button>
            <button className="global-class">Button Component</button>
        </div>
        </>
    )
}

export default Button