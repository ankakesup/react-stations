// DO NOT DELETE

import { data } from 'autoprefixer'
import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")

  return (
    <>
      <header>
        <title>React Test</title>
      </header>

      <body>
        <p>犬の画像を表示するサイトです。</p>

        <img src={dogUrl} />

        <button onClick={e => 
          fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                console.log(data.message)
                setDogUrl(data.message)
              })
          }>更新</button>

      </body>
    </>
  )
}