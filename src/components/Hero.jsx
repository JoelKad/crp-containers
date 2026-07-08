function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <img 
          src="/images/logo.png" 
          alt="CRP Containers" 
          className="logo"
        />

        <h1>
          Sumate al Programa de Revendedores de CRP
        </h1>

        <h2>
          Vendé contenedores sin inversión inicial
        </h2>

        <ul>
          <li>Sin comprar stock</li>
          <li>Trabajás con nuestros contenedores</li>
          <li>Sin inversión inicial</li>
        </ul>

        <p>
          Vos vendés. Nosotros entregamos, cobramos y transferimos
          tu ganancia directo a tu caja de ahorro.
        </p>

      </div>


<div className="hero-image">

  <img 
    src="/images/sergio.png"
    alt="Sergio Saban"
  />

<div className="contact-card">

  <h3>
    Sergio Saban
  </h3>

  <p>
    11 5828 8783
  </p>

  <a 
    href="https://wa.me/541158288783"
    className="whatsapp"
  >
    WhatsApp
  </a>

</div>

</div>

    </section>
  )
}

export default Hero