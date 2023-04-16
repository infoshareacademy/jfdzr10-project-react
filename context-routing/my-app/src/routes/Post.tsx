import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { API_URL } from '../const'
import { SinglePost } from './Posts.types'

export const Post = () => {
  const [postDetails, setPostDetails] = useState<SinglePost>({} as SinglePost)
  const { id } = useParams()

  const getData = () => {
    return fetch(`${API_URL}/${id}`)
      .then(response => response.json())
      .then(response => setPostDetails(response))
  }

  useEffect(() => {
    getData()
  }, [id])

  return (
    <div>
      <Header />
      <h1>Szczegóły danego postu:</h1>
      <h2>{postDetails?.title}</h2>
      <p>{postDetails?.body}</p>
    </div>
  )
}

export default Post
