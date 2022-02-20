import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta
          name="description"
          content="NextJS Boilerplate created by CsOrlandi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href="https://github.com/csorlandi/next-boilerplate">
            Next Boilerplate!
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/csorlandi/next-boilerplate"
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about this NextJS Boilerplate.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://csorlandi.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/csorlandi.png"
              alt="CsOrlandi Logo"
              width={32}
              height={32}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
