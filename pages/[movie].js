import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { movie } = router.query
  
    return <p>Post: {movie}</p>
  }
  
  export default Post