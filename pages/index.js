import Navbar from "../components/navbar";
const Index = () => {
  return (
    <>
      <div className="top-background"></div>
      <Navbar />
      <main>
        <article className="product-course-container">
          <section className="text-section">
            <h2 className="header">Product Design Course</h2>
            <h3 className="subheader">Product Factory</h3>
            <span style={{ marginBottom: "50px" }}>
              Learn how design thinking, user research, business vision and
              marketing, and finally designing and creating real digital
              products for real users.
            </span>
          </section>
          <section className="picture-section">
            <img src="/factory_image.png" alt="me" width="100%" />
          </section>
        </article>
      </main>
      <footer>Wszystkie prawa zastrzeżone</footer>
    </>
  );
};
export default Index;
