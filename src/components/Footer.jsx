import "./Footer.css";
import logoLinkedin from "../assets/imgs/logo_linkedin.png";
import logoSandbox from "../assets/imgs/logo_sandbox.png";
import logoGithub from "../assets/imgs/logo_github.png";

export default function Footer() {
  return (
    <section className="main-footer">
      <div className="elements">
        <span>Guilherme Kominami</span>
      </div>
      <div className="elements">
        <a
          href="https://www.linkedin.com/in/guilherme-kominami-0205a0ab/"
          target="_blank"
        >
          <img src={logoLinkedin} alt="" />
        </a>
        <a
          href="https://codesandbox.io/dashboard/recent?workspace=ws_U63HSWKqY1mMozDMAt7fAC&new_join=true"
          target="_blank"
        >
          <img src={logoSandbox} alt="" />
        </a>
        <a
          href="https://github.com/guikominami?tab=repositories"
          target="_blank"
        >
          <img src={logoGithub} alt="" />
        </a>
      </div>
    </section>
  );
}
