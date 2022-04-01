import Navbar from "../components/navbar";
import ProductCourse from "../components/ProductCourse";
import ProductFactory from "../components/ProductFactory";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
const Index = () => {
  return (
    <>
      <div className="top-background"></div>
      <Navbar />
      <main>
        <ProductCourse />
        <ProductFactory />
        <Experience />
      </main>
      <Footer />
    </>
  );
};
export default Index;
