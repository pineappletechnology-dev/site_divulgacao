import Circle from "@/components/Circle";
import Button from "../components/Button";
import styles from "../css/pages/home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.inicial}>
        <div className={styles.circles}>
          <Circle size={600} top={-200} left={-200} />
          <Circle size={600} end={-200} right={-200} />
        </div>
        <div className={styles.content}>
          <Button text="Vamos falar sobre seu projeto?" href="/#" variante={true} />
        </div>
      </section>
    </main>
  );
}
