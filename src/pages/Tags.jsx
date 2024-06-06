import { useEffect, useState } from "react"
import { Link, useSearchParams  } from "react-router-dom"

import Icon from "../font-icon/Icon"
import api from "../services/config"
import { usePosts } from "../context/PostContext"
import PostCard from "../components/PostCard"
import { filterProducts, getInitialQuery } from "../helpers/helpers"
import Loader from "../components/Loader"

function Tags() {


    const posts = usePosts();
    const [displayed , setDisplayed] = useState([])
    const [query , setQuery] = useState("")

    const [allTags , setAllTags] = useState([])

    const [searchParams , setSearchParams] = useSearchParams()

    useEffect(()=>{
      const fetchAllTags = async ()=>{
          try{
            setAllTags(await api.get('/articles/tags'))
          }
          catch(error){
              console.log(error.message)
          }
      }
      fetchAllTags()
    },[])

    useEffect(()=> {
      setDisplayed(posts)
      setQuery(getInitialQuery(searchParams))
    }, [posts])

    useEffect(()=> {
      setSearchParams(query)

      let finalPosts = filterProducts(posts , query.category);
      setDisplayed(finalPosts)

    }, [query])

    const tagHandler = (event) =>{
        const {tagName} = event.target;
        const category = event.target.innerText.toLowerCase();
        console.log(category)

        if(tagName !== "SPAN") return

        setQuery((query) => ({...query , category}))
    }

    return (
      <>
         <h4 className="AZ-section-title d-flex align-items-center gap-2"><Icon color="#6F49E8" size={20} icon="Tag2" />All Tags</h4>
          <div className="d-flex align-items-center flex-wrap gap-2">
              <div className="d-flex align-items-center justify-content-center w-100">
                  {!allTags.length && <Loader />}
              </div>
              <ul className="d-flex align-items-center flex-wrap gap-2" onClick={tagHandler}>
                  {allTags.map((singleTag) => (
                    <li key={singleTag.name} className={query.category == singleTag.name ? "activeTag" : null} >
                      <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center" > 
                        <span className="">{singleTag.name}  </span>
                        <p className="d-flex align-items-center gap-1 tag-number"><Icon color="#3D475C" size={13} icon="Note1" /> {singleTag.count}</p>
                      </Link>
                    </li>
                  ))}
              </ul>

              <div className="w-100">
                <div className="d-flex align-items-center justify-content-center w-100">
                  {!displayed.length && <p className="no-posts-found">No Posts Found</p>}
                </div>
                {displayed.map((post) => (
                    <PostCard key={post.articleId} data={post} />
                ))}
              </div>
          </div>
      </>
    )
  }
  
  export default Tags