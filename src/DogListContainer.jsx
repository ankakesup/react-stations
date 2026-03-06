// @ts-check

import { useEffect, useState } from "react"

export const DogListContainer = () => {

  const [breeds, setBreeds] = useState()

  useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => 
        setBreeds(data.message)
      )
  }, [])

  return (
    <>

    </>
  )
}

export default DogListContainer
