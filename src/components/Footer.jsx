import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
  FaUniversity,
  FaResearchgate,
  FaFacebook,
} from "react-icons/fa";
import { SiOrcid } from "react-icons/si"; // ORCID icon
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons-only">
        <a
          href="mailto:mdmamunurrahman2001@gmail.com"
          title="Email"
          aria-label="Email" 
        >
          <FaEnvelope />
        </a>

        <a
          href="tel:+8801747390931"
          title="Phone"
          aria-label="Phone"
        >
          <FaPhoneAlt />
        </a>

        <a
          href="https://www.linkedin.com/in/md-mamunur-rahman-b681b1323/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        

        <a
          href="https://www.researchgate.net/profile/Md-Rahman-1974"
          target="_blank"
          rel="noreferrer"
          title="ResearchGate"
          aria-label="ResearchGate"
        >
          <FaResearchgate />
        </a>

        <a
          href="https://orcid.org/0009-0003-2965-4665"
          target="_blank"
          rel="noreferrer"
          title="ORCID"
          aria-label="ORCID"
        >
          <SiOrcid />
        </a>

        <a
          href="https://www.facebook.com/mamunur.rahman.9041"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        
        <a
          href="https://www.cuet.ac.bd/"
          target="_blank"
          rel="noreferrer"
          title="CUET"
          aria-label="CUET"
        >
          <FaUniversity />
        </a>
        <a
          href="https://www.google.com/maps/place/Narsingdi,+Bangladesh"
          target="_blank"
          rel="noreferrer"
          title="Location"
          aria-label="Location"
        >
          <FaMapMarkerAlt />
        </a>

      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Md. Mamunur Rahman
      </p>
    </footer>
  );
}
