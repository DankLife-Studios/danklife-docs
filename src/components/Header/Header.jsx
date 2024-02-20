import danklifeImg from '../../assets/logo.png';

export default function Header() {
    return (
      <header>
        <h1>DankLife Studios Docs</h1>
        <img src={danklifeImg} alt="DankLife Studio" />
        <p>
          Explore our meticulously curated library of FiveM script documentation, designed to empower you with the knowledge and tools necessary for a flawless setup of your FiveM server.
        </p>
        <p>
          Dive into our guides for insights and best practices to elevate your server-building experience!
        </p>
        <p>
          Expertise in LUA is mandatory, and we strongly advise proficiency in JavaScript, HTML, and CSS to guarantee the seamless installation of our scripts
        </p>
      </header>
    );
}