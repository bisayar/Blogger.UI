import { useState } from "react";
// import ReactPaginate from "react-paginate";

import { usePosts } from "../context/PostContext"

import Loader from "../components/Loader"
import PostCard from "../components/PostCard"
import Pagination from "../components/Pagination";

  
function HomePage() {

    const posts = usePosts()
    const [currentItems, setCurrentItems] = useState(posts);
  
    return (
      <>
      
        {!currentItems.length && <Loader />}
        {currentItems.map((post) => (
            <PostCard key={post.articleId} data={post} />
        ))}

        <Pagination currentItems={currentItems} setCurrentItems={setCurrentItems} posts={posts} itemsPerPage={4} />

      </>
    );
}

export default HomePage
