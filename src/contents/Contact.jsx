import React from 'react'
import Social from '../components/Social.jsx'

export default function Contact() {
  return (
    <div className="condiv">
      <h1 className="subtopic">Contact Me</h1>
      <h3>
        Email :{' '}
        <a
          style={{ textDecoration: 'none', color: 'darkslategrey' }}
          href="mailto:kp.sing3demons@gmail.com"
        >
          kp.sing3demons@gmail.com
        </a>
      </h3>
      <h3>
        Facebook:{' '}
        <a
          style={{ textDecoration: 'none', color: 'darkslategrey' }}
          href="http://facebook.com/sing3demons"
        >
          sing3demons
        </a>
      </h3>
      <h3>
        Instagram :{' '}
        <a
          style={{ textDecoration: 'none', color: 'darkslategrey' }}
          href="http://https://www.instagram.com/sing3demons/"
        >
          @sing3demons
        </a>
      </h3>
      <h3>
        Messenger:{' '}
        <a
          style={{ textDecoration: 'none', color: 'darkslategrey' }}
          href="https://m.me/sing3demons"
        >
          sing3demons
        </a>
      </h3>
      <h3>
        Line:{' '}
        <a
          style={{ textDecoration: 'none', color: 'darkslategrey' }}
          href="https://line.me/ti/p/~sing3demons"
        >
          sing3demons
        </a>
      </h3>
      <h3>
        Telephone:{' '}
        <a
          style={{ textDecoration: 'none', color: 'darkslategrey' }}
          href="tel:+66974799593"
        >
          0974799593
        </a>
      </h3>
      <Social />
    </div>
  )
}
