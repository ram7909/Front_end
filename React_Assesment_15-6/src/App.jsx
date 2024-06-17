import React from 'react'
import Movie from './components/Movie'
import Use from './components/Use'
import Showdata from './components/Showdata'

const App = () => {
  const items = [
    {
      title:'POCO M6 5G (Orion Blue, 4GB RAM, 128GB Storage)',
      des:'50MP AI Dual camera with Primary sensor of f/1.8 (4-in-1 super pixel)',
      price:'8,999 /-',
      imgsrc:'https://m.media-amazon.com/images/I/711v0d6yDLL._SY741_.jpg'
    },
    {
      title:'TECHNO POVA 6 PRO 5G',
      des:'Indias First 6000mAh Battery with superfast charger',
      price:'8,999 /-',
      imgsrc:'https://m.media-amazon.com/images/I/61Nr811Q+cL._SX569_.jpg'
    },
    {
      title:'Apple iPhone 15 (128GB) - Black',
      des:'DYNAMIC ISLAND COME TO IPHONE 15',
      price:'73,100 /-',
      imgsrc:'h11ps://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg'
    }
  ]
  return (
    <>
      <Movie imgsrc="https://upload.wikimedia.org/wikipedia/en/8/8f/Baadshah_%281999_film%29.jpg" name="Baadshah" actor="Shah Rukh Khan" release="27 Aug 1999" budget="11 Crore"/>
      
      <Use />

      <Showdata item={items} />
    </>

  )
}

export default App