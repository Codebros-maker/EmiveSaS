import React, { useRef, useEffect } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./App.css";

export default function KarsonPage() {

  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!el) return;

      scrollAmount += 220;

      if (scrollAmount >= el.scrollWidth - el.clientWidth) {
        scrollAmount = 0;
      }

      el.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "https://production-stanti-image-gallery-app.s3.amazonaws.com/8274e9e1-87ed-4667-a436-f43d61d137e8/fe51e288-af82-443c-b891-3fbc847ed110.jpeg",
    "https://production-stanti-image-gallery-app.s3.amazonaws.com/8274e9e1-87ed-4667-a436-f43d61d137e8/845c208d-4cbe-44c3-bb3d-2913765f333f.jpeg",
    "https://production-stanti-image-gallery-app.s3.amazonaws.com/8274e9e1-87ed-4667-a436-f43d61d137e8/a15afb6c-4d6e-4a83-a618-f9b58d3da5dc.jpeg",
    "https://production-stanti-image-gallery-app.s3.amazonaws.com/8274e9e1-87ed-4667-a436-f43d61d137e8/29835151-92ec-4a7a-8379-7736ec272751.jpeg",
    "https://production-stanti-image-gallery-app.s3.amazonaws.com/8274e9e1-87ed-4667-a436-f43d61d137e8/3c69ccb7-f461-46ca-b4a2-74254ac7ed86.jpeg",
    "https://production-stanti-image-gallery-app.s3.amazonaws.com/8274e9e1-87ed-4667-a436-f43d61d137e8/26fd5321-d10d-4f67-be49-fb084b690e4d.jpeg",
    "https://production-stanti-image-gallery-app.s3.amazonaws.com/8274e9e1-87ed-4667-a436-f43d61d137e8/4bbc29a8-4c1e-441a-986f-a6ea30094ac3.jpeg",
    "https://production-stanti-image-gallery-app.s3.amazonaws.com/8274e9e1-87ed-4667-a436-f43d61d137e8/e7ccef36-9624-426e-8ad0-49840d475c6f.jpeg",
    "https://production-stanti-image-gallery-app.s3.amazonaws.com/8274e9e1-87ed-4667-a436-f43d61d137e8/9f62452b-890f-41c0-a6dc-dcd7605e7210.jpeg"
  ];


  return (
    <div className="container">
      <div className="profile">
        <div className="logo">EMIVE</div>

        <h2>Fabio Coelho</h2>
        <p className="username">@fabioocoelhosep</p>

        <div className="tabs">
          <span className="active">stanti</span>
          {/* <span>sobre</span> */}
        </div>
      </div>

      {/* CARROSSEL */}
      <div className="carousel" ref={carouselRef}>
        {images.map((img, index) => (
          <img key={index} src={img} alt="galeria" />
        ))}
      </div>

      <div className="links">

        {/* WhatsApp */}
        <a
          className="link-card"
          href="https://wa.me/5592993130506?text=Olá%20eu%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20da%20emive"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="link-left">
            <span className="link-label">🔗 LINK</span>
            <h3>WhatsApp</h3>
          </div>

          <div className="link-right">
            <div className="icon-box whatsapp">
              <FaWhatsapp />
            </div>
            <span className="arrow">›</span>
          </div>
        </a>

        {/* Instagram */}
        <a
          className="link-card"
          href="https://instagram.com/fabioocoelhosep"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="link-left">
            <span className="link-label">🔗 LINK</span>
            <h3>Instagram</h3>
          </div>

          <div className="link-right">
            <div className="icon-box instagram">
              <FaInstagram />
            </div>
            <span className="arrow">›</span>
          </div>
        </a>

        {/* agendamento */}
        <a
          className="link-card"
          href="https://calendar.app.google/qdmRAzrrXv2AMhWo6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="link-left">
            <span className="link-label">🔗 LINK</span>
            <h3>Agendamento</h3>
          </div>

          <div className="link-right">
            <div className="icon-box calendar">📅</div>
            <span className="arrow">›</span>
          </div>
        </a>
      </div>
      {/* essa area vai ficar comentada por enquanto pq o cliente ainda nao tem as imagens para adicionar neste campo da tela */}
      {/* <div className="gallery">
        <img src="/g1.jpg" />
        <img src="/g2.jpg" />
        <img src="/g3.jpg" />
      </div> */}
      <footer>
        <p>
          Entre em contato <span>Coelhosolucoes91@gmail.com</span>
        </p>
      </footer>
    </div>
  );
}