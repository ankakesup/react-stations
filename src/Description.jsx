// @ts-check
import { useState } from "react"
import DogImage from "./DogImage"

export const Description = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")

  return (
    <>
      <p>犬の画像を表示するサイトです。</p>

      <DogImage imageUrl={dogUrl}/>

      <button onClick={e => 
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(response => response.json())
          .then(data => {
              console.log(data.message)
              setDogUrl(data.message)
            })
        }>更新</button>
    </>
  )
}

export default Description
