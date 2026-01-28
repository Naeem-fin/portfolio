import { useState } from "react";
import "./Home.css";

// Import images from src/images folder
import photo1 from "../images/photo1.jpeg";
import photo2 from "../images/photo2.jpeg";
import photo3 from "../images/photo3.jpeg";
import photo4 from "../images/photo4.jpeg";

const photos = [photo1, photo2, photo3, photo4];

export default function Home() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-page">
      {/* Background Banner */}
      <div className="home-banner">
        <h1>Md. Mamunur Rahman</h1>
        <p>B.Sc. in Mechanical Engineering</p>
        <p>Chittagong University of Engineering and Technology</p>
      </div>

      {/* Main Content */}
      <div className="home-content">
        {/* Left: Photo Slider */}
        <div className="photo-slider">
          <img
            src={photos[currentPhoto]}
            alt={`Profile ${currentPhoto + 1}`}
            className="slider-photo"
          />

          {/* Overlay Buttons */}
          <button className="nav-button prev" onClick={prevPhoto}>
            &lt;
          </button>
          <button className="nav-button next" onClick={nextPhoto}>
            &gt;
          </button>
        </div>

        {/* Right: Text */}
        <div className="home-text">
          <p>
            I am a Mechanical Engineering graduate from Chittagong University
            of Engineering and Technology (CUET), where I ranked in the top 12%
            of my class. My academic focus is on computational modeling in
            thermal-fluid systems, particularly CFD-based heat transfer and
            energy-related applications.
          </p>
          <p>
            My undergraduate thesis focused on CFD-based optimization of fin
            geometries for improved heat dissipation, which led to a journal
            manuscript currently under review in <em>Energy Conversion and Management</em>.
            Alongside this work, I have also been involved in collaborative
            research on energy materials and catalyst-based ammonia (NH3)
            decomposition.
          </p>
          <p>
            I have experience using ANSYS, COMSOL, MATLAB, and SolidWorks and
            gained practical experience in power generation and metallurgical
            processes through industry internships. I am currently seeking PhD
            opportunities primarily in Mechanical Engineering, with
            interdisciplinary interests in Materials Science and Energy
            Engineering. My goal is to contribute to sustainable energy
            technologies through computational modeling and applied research.
          </p>
          <p>
            Thank you for visiting my website. Please feel free to contact me if
            you are interested in collaboration or supervision opportunities,
            or if you would like to learn more about my work.
          </p>
        </div>
      </div>
      
        <div className="speech">
          “The important thing is not to stop questioning.” — Albert Einstein
        </div>
    </div>
  );
}
