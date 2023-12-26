'use client';

import React, { FormEvent } from 'react';
import styles from '../styles/home.module.scss';
import { Input } from '../components/ui/input/Input';
import { Button } from '../components/ui/button/button';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import Link from 'next/link';

const App = () => {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    let data = {
      email: 'bruno@gmail.com',
      password: '123',
    };
    await signIn(data);
  }

  return (
    <div className={styles.container}>
      <h1>Hamburgueria</h1>

      <div className={styles.login}>
        <form onSubmit={handleLogin}>
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
  );
};

export default App;
