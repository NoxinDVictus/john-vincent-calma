import Footer from '@/shared/components/layout/footer';
import Header from '@/shared/components/layout/header';
import { I } from '@/shared/interfaces';

export default function Template({ children }: I.Layout): JSX.Element {
  return (
    <>
      <Header />

      <div>{children}</div>

      <Footer />
    </>
  );
}
