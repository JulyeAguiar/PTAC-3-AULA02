import styles from "./menu.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <header className={styles.footer}>
         
            <nav>
                <Link href="https://ead.ifms.edu.br">
                    <ul>
                        <Image width={170} height={45} src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}/>   
                    </ul>
                </Link>
            </nav>
        </header>
    )
}