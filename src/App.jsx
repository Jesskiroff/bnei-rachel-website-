import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Image from './Image.jsx'
import Card from './Card.jsx'
import contacts from '../contacts.js'



function createCard(contact) {
  return <Card
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    className="card"  
  />;
}
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header />
    <Image/>
    <h1 className ="heading">My Contacts</h1>
      {contacts.map(createCard)}
   </div>
  )
}

export default App
