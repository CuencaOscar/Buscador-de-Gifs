import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState( [ 'One Punch' ] )

  return (
    <>
      <h2>Consultar Gifs</h2>
      <AddCategory setCategories = { setCategories }/>
      <hr />

      <ol>
        {
          categories.map(( element ) => <GifGrid key={ element } category = { element } />)
        }
      </ol>
    </>
  )
  
}
export default GifExpertApp;