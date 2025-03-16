import React from 'react'
import './About.css'
import aboutImg from "../../Components/images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
    <div className='container'>
      <div className='section-title'>
        <h2>About</h2>
      </div>

      <div className='about-content grid'>
        <div className='about-img'>
          <img src = {aboutImg} alt = "" />
        </div>
        <div className='about-text'>
          <h2 className='about-title fs-26 ls-1'>About Book Showcase</h2>
          <p className='fs-17'>Welcome to Book Showcase, your ultimate book discovery platform! Our mission is to provide an easy and convenient way for book lovers to explore a wide range of books. Whether you’re searching for a new read or simply curious about a book, just type in its title, and you'll instantly get detailed descriptions, reviews, and more.Our goal is to create a seamless experience for users, helping them find the books they love or get inspired to dive into new genres. Book Showcase is your go-to resource for everything book-related, designed to make discovering and learning about books easier than ever before.</p>
          <p className='fs-17'>Happy reading!</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About