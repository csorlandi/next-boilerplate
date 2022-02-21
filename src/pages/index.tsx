import Head from 'next/head';
import Image from 'next/image';

import * as S from '../styles/home/styles';

function Home() {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta
          name="description"
          content="NextJS Boilerplate created by CsOrlandi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Main>
        <S.Title>
          Welcome to{' '}
          <a href="https://github.com/csorlandi/next-boilerplate">
            Next Boilerplate!
          </a>
        </S.Title>

        <S.Description>
          Get started by editing <code>src/pages/index.tsx</code>
        </S.Description>

        <S.Grid>
          <S.Card href="https://github.com/csorlandi/next-boilerplate">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about this NextJS Boilerplate.</p>
          </S.Card>
        </S.Grid>
      </S.Main>

      <S.Footer>
        <a
          href="https://csorlandi.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image
              src="/csorlandi.png"
              alt="CsOrlandi Logo"
              width={32}
              height={32}
            />
          </span>
        </a>
      </S.Footer>
    </>
  );
}

export default Home;
