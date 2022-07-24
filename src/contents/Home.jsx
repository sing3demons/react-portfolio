import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Social from '../components/Social.jsx'

export default function Home() {
  return (
    <div className="condiv home">
      <img
        src="https://avatars.githubusercontent.com/u/47815596?v=4"
        alt="profile"
        className="profilepic"
      />
      <ReactTypingEffect
        text={['I am Kumneung Panthong', 'i want to be a backend developer']}
        speed={80}
        eraseDelay={200}
        className="typingeffect"
      />
      <Social />
    </div>
  )
}
