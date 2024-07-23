// components/Button.tsx
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../css/components/button.module.css";

interface ButtonProps {
  text: string;
  size?: "small" | "medium" | "large" | "dropdownBtn";
  bgColor?: string;
  textColor?: string;
  href?: string;
  variante?: boolean;
}


const Button = ({
  text,
  size = "medium",
  bgColor,
  textColor,
  href,
  variante
}: ButtonProps) => {

  const buttonMain = `${styles.button_main} ${styles[size]}`
  const buttonClass = `${styles.botao} ${styles[size]}`;

  // const defaultBgColor = "var(--bg-element-green)";
  // const defaultTextColor = "var(--text-dark)";

  const button = (
    <button
      className={variante ? buttonMain : buttonClass}
    // style={{
    //   backgroundColor: bgColor || defaultBgColor,
    //   color: textColor || defaultTextColor,
    // }}
    >
      {text}
    </button>
  );

  return href ? <Link href={href}>{button}</Link> : button;
};

export default Button;
