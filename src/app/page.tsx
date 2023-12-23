import Head from 'next/head';
import styles from '../styles/home.module.scss';
import { Input } from './../components/ui/input/Input';
import { Button } from './../components/ui/button/button';

import Link from 'next/link';
import { metadata } from './layout';

export default function Home() {
  metadata.title = 'Faça seu login';
  return (
    <>
      <Head>
        <title>metadata</title>
      </Head>

      <div className={styles.container}>
        <h1>Hamburgueria</h1>

        <div className={styles.login}>
          <form>
            <Input type="email" placeholder="Digite seu email" />

            <Input type="password" placeholder="Digite sua senha" />

            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>

          <Link href="/signup" className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
}
