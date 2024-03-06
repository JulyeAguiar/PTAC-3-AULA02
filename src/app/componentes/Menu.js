import Link from "next/link"
import styles from "./menu.module.css"
import Image from "next/image"


export default function Menu(){
    return(
        <header className={styles.cabecalho}>
            <Image width={250} height={70} src={"https://ead.ifms.edu.br/pluginfile.php/1/theme_moove/logo/1699458447/banner%20topo%20capa%20sem%20brasao.jpg"}/>
            <nav>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>

                    <Link href="/localizacao">
                        <li>Localização</li>
                    </Link>

                    <Link href="/registro">
                        <li>Registrar</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}