import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../ParticlesBackground";
import "./ach.css";
import "../../index.css";

import GCP from "./images/GCPcloud.png";
// import GITO from './immg/gito.png';
// import SALE from './immg/salesfor.gif';
// import GCSB from './immg/gcsb.png';
// import GDAP from './immg/gdap.png';
// import META from './immg/meta.jpg';
// import AZUR from './immg/azure.webp';
// import AISK from './immg/aiskill.png';
// import GGOU from './immg/ggclou.png';
// import MONG from './immg/mongo.png';
// import NODE from './immg/nodejs.jpeg';
// import INFO from './immg/infohtml.jpg';
// import PYTH from './immg/python.png';
// import CSSS from './immg/infocss.webp';
// import UIUX from './immg/uiux.jpeg';
// import GEMI from './immg/gemin.jpeg';
// import JUNI from './immg/junci.webp';
// import GEMV from './immg/geminvertex.png';
// import AWSA from './immg/awsa.png';
// import AWSF from './immg/awsfound.png';
// import WORF from './immg/networf.jpeg';
// import CYBR from './immg/cybersec.jpg';
// import VAML from './immg/vaml.jpg';
// import CECU from './immg/cloudsecu.png';
// import VVIT from './immg/vvitacm.jpeg';
// import GRAT from './immg/greatlearn.jpg';
// import IBMS from './immg/IBMS.jpeg';
// import UDAM from './immg/udamy.webp';

function Achievements() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="accomplishments-container">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Agbalumo:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arima:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Armata&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aldrich:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      
      <ParticlesBackground />

      <div className="accomplishments-title">Achievements</div>
      <div className="accomplishments-content">
        <div className="accomplishments-grid">
          <div className="accomplishments-column">
            <div className="accomplishments-row">
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span
                      className="tag1"
                    >
                      GLOBAL CERTIFICATION
                    </span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accomplishments-row">
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span
                      className="tag1"
                    >
                      GLOBAL CERTIFICATION
                    </span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accomplishments-row">
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span
                      className="tag1"
                    >
                      GLOBAL CERTIFICATION
                    </span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accomplishments-row">
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span
                      className="tag1"
                    >
                      GLOBAL CERTIFICATION
                    </span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="accomplishments-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/ES0z7aB-i7xBtuQldhxqvGQBjU3HLtTMljnjE4QnzjRDQQ?e=sQLi53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GCP}
                    alt="Google Cloud Certified Associate Cloud Engineer"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">
                    Google Cloud Certified Associate Cloud Engineer
                  </h3>
                  <p className="card-date">2024 - 2027</p>
                  <p className="card-desc">
                    Google Cloud Certified Associate Cloud Engineer, recognized
                    from May 2024 to May 2027 for expertise in cloud-based
                    infrastructure and operations.
                  </p>
                  <div className="card-tags">
                    <span className="tag1">GLOBAL CERTIFICATION</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="continue-home"
            onClick={handleNavigate}
            style={{
              fontFamily: "Alegreya Sans SC, sans-serif",
              cursor: "pointer",
            }}
          >
            <p>Let's Continue To Home</p>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="arrow-svg"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.479-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </div>

        <div className="footer">
          "This template is made with ❤️ by HARI SAI PARASA © 2024 💻 (✿◕‿◕✿)"
        </div>
      </div>
    </div>
  );
}

export default Achievements;
