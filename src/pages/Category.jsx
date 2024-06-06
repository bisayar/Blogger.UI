import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { usePosts } from "../context/PostContext"
import PostCard from "../components/PostCard"
import { filterProducts } from "../helpers/helpers"

function Category() {

    const { id } = useParams()

    const posts = usePosts();
    const [displayed , setDisplayed] = useState([])
    const [query , setQuery] = useState("")

    useEffect(()=> {
      setDisplayed(posts)
    }, [posts])

    useEffect(()=> {

      let finalPosts = filterProducts(posts , query.id);
      setDisplayed(finalPosts)

      setQuery((query) => ({...query , id}))

    }, [query])


    return (
      <>
          <div className="d-flex align-items-center flex-wrap gap-2">

              <div className="w-100">
                <div className="d-flex align-items-center justify-content-center w-100">
                  {!displayed.length && <p>No Posts Found</p>}
                </div>
                {displayed.map((post) => (
                    <PostCard key={post.articleId} data={post} />
                ))}
              </div>
          </div>
      </>
    )
  }
  
  export default Category