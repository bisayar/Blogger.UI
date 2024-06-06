import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import book from '../img/pictuer-books.png'
import api from "../services/config"
import Icon from "../font-icon/Icon"

function Events() {

    const [popularPosts , setPopularPosts] = useState([])

    useEffect( () => {
        const fetchPopularPost = async () => {
             try{
                setPopularPosts(await api.get('/articles/populars'))
             }catch(error){
                console.log(error.message)
            }
        }

        fetchPopularPost();

    } , [])

    return (
    <>
            <div className="AZ-box AZ-sidebar-menu mb-3 d-none d-lg-block">
                <h4 className="AZ-box-title d-flex align-items-center gap-1"><Icon color="#6f49e8" size={20} icon="Notebook" /> Events </h4>
                <div className="book-img AZ-img-container">
                    <div className="AZ-img-container-inner AZ-img-cover">
                        <img src={book} alt="" />
                    </div>
                </div>
                <h4 className="book-name"> Live Coding  </h4>
                <p className="book-desc"> Practical aspects of system design using .NET </p>
                <Link to="https://lu.ma/thisisnabi" className="AZ-primary-btn see-book-btn w-100"> My Calendar </Link>

                <div>
                    <h4 className="AZ-box-title d-flex align-items-center gap-1"><Icon color="#6f49e8" size={20} icon="Note" />Popular Posts</h4>
                    <ul className="list-book-specifications">
                         {popularPosts.map((popularPost) => (
                            <li key={popularPost.articleId}><Link to={`/post/${popularPost.articleId}`}> {popularPost.title} </Link></li>
                        ))} 
                    </ul>
                </div>
            </div>
    </>
    )
}

export default Events