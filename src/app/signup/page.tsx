import Head from 'next/head';
import styles from '../../styles/home.module.scss';
import { Input } from '../../components/ui/input/Input';
import { Button } from '../../components/ui/button/button';
import { metadata } from '../layout';
import Link from 'next/link';

export default function SignUp() {
  metadata.title = 'Faça seu cadastro';
  return (
    <>
      <Head>
        <title>metadata</title>
      </Head>

      <div className={styles.container}>
        <h1>Hamburgueria</h1>

        <div className={styles.login}>
          <h2 className={styles.title}>Criando sua Conta</h2>

          <form>
            <Input type="text" placeholder="Digite seu nome" />

            <Input type="email" placeholder="Digite seu email" />

            <Input type="password" placeholder="Digite sua senha" />

            <Button type="submit" loading={false}>
              Criar Usuário
            </Button>
          </form>

          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça login!
          </Link>
        </div>
      </div>
    </>
  );
}
