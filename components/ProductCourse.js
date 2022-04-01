const ProductCourse = () => {
  return (
    <article className="container container-article product-course-container">
      <section className="text-section">
        <header>
          <h2 className="header">Product Design Course</h2>
          <h3 className="subheader">Product Factory</h3>
        </header>
        <span>
          Learn how design thinking, user research,
          <br /> business vision and marketing, and finally designing and
          creating real digital products for real users.
        </span>
        <button className="start-register-button">Start Register</button>
      </section>
      <section className="picture-section">
        <img src="/factory_image.png" alt="me" width="100%" />
      </section>
    </article>
  );
};
export default ProductCourse;
