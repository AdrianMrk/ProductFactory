import React, { useState } from "react";

const Article = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("emailResponseInfo").style.display = "block";
  };
  return (
    <article className="fullwidth-article fullwidth-article-black">
      <div className="container container-request">
        <section className="text-section">
          <header>
            <h2 className="header">Request a list of headings</h2>
            <span className="section-text">
              Please enter your email address to receive course titles, the
              <br />
              topics will be emailed to you.
            </span>
          </header>
          <form onSubmit={handleSubmit}>
            <input
              className="form-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input type="submit" value="Wyślij" hidden />
          </form>
          <div className='section-email' style={{ height: "60px" }}>
            <div id="emailResponseInfo" style={{ display: "none" }}>
              <div className="dot">&#10003;</div><div>
              Your email has been successfully registered, headlines will be
              sent to you soon</div>
            </div>
          </div>
        </section>
        <section className="picture-section">
          <div style={{ position: "relative" }}>
            <div className="back" style={{ position: "absolute" }}>
              <img src="/post_icon.png" alt="me" width="770px" />
            </div>
            <div className="fornt" style={{ position: "relative" }}>
              <img src="/post_icon.png" alt="me" width="270px" />
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};
export default Article;
