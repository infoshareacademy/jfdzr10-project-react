import {useState, useEffect} from 'react'
import {Card} from '../Card'

export const Cards = () => {
  const [data, setData] = useState([])
  const [fetchingDone, setFetchingDone] = useState(false)
  const getData = async () => {      
    const response = await fetch('http://localhost:3000/company');
    const apiData = await response.json()
    setData(apiData)
    setFetchingDone(true)
  }
  useEffect(() => {

    getData()
  },[])  

  if(!fetchingDone){
    return <h2>Loading...</h2>
  }
  
  return (
    <>
      {fetchingDone && data.map(m => <Card key={m.id} data={m}/>)}
    </>    
  )
}
