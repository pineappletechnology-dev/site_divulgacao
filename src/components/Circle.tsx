import styles from "../css/components/circle.module.css"

interface CircleProps {
  size: number
  top?: number
  left?: number
  right?: number
  end?: number
}

const Circle = ({ size, top, left, right, end }: CircleProps) => {
  return (
    <div className={styles.circle} style={{ width: size, height: size, top: top, left: left, right: right, bottom: end }} />
  )
}

export default Circle