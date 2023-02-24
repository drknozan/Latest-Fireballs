import MainLayout from '@/layouts/MainLayout';
import '@/styles/globals.css'
import { Kanit } from '@next/font/google'

const kanit = Kanit({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {

  return (
    <main className={kanit.className}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  );
}
