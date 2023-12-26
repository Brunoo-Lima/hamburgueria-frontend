import Head from 'next/head';

import { metadata } from './layout';

import App from './App';
import { AuthProvider } from '@/contexts/AuthContext';

export default function Home() {
  metadata.title = 'Faça seu login';
  return (
    <>
      <AuthProvider>
        <Head>
          <title>metadata</title>
        </Head>

        <App />
      </AuthProvider>
    </>
  );
}
