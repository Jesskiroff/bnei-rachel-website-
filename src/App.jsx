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
    <h1 className ="heading">Contact us</h1>
      <dl className='contact-list'>
        {contacts.map(contact => (
        <Card key={contact.id}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
          className="card"  
        />
          
        ))}
      </dl>
   </div>
  )
}

export default App
