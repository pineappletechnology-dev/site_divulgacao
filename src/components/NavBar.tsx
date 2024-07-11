import Link from 'next/link'
import Image from 'next/image'

import styles from "../css/navbar.module.css" 

export default function NavBar(){
    return(
        <div className={styles.nav_bar}>
            <div className={styles.header_infos}>
                <div className={styles.div_redes_sociais}>
                    <Link href="#">
                        <Image src="img/insta.svg" width={30} height={30} alt='contato instagram'/>
                    </Link>
                    <Link href="#">
                        <Image src="img/face.svg" width={30} height={30} alt='contato facebook'/>
                    </Link>
                </div>

                <div className={styles.div_contatos}>
                    <div>
                        <Link href="#">
                            <Image src="img/wpp.svg" width={30} height={30} alt='contato whatsapp'/>
                        </Link>
                        <p>(12) 99999-9999</p>
                    </div>
                    <div>
                        <Link href="#">
                            <Image src="img/email.svg" width={30} height={30} alt='contato email'/>
                        </Link>
                        <p>contato@pineappleteam.com</p>
                    </div>
                </div>
            </div>

            <div className={styles.header}>
                <Link href="/">
                    <Image src="/img/logo2.png" width={135} height={135} alt='contato instagram'/>
                </Link>

                <div>
                    <Link href="/">
                        <p>Portifilio</p>
                    </Link>
                    <Link href="/">
                        <p>Serviços</p>
                    </Link>
                    <Link href="/">
                        <p>Quem somos</p>
                    </Link> 
                </div>

                <Link href="/" className={styles.botao}>ORÇAMENTO</Link>

            </div>
        </div>
    )
}