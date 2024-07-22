import styles from "../css/components/faq.module.css"

import Image from "next/image"

export default function faq() {
    return (
        <div className={styles.faq_container}>
            <h1>Dúvidas Frequentes</h1>
            <div className={styles.faq_cards}>

                <div className={styles.faq_card_container}>
                    <div className={`${styles.faq_card}`}>
                        <p className={styles.card_title}>
                            Título do card
                            <Image src="/img/expandir_icon.svg" width={30} height={30} alt='contato instagram' />
                        </p>
                        <p className={styles.card_text}>Sim, todos os nossos sites são responsivos, o que significa que são desenvolvidos em três versões distintas: PC, Tablet e Smartphone.</p>
                    </div>
                </div>
                
                <div className={styles.faq_card_container}>
                    <div className={`${styles.faq_card} ${styles.left}`}>
                        <p className={styles.card_title}>
                            Título do card
                            <Image src="/img/expandir_icon.svg" width={30} height={30} alt='contato instagram' />
                        </p>
                        <p className={styles.card_text}>Sim, todos os nossos sites são responsivos, o que significa que são desenvolvidos em três versões distintas: PC, Tablet e Smartphone.</p>
                    </div>
                </div>

                <div className={styles.faq_card_container}>
                    <div className={`${styles.faq_card}`}>
                        <p className={styles.card_title}>
                            Título do card
                            <Image src="/img/expandir_icon.svg" width={30} height={30} alt='contato instagram' />
                        </p>
                        <p className={styles.card_text}>Sim, todos os nossos sites são responsivos, o que significa que são desenvolvidos em três versões distintas: PC, Tablet e Smartphone.</p>
                    </div>
                </div>

                <div className={styles.faq_card_container}>
                    <div className={`${styles.faq_card} ${styles.left}`}>
                        <p className={styles.card_title}>
                            Título do card
                            <Image src="/img/expandir_icon.svg" width={30} height={30} alt='contato instagram' />
                        </p>
                        <p className={styles.card_text}>Sim, todos os nossos sites são responsivos, o que significa que são desenvolvidos em três versões distintas: PC, Tablet e Smartphone.</p>
                    </div>
                </div>



            </div>
        </div>
    )
}