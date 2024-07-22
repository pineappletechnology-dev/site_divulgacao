// Estilos
import styles from "../css/pages/home.module.css";

// Componentes
import Circle from "@/components/Circle";
import Button from "../components/Button";
import Projetos from "../components/Projetos";
import Faq from "../components/FAQ"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.inicial}>
        <div className={styles.circles}>
          <Circle size={600} top={-200} left={-200} />
          <Circle size={600} end={-200} right={-200} />
        </div>
        <div className={styles.content}>
          <span>Transformamos ideias em realidade</span>
          <h1>Sua visão, nosso código</h1>
          <h2>Criamos Sites e Softwares para o seu Negócio.
            <br />Especializados em tirar a sua ideia do papel.</h2>
          <Button text="Vamos falar sobre seu projeto?" href="/#" variante={true} />
        </div>
      </section>
      <Projetos />
      <Faq />
    </main>
  );
}
