import Navbar from "../components/navbar";
import ProductCourse from "../components/ProductCourse";
import ProductFactory from "../components/ProductFactory";
const Index = () => {
  return (
    <>
      <div className="top-background"></div>
      <Navbar />
      <main>
        <ProductCourse />
        <ProductFactory />
        <article className="container container-article container-experience">
          <section className="section-header" >
            <h3 className="container-article-header">Course Experience</h3>
          </section>
          <section style={{ display: "flex" }}>
            <div>
            <img src="/factory_icon.png" alt="me" width='370px' style={{marginRight:'60px'}}/>
            </div>
            <span className="section-text container-text ">
              This course has been attempted by zero people who are eager to
              learn product design, especially user experience and user
              interface, so it is not a prerequisite, but due to the limited
              capacity of the priority course with early enrolled people, others
              can participate in future courses. . <br />  Obviously, the
              ability to use tools like Adobe Photoshop and Adobe Illustrator as
              well as Microsoft Word, Excel tools, and of course a lot of
              enthusiasm and energy,
            </span>
          </section>
        </article>
      </main>
      <footer>Wszystkie prawa zastrzeżone</footer>
    </>
  );
};
export default Index;
