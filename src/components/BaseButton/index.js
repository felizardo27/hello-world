import styles from './BaseButton.module.scss'

const BaseButton = ({children, size}) => {
  return (
    <button className={`
      ${styles.button}
      ${styles[size]}
    `}>
        {children}
    </button>
  )
}

export default BaseButton
