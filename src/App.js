import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Card">
          <img src="david.jpg" className="App-img" alt="David Ortiz" />
          <h1>David Ortiz-Alejandre</h1>
          <h4>Frontend Developer</h4>
          <div className="About">
            <h3>About Me</h3>
            <p>
              I am a frontend developer with an interest in making web pages and
              applications simple for users, while considering the mobile-first
              approach for each task. I am constantly learning about best
              practices and new languages/frameworks to expand my skills and
              knowledge on current topics.
            </p>
            <footer className="Footer">
              <a href="https://github.com/ortizdavid00">
                <img
                  src="https://img.icons8.com/ios-glyphs/45/000000/github.png"
                  alt="GitHub"
                />
              </a>
              <a href="https://www.linkedin.com/in/david-ortiz-alejandre-676aa2183/">
                <img
                  src="https://img.icons8.com/ios-filled/45/000000/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://ortizdavid00.github.io/portfolio/">
                <img
                  src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/45/000000/external-portfolio-advertising-kiranshastry-solid-kiranshastry.png"
                  alt="Portfolio"
                />
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
