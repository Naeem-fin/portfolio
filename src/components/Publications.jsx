import "./Publications.css";

export default function Publications() {
  return (
    <div className="publications-page">
      {/* Heading */}
      <div className="publications-heading">
        <h2>Publication</h2>
      </div>

      {/* Journal Articles Box */}
      <div className="publications-box">
        <h4>Journal Articles</h4>

        <div className="paper-box">
          <strong>Optimization and Benchmarking of Fin Geometries for Enhanced Passive Cooling in Renewable Energy Systems Toward Achieving SDG 7.</strong>
          <div className="authors">
           <b>Md. Mamunur Rahman</b> , Md. Fardim Hasan Emon, Anup Karmakar, Md. Mahbubul Alam.
          </div>
          <div className="details">
            <a 
                href="https://www.sciencedirect.com/journal/energy-conversion-and-management" 
                target="_blank" 
                rel="noopener noreferrer"
                className="publication-link"
              >
                Energy Conversion and Management (Q1)
              </a> Status: Under Review
          </div>
        </div>

        <div className="paper-box">
          <strong>Iron and Cobalt Catalysts for Ammonia Decomposition: Alloy Synergies, Support Effects, and Promoter Strategies.</strong>
          <div className="authors">
            <b>Md. Mamunur Rahman</b>, Md. Shaib Hossain, Md. Abdullah AR Rifat, Asfat Kabir Sifat, M. Nasiruzzaman Shaikh.
          </div>
          <div className="details">
            <a 
                href="https://onlinelibrary.wiley.com/journal/15280691" 
                target="_blank" 
                rel="noopener noreferrer"
                className="publication-link"
              >
                The Chemical Record (Q1)
              </a> Status: Under Review
          </div>
        </div>

        <div className="paper-box">
          <strong>Mechanistic Understanding of Nickel-Based Catalysts for Ammonia Decomposition toward Efficient Hydrogen Generation.</strong>
          <div className="authors">
            M.A. Shadab Siddiqui, <b>Md. Mamunur Rahman</b> , Md. Shaib Hossain, Syed Asim Ali, Shoaib Mahmud, Jahril Fauzan Nur, Fahad Alam, Mohd Yousuf Khan, Abuzar Khan, M. Nasiruzzaman Shaikh.
          </div>
          <div className="details">
            <a 
                href="https://onlinelibrary.wiley.com/journal/15280691" 
                target="_blank" 
                rel="noopener noreferrer"
                className="publication-link"
              >
                The Chemical Record (Q1)
              </a> Status: Under Review
          </div>
        </div>

        <div className="paper-box">
          <strong>Machine Learning-Driven Optimization of Ammonia Decomposition Catalysts: A Multi-Model Comparative Study with Hyperparameter Tuning and Synthetic Data Augmentation.</strong>
          <div className="authors">
            M.A. Shadab Siddiqui, Radif Uddin Ahmed, Sabbir Alom Shuvo, Md. Shaib Hossain, Shoaib Mahmud,<b>Md. Mamunur Rahman</b> , Wahid Billah, Mst. Nusrat Yasmin, Fahad Alam, M. Nasiruzzaman Shaikh.
          </div>
          <div className="details">
             <a 
                href="https://www.sciencedirect.com/journal/international-journal-of-hydrogen-energy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="publication-link"
              >
                International Journal of Hydrogen Energy  
              </a> Status: Under Review
          </div>
        </div>
      </div>

      {/* Conference Paper Box */}
      <div className="publications-box">
        <h4>Conference Paper</h4>

        <div className="paper-box">
          <strong>Design and Fabrication of a One Shell Pass and Two Tube Pass Heat Exchanger.</strong>
          <div className="authors">
            Golam Saklayen, Bodius Salam, Md. Fardim Hasan Emon,<b>Md. Mamunur Rahman.</b> 
          </div>
          <div className="details">
          <a 
                href="https://icmerecuet.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="publication-link"
              >
                International Conference on Mechanical Engineering and Renewable Energy-2025, CUET
              </a> Status: Accepted
          </div>
        </div>
      </div>
    </div>
  );
}
