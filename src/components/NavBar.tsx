"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "../css/components/navbar.module.css";
import Button from "./Button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.nav_bar}>
      <div className={styles.header_infos}>
        <div className={styles.div_redes_sociais}>
          <Link href="#">
            <Image
              src="img/insta.svg"
              width={18}
              height={18}
              alt="contato instagram"
            />
          </Link>
          <Link href="#">
            <Image
              src="img/face.svg"
              width={18}
              height={18}
              alt="contato facebook"
            />
          </Link>
        </div>

        <div className={styles.div_contatos}>
          <div>
            <Link href="#">
              <Image
                src="img/wpp.svg"
                width={18}
                height={18}
                alt="contato whatsapp"
              />
            </Link>
            <p>(12) 99999-9999</p>
          </div>
          <div>
            <Link href="#">
              <Image
                src="img/email.svg"
                width={18}
                height={18}
                alt="contato email"
              />
            </Link>
            <p>contato@pineappleteam.com</p>
          </div>
        </div>
      </div>

      <div className={styles.header}>
        <Link href="/" className={styles.img_nm_pineapple}>
          <Image
            src="/img/logo2.svg"
            width={80}
            height={80}
            alt="contato instagram"
          />
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

        <Button text="ORÇAMENTO" size="medium" href="/" />
      </div>

      <div className={styles.header_mobile}>
        <Link href="/" className={styles.img_nm_pineapple}>
          <Image
            src="/img/logo2.svg"
            width={80}
            height={80}
            alt="contato instagram"
          />
          <p className={styles.nm_pineapple}>PINEAPPLE TECH</p>
        </Link>

        <div className={styles.dropdown}>
          <div onClick={toggleDropdown} className={styles.dropdownToggle}>
            <Image
              src={isOpen ? "/img/close.png" : "/img/dropdown.png"}
              width={isOpen ? 20 : 30}
              height={20}
              alt="dropdown menu"
            />
          </div>
          {isOpen && (
            <ul className={styles.dropdownMenu}>
              <div className={styles.dropdownContaints}>
                <li className={styles.dropdownItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/">Portífolio</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/">Orçamento</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/">Quem Somos</Link>
                </li>
                <div className={styles.dropdownIcons}>
                  <li className={styles.dropdownItem}>
                    <Link href="/">
                      <Image
                        src="img/wpp.svg"
                        width={20}
                        height={20}
                        alt="contato whats"
                      />
                    </Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <Link href="/">
                      <Image
                        src="/img/insta.svg"
                        width={20}
                        height={20}
                        alt="contato instagram"
                      />
                    </Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <Link href="/">
                      <Image
                        src="img/linkedin.svg"
                        width={20}
                        height={20}
                        alt="contato linkedin"
                      />
                    </Link>
                  </li>
                </div>
                <div className={styles.dropdownBtn}>
                  <Button
                    text="Fale com um especialista"
                    size="dropdownBtn"
                    href="/"
                  />
                </div>
                <div className={styles.dropdownContato}>
                  <li className={styles.dropdownContatoItens}>
                    <Image
                      src="img/email.svg"
                      width={20}
                      height={20}
                      alt="contato email"
                    />
                    contao@pineappleteam.com
                  </li>
                  <li className={styles.dropdownContatoItens}>
                    <Image
                      src="img/wpp.svg"
                      width={20}
                      height={20}
                      alt="contato whats"
                    />{" "}
                    (12) 99999-9999
                  </li>
                </div>
              </div>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
