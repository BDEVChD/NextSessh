import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div id="wrapper">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Wrapper */}
     
        {/* Header */}
        <header id="header" className="alt">
          <a href="index.html" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>
        {/* Menu */}
        <nav id="menu">
          <ul className="links">
            <li><a href="index.html">Home</a></li>
            <li><a href="landing.html">Landing</a></li>
            <li><a href="generic.html">Generic</a></li>
            <li><a href="elements.html">Elements</a></li>
          </ul>
          <ul className="actions stacked">
            <li><a href="#" className="button primary fit">Get Started</a></li>
            <li><a href="#" className="button fit">Log In</a></li>
          </ul>
        </nav>
        {/* Banner */}
        <section id="banner" className="major">
          <div className="inner">
            <header className="major">
              <h1>Hi, my name is Forty</h1>
            </header>
            <div className="content">
              <p>A responsive site template designed by HTML5 UP<br />
                and released under the Creative Commons.</p>
              <ul className="actions">
                <li><a href="#one" className="button next scrolly">Get Started</a></li>
              </ul>
            </div>
          </div>
        </section>
        {/* Main */}
        <div id="main">
          {/* One */}
          <section id="one" className="tiles">
            <article>
              <span className="image">
                <img src="images/pic01.jpg" alt="" />
              </span>
              <header className="major">
                <h3><a href="landing.html" className="link">Aliquam</a></h3>
                <p>Ipsum dolor sit amet</p>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic02.jpg" alt="" />
              </span>
              <header className="major">
                <h3><a href="landing.html" className="link">Tempus</a></h3>
                <p>feugiat amet tempus</p>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic03.jpg" alt="" />
              </span>
              <header className="major">
                <h3><a href="landing.html" className="link">Magna</a></h3>
                <p>Lorem etiam nullam</p>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic04.jpg" alt="" />
              </span>
              <header className="major">
                <h3><a href="landing.html" className="link">Ipsum</a></h3>
                <p>Nisl sed aliquam</p>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic05.jpg" alt="" />
              </span>
              <header className="major">
                <h3><a href="landing.html" className="link">Consequat</a></h3>
                <p>Ipsum dolor sit amet</p>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic06.jpg" alt="" />
              </span>
              <header className="major">
                <h3><a href="landing.html" className="link">Etiam</a></h3>
                <p>Feugiat amet tempus</p>
              </header>
            </article>
          </section>
          {/* Two */}
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
              <ul className="actions">
                <li><a href="landing.html" className="button next">Get Started</a></li>
              </ul>
            </div>
          </section>
        </div>
        {/* Contact */}
        <section id="contact">
          <div className="inner">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows={6} defaultValue={""} />
                  </div>
                </div>
                <ul className="actions">
                  <li><input type="submit" defaultValue="Send Message" className="primary" /></li>
                  <li><input type="reset" defaultValue="Clear" /></li>
                </ul>
              </form>
            </section>
            <section className="split">
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-envelope" />
                  <h3>Email</h3>
                  <a href="#">information@untitled.tld</a>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-phone" />
                  <h3>Phone</h3>
                  <span>(000) 000-0000 x12387</span>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-home" />
                  <h3>Address</h3>
                  <span>1234 Somewhere Road #5432<br />
                    Nashville, TN 00000<br />
                    United States of America</span>
                </div>
              </section>
            </section>
          </div>
        </section>
        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
              <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
              <li>© Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
      </div>
      
  )
}