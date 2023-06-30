import Navbar from './navbar/navbar.component';
import Footer from './footer/footer.component';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}