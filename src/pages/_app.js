import MainLayout from '@/layouts/MainLayout';
import '@/styles/globals.css'
import { Kanit } from '@next/font/google'
import "@/styles/nprogress.css";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from "nprogress";

const kanit = Kanit({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    }

    const handleStop = () => {
      NProgress.done();
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router]);

  return (
    <main className={kanit.className}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  );
}
