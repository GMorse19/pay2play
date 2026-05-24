import './App.css';

function App() {
  const bannerImage = `${import.meta.env.BASE_URL}images/gritty2.png`;
  // const bannerImage2 = `${import.meta.env.BASE_URL}images/p2p_banner1.png`;
  const backgroundImage = `${import.meta.env.BASE_URL}images/jamspace.png`;
  const backgroundImage2 = `${import.meta.env.BASE_URL}images/collage.png`;
  const backgroundImage3 = `${import.meta.env.BASE_URL}images/dollar.jpg`;

  return (
    <main className="site">
      <section
        className="hero"
        style={{ "--hero-bg": `url(${backgroundImage})` }}
      >
        <div className="heroOverlay"></div>

        <div className="heroContent">
          <img
            src={bannerImage}
            alt="Pay To Play documentary title"
            className="heroLogo"
          />

        </div>
      </section>

      <section
        className="hero"
        style={{ "--hero-bg": `url(${backgroundImage3})` }}
      >
        <div className="container text-box">
          <p>
            <strong>Pay To Play</strong> explores the struggle, sacrifice, humor,
            frustration, and energy behind independent music. Built from documentary
            footage captured throughout Boston and surrounding areas in the early 2000s, 
            the film looks back at a scene before social media reshaped how
            bands were seen, heard, and remembered.
          </p>
          <br></br>
          <p>
          At its core, Pay to Play asks a simple question: <br></br>
          Why do independent musicians keep going when the odds are stacked against them?<br></br><br></br>
          For many local bands, making music means balancing creative ambition with real-world limitations. 
          Recording, booking shows, promoting events, selling merch, and finding an audience all require time, 
          money, and persistence. Most artists are not chasing fame. They are trying to be heard. <br></br><br></br>
          Pay to Play captures that struggle and celebrates the commitment behind it.
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
            <div className="buttonGroup">
            <a
              href="https://www.youtube.com/@pay2playboston"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>

            <a
              href="https://www.tiktok.com/@pay.2.play6"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>

            <a
              href="https://x.com/pay2playmovie"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61590263854777"
              target="_blank"
              rel="noreferrer"
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
        className="hero"
        style={{ "--hero-bg": `url(${backgroundImage2})` }}
        >
        </section>
      <section className="section contact">
        <div className="container">
          <h2>Were you part of the scene?</h2>

          <p>
            If you played in a band, booked shows, filmed footage, made flyers,
            ran sound, were simply there, or maybe even ran into us, we’d love to hear from you.
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