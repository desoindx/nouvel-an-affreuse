import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Nouvel an à l'affreuse</h1>
        <h2>Venez toutses le 31 à partir de 20h</h2>
        <Image className={styles.image} src='/morgan-lucile.jpeg' alt='Deux personnes à un balcon' width={1024} height={768} />
      </div>
    </main>
  )
}
