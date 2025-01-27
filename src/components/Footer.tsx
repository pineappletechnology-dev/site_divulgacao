import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import '../css/colors.css';
import styles from '../css/components/footer.module.css';

import Button from './Button';

const inter = Inter({ subsets: ['latin'], weight: '300' });

export default function Footer() {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_layout}>
                <div className={styles.footer_menu}>
                    <Link href="/">
                        <Image src="/img/logo.png" width={200} height={200} alt='contato instagram' />
                    </Link>
                    <div className={styles.line}></div>
                    <div className={styles.acesso_rapido}>
                        <p className={styles.titulo}><strong>Acesso rápido</strong></p>
                        <Link href="#"><p>Home</p></Link>
                        <Link href="#"><p>Portfólio</p></Link>
                        <Link href="#"><p>Orçamento</p></Link>
                        <Link href="#"><p>Quem somos</p></Link>
                    </div>
                </div>

                <div className={styles.footer_frase}>
                    <h1>• <span>Sua</span> visão, <span>nosso</span> código •</h1>
                    <Button href="/" text='Fale com um especialista' size='large' />
                </div>
            </div>

            <div className={styles.footer_info}>
                <p className={inter.className}>&copy; Todos os Direitos Reservados</p>
                <p className={inter.className}>Desenvolvido por Pineapple Tech</p>
                <div className={styles.footer_social_media}>
                    <Link href="#">
                        <Image src="img/wpp.svg" width={25} height={25} alt='contato whatsapp' />
                    </Link>
                    <Link href="#">
                        <Image src="img/insta.svg" width={25} height={25} alt='contato instagram' />
                    </Link>
                    <Link href="#">
                        <Image src="img/linkedin.svg" width={25} height={25} alt='contato linkedin' />
                    </Link>
                </div>
            </div>
        </div>
    );
}