import Head from 'next/head';
import styles from '../styles/home.module.scss';
import { Input } from './../components/ui/input/Input';
import { Button } from './../components/ui/button/button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Faça seu Login</title>
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

          <a className={styles.text}>Não possuí uma conta? Cadastre-se</a>
        </div>
      </div>
    </>
  );
}
