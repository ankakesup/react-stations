// @ts-check

export const BreedsSelect = ({breeds, selectBreed, selectedBreed}) => {

  return (
    <>
      {/* e.target.value でイベント(e)が起きた要素(target)のvalueを参照する */}
      <select value={selectedBreed} id="petName" onChange={(e) => selectBreed(e.target.value)}> 
        {breeds.map( elem => (
          <option value={elem}>{elem}</option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect
