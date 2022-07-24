import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>

        <li>
          <RouterLink to="/education">Education</RouterLink>
        </li>

        <li>
          <RouterLink to="/skills">Skills</RouterLink>
        </li>

        <li>
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  )
}
