import './App.css';

function App() {
  const bannerImage = `${import.meta.env.BASE_URL}images/gritty2.png`;
  const backgroundImage = `${import.meta.env.BASE_URL}images/jamspace.png`;
  const backgroundImage2 = `${import.meta.env.BASE_URL}images/collage.png`;
  const backgroundImage3 = `${import.meta.env.BASE_URL}images/dollar.jpg`;

  return (
    <main className="site">
      <section
        className="hero"
        style={{ "--hero-bg": `url(${backgroundImage})` }}
        aria-label="Pay To Play documentary hero section"
      >
        <div className="heroOverlay"></div>

        <div className="heroContent">
          <h1 className="srOnly">
            Pay To Play — Boston Independent Music Documentary
          </h1>

          <img
            src={bannerImage}
            alt="Pay To Play documentary logo for a film about Boston independent music"
            className="heroLogo"
          />

          <p className="srOnly">
            A documentary film about Boston's independent music scene, local bands,
            DIY shows, archival footage, and the cost of chasing music before social media.
          </p>
        </div>
      </section>

      <section
        className="hero"
        style={{ "--hero-bg": `url(${backgroundImage3})` }}
        aria-labelledby="about-pay-to-play"
      >
        <div className="container text-box">
          <h2 id="about-pay-to-play">
            A Documentary About Boston’s Independent Music Scene in the early 2000s
          </h2>

          <p>
            <strong>Pay To Play</strong> is a documentary film about the struggle,
            sacrifice, humor, frustration, and energy behind independent music.
            Built from archival documentary footage captured throughout Boston and
            surrounding areas in the early 2000s, the film looks back at a local
            music scene before social media reshaped how bands were seen, heard,
            promoted, and remembered.
          </p>

          <p>
            At its core, <strong>Pay To Play</strong> asks a simple question:
            Why do independent musicians keep going when the odds are stacked
            against them?
          </p>

          <p>
            For many local bands, making music means balancing creative ambition
            with real-world limitations. Recording, booking shows, promoting events,
            selling merch, and finding an audience all require time, money, and
            persistence. Most artists are not chasing fame. They are trying to be heard.
          </p>

          <p>
            Through interviews, live performances, venue footage, and behind-the-scenes
            moments, <strong>Pay To Play</strong> captures that struggle and celebrates
            the commitment behind Boston’s DIY music community.
          </p>
        </div>
      </section>

      <section className="section archive" aria-labelledby="archive-footage">
        <div className="container twoColumn">
          <div>
            <h2 id="archive-footage">Archival Footage from the Film</h2>

            <p>
              While the feature documentary is being edited, unused clips, raw footage,
              interviews, venue moments, and performance excerpts from the early-2000s
              Boston independent music scene will be released online.
            </p>

            <p>
              Follow along for rare archival footage of local bands, musicians, venues,
              interviews, performances, and stories from a pre-social-media era of
              underground music.
            </p>

            <div className="buttonGroup" aria-label="Follow Pay To Play online">
              <a
                href="https://www.youtube.com/@pay2playboston"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Pay To Play on YouTube"
              >
                YouTube
              </a>

              <a
                href="https://www.tiktok.com/@pay.2.play6"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Pay To Play on TikTok"
              >
                TikTok
              </a>

              <a
                href="https://x.com/pay2playmovie"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Pay To Play on X"
              >
                X
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61590263854777"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Pay To Play on Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Boston Independent Music</h3>
            <p>2001–2009</p>
            <span>Clips • Interviews • Performances • Stories</span>
          </div>
        </div>
      </section>

      <section
        className="hero visualBreak"
        style={{ "--hero-bg": `url(${backgroundImage2})` }}
        aria-label="Collage of archival imagery from the Pay To Play documentary"
      >
      </section>

      <section className="section contact" aria-labelledby="contact-scene">
        <div className="container">
          <h2 id="contact-scene">Were You Part of the Scene?</h2>

          <p>
            If you played in a band, booked shows, filmed footage, made flyers,
            ran sound, attended shows, supported local music, or maybe even ran
            into us while we were filming, we’d love to hear from you.
          </p>

          <a className="emailButton" href="mailto:pay2playboston@gmail.com">
            Contact the Film
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;