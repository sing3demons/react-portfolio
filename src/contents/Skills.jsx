import React, { useEffect, useState } from 'react'

const data = ['ReactJS', 'NodeJS', 'Go', 'C#']

export default function Skills() {
  const [skill, setSkill] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setSkill(data)
    if (skill) {
      setIsLoading(false)
    }
  }, [skill])

  if (isLoading) return <div>Loading...</div> //show Loading...
  return (
    <div className="condiv skills">
      <h1 className="subtopic">My Skills</h1>
      <ul>
        {skill?.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  )
}
