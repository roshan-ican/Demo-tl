import React from "react"
import "./Hero.module.css"

export default function Hero() {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container text-center position-relative"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1>Your New Online Presence with Bethany</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
    </>
  )
}