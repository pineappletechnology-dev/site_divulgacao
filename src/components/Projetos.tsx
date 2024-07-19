import Link from "next/link";
import Image from "next/image";

import styles from "../css/components/projetos.module.css";
import Button from "./Button";

export default function NavBar() {

    return(
        <div className={styles.container}>
            <p className={styles.title_projetos}>Conheça nossos Projetos</p>

            <div className={styles.conteudo}>
                <div className={styles.conteudo_projeto}>
                    <p className={styles.nm_projeto}>Nome do projeto</p>
                    <p className={styles.desc_projeto}>Descrição simples do projeto</p>

                    <Button text="ACESSAR" size="medium" href="/" />
                </div>
                <Image
                    src="/img/projeto.png"
                    width={300}
                    height={300}
                    alt="imagem projeto"
                />
            </div>
        </div>
    )
}