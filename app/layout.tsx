import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jost } from 'next/font/google';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const jost = Jost({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Made Up',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
