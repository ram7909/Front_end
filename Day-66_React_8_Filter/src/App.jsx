import React, {useState} from 'react'
import Showmovie from './Showmovie'
import { movies } from './Data'
import ShowProduct from './ShowProduct'
import { products } from './ProductData'

const App = () => {
  const [movieData, setMovieData] = useState(movies)

  const [productData, setProductData] = useState(products)

  return (
    <>
      {/* <Showmovie movieData={movieData} setMovieData={setMovieData}/> */}
      <ShowProduct productData={productData} setProductData={setProductData}/>
    </>
  )
}

export default App