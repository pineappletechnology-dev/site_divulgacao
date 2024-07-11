import Image from "next/image";
import styles from "../css/page.module.css";

import Footer from "../components/Footer"
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <h1>Hello World</h1>
      <Footer />
    </main>
  );
}
