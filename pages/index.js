import Navbar from "../components/navbar";
import ProductCourse from "../components/ProductCourse";
import ProductFactory from "../components/ProductFactory";
import Experience from "../components/Experience";
import Article from "../components/Article";
import Projects from "../components/Projects";
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
      <Article/>
      <Projects />
      <Footer />
    </>
  );
};
export default Index;
