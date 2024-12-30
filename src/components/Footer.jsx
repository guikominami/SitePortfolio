import "./Footer.css";
import logoInstagram from "../assets/imgs/logo_instagram.png";
import logoLinkedin from "../assets/imgs/logo_linkedin.png";
import logoSandbox from "../assets/imgs/logo_sandbox.png";
import logoGithub from "../assets/imgs/logo_github.png";

export default function Footer() {
  return (
    <section className="main-footer">
      <div>
        <a
          href="https://www.linkedin.com/in/guilherme-kominami-0205a0ab/"
          target="blank"
        >
          <img src={logoLinkedin} alt="" />
        </a>
        <a
          href="https://codesandbox.io/dashboard/recent?workspace=ws_U63HSWKqY1mMozDMAt7fAC&new_join=true"
          target="blank"
        >
          <img src={logoSandbox} alt="" />
        </a>
        <a
          href="https://github.com/guikominami?tab=repositories"
          target="blank"
        >
          <img src={logoGithub} alt="" />
        </a>
      </div>
    </section>
  );
}
