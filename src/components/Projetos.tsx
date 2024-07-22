"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../css/components/projetos.module.css";
import Button from "./Button";

const carousels = [
  {
    id: 1,
    name: "Nome do projeto 1",
    description: "Descrição simples do projeto 1",
    image: "/img/projeto.png",
  },
  {
    id: 2,
    name: "Nome do projeto 2",
    description: "Descrição simples do projeto 2",
    image: "/img/projeto.png",
  },
  {
    id: 3,
    name: "Nome do projeto 3",
    description: "Descrição simples do projeto 3",
    image: "/img/projeto.png",
  },
];

export default function Projetos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselContentRef = useRef<HTMLDivElement>(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carousels.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carousels.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (carouselContentRef.current) {
      carouselContentRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <p className={styles.title_projetos}>Conheça nossos Projetos</p>
      <div className={styles.carousel_wrapper}>
        <div ref={carouselContentRef} className={styles.carousel_content}>
          {carousels.map((item) => (
            <div key={item.id} className={styles.carousel_item}>
              <div className={styles.carousel_conteudo}>
                <p className={styles.nm_projeto}>{item.name}</p>
                <p className={styles.desc_projeto}>{item.description}</p>
                <Button text="ACESSAR" size="medium" href="/" />
              </div>
              <Image
                src={item.image}
                width={300}
                height={300}
                alt={`imagem projeto ${item.id}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.carousel_button} ${styles.prev}`}
        onClick={goToPrevious}
      >
        <Image
          src="/img/setinha_esquerda.png"
          alt="Previous"
          width={40}
          height={40}
        />
      </button>
      <button
        className={`${styles.carousel_button} ${styles.next}`}
        onClick={goToNext}
      >
        <Image
          src="/img/setinha_direita.png"
          alt="Next"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
}
