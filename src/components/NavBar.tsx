import Link from 'next/link'
import Image from 'next/image'

import styles from "../css/components/navbar.module.css"
import Button from './Button'

export default function NavBar() {
    return (
        <div className={styles.nav_bar}>
            <div className={styles.header_infos}>
                <div className={styles.div_redes_sociais}>
                    <Link href="#">
                        <Image src="img/insta.svg" width={18} height={18} alt='contato instagram' />
                    </Link>
                    <Link href="#">
                        <Image src="img/face.svg" width={18} height={18} alt='contato facebook' />
                    </Link>
                </div>

                <div className={styles.div_contatos}>
                    <div >
                        <Link href="#">
                            <Image src="img/wpp.svg" width={18} height={18} alt='contato whatsapp' />
                        </Link>
                        <p>(12) 99999-9999</p>
                    </div>
                    <div>
                        <Link href="#">
                            <Image src="img/email.svg" width={18} height={18} alt='contato email' />
                        </Link>
                        <p>contato@pineappleteam.com</p>
                    </div>
                </div>
            </div>

            <div className={styles.header}>
                <Link href="/">
                    <Image src="/img/logo2.svg" width={80} height={80} alt='contato instagram' />
                </Link>

                <div className={styles.menu}>
                    <Link href="/">
                        <p>Portfólio</p>
                    </Link>
                    <Link href="/">
                        <p>Serviços</p>
                    </Link>
                    <Link href="/">
                        <p>Quem Somos</p>
                    </Link>
                </div>

                <Button text="ORÇAMENTO" size='medium' href="/" />

            </div>
        </div>
    )
}