import BaseButton from 'components/BaseButton'
import styles from './NotFound.module.scss'
import dogError from 'assets/error_404.png'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className={styles.error__container}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragraph}>
                    Tem certeza de que era isso que você estava procurando? 
                </p>
                <p className={styles.paragraph}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div 
                    className={styles.button}
                    onClick={() => navigate(-1)}
                >
                    <BaseButton size='lg'>
                        Voltar
                    </BaseButton>
                </div>
                <img 
                    className={styles.image__dog}
                    alt="Dog wearing glasses and dressed like a human"
                    src={dogError}
                />
            </div>
            <div className={styles.blank__space}></div>
        </>
  )
}

export default NotFound
