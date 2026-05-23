import './App.css';

function App() {
  const base = import.meta.env.BASE_URL;
  const bannerImage = `${base}images/p2p_banner1.png`;

  return (
    <main className="site">
      <section
  className="hero"
  style={{ "--hero-bg": `url(${bannerImage})` }}
>
        <div className="heroOverlay"></div>

        <div className="heroContent">
          <img
            src={bannerImage}
            alt="Pay To Play documentary title"
            className="heroLogo"
          />

          <p className="tagline">
            A documentary about independent music in and around Boston, filmed between 2004 and 2009.
          </p>

          <div className="buttonGroup">
            <a href="https://www.youtube.com/@pay2playboston" target="_blank" rel="noreferrer">
              YouTube
            </a>

            <a href="https://www.tiktok.com/@pay.2.play6" target="_blank" rel="noreferrer">
              TikTok
            </a>

            <a href="https://x.com/pay2playmovie" target="_blank" rel="noreferrer">
              X
            </a>

            <a href="https://www.facebook.com/profile.php?id=61590263854777" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="container">
          <h1>Pay To Play</h1>

          <p>
            <strong>Pay To Play</strong> explores the struggle, sacrifice, humor, frustration,
            and energy behind independent music. Built from documentary footage captured
            throughout Boston and surrounding areas from 2004 to 2009, the film looks back at
            a scene before social media reshaped how bands were seen, heard, and remembered.
          </p>
        </div>
      </section>

      <section className="section archive">
        <div className="container twoColumn">
          <div>
            <h2>From the Archive</h2>

            <p>
              While the feature documentary is being edited, unused clips, raw footage,
              interviews, venue moments, and performance excerpts will be released online.
            </p>

            <p>
              Follow along for rare footage from Boston’s independent music scene.
            </p>
          </div>

          <div className="card">
            <h3>Boston Independent Music</h3>
            <p>2004–2009</p>
            <span>Clips • Interviews • Performances • Stories</span>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <h2>Were you part of the scene?</h2>

          <p>
            If you played in a band, booked shows, filmed footage, made flyers, ran sound,
            or were simply there, we’d love to hear from you.
          </p>

          <a className="emailButton" href="mailto:youremail@example.com">
            Contact the Film
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
