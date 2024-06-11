import React from 'react'
import Person from './Person'
import Product from './Product'

const App = () => {
  return (
    <div>
      <Person name="Superman" email="super12@gmail.com" age={200} />
      <Person name="Spiderman" email="spiderman67@gmail.com" age={150} />
      <Person name="Batman" email="batman00@gmail.com" age={20} />

      <Product title="realme NARZO N63 (Leather Blue, 4GB RAM+64GB Storage) 45W Fast Charge | 5000mAh Durable Battery | 7.74mm Ultra Slim | 50MP AI Camera | AI Boost" price={8500} des="Three-in-one charging system Smooth and stable switching between fast and universal charging, no intermittent charging phenomenon Intelligent charging protection mode Learn the user's habits, enter the sleeping mode, slow down the mobile phone charging protection or stop charging protection,delay the battery aging." image="https://m.media-amazon.com/images/I/51fwbJ2eNpL._SX300_SY300_QL70_FMwebp_.jpg" />
    </div>
  )
}

export default App