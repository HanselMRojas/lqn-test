/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LQN Test Home</title>
        <meta name="description" content="LQN Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="web-inner">
        <section className={styles.container}>
          <figure className={styles.logo}>
            <img src="/static/logos/logo.svg" alt="SVG Logo" />
            <span>LQN Test</span>
          </figure>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" href="/tests/part-one">Part 1</Button>
            <Button variant="outlined" href="/tests/part-one">Part 2</Button>
          </Stack>
        </section>
      </section>
    </>
  )
}

export default Home
