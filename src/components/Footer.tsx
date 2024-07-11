import Link from 'next/link'
import Image from 'next/image'

import '../css/colors.css'
import styles from '../css/footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_layout}>
                <div className={styles.footer_menu}>
                    <Link href="/">
                        <Image src="/img/logo.png" width={200} height={200} alt='contato instagram'/>
                    </Link>
                    <div className={styles.line}></div>
                    <div className={styles.acesso_rapido}>
                        <p className={styles.titulo}><strong>Acesso rápido</strong></p>
                        <Link href="#"><p>Home</p></Link>
                        <Link href="#"><p>Portifólio</p></Link>
                        <Link href="#"><p>Orçamento</p></Link>
                        <Link href="#"><p>Quem somos</p></Link>
                    </div>
                </div>

                <div className={styles.footer_frase}>
                    <h1>• <span>Sua</span> visão, <span>nosso</span> código •</h1>
                    <Link href="/" className={styles.botao}>Fale com um especialista</Link>
                </div>
            </div>

            <div className={styles.footer_info}>
                <p>&copy; Todos os Direitos Reservados</p>
                <p>Desenvolvido por Pineapple Tech</p>
                <div className={styles.footer_social_media}>
                    <Link href="#">
                        <Image src="img/wpp.svg" width={30} height={30} alt='contato whatsapp'/>
                    </Link>
                    <Link href="#">
                        <Image src="img/insta.svg" width={30} height={30} alt='contato instagram'/>
                    </Link>
                    <Link href="#">
                        <Image src="img/linkedin.svg" width={30} height={30} alt='contato linkedin'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}