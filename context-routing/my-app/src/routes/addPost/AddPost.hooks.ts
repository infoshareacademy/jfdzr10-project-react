import { API_URL } from '../../const'
import { AddPostProps } from './AddPost.types'

export const useAddPost = ({
  title,
  body,
  resetTitle,
  resetBody,
}: AddPostProps) => {
  const fetchData = () => {
    fetch(API_URL, {
      method: 'post',
      body: JSON.stringify({
        title,
        body,
      }),
    }).then(res => {
      resetTitle()
      resetBody()
    })
  }
  return { fetchData }
}
