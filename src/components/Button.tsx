// components/Button.tsx
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../css/button.module.css";

interface ButtonProps {
  text: string;
  size?: "small" | "medium" | "large";
  bgColor?: string;
  textColor?: string;
  href?: string;
}

const inter = Inter({ subsets: ["latin"], weight: "300" });

const Button: React.FC<ButtonProps> = ({
  text,
  size = "medium",
  bgColor,
  textColor,
  href,
}) => {
  
  const buttonClass = `${styles.botao} ${styles[size]} ${inter.className}`;
  // const defaultBgColor = "var(--bg-element-green)";
  // const defaultTextColor = "var(--text-dark)";

  const button = (
    <button
      className={buttonClass}
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
