import { useEffect , useState } from "react"
import { Link } from "react-router-dom"

import api from "../services/config"
import Icon from "../font-icon/Icon"

function PopularTag() {
    const [tags , setTags] = useState([])
    const [activeTaqg , setActiveTaqg] = useState("")

    useEffect(() => {
        const fetchTags = async ()=>{
            try{
                setTags(await api.get('/articles/tags/populars'))
            }catch(error){
                console.log(error.message)
            }
        }
        fetchTags();
    } , [])


    return (
            <>
                <div className="sidebar-fixed d-none d-lg-block">
                    <div className="">
                        <h4 className="AZ-box-title d-flex align-items-center gap-1"><Icon color="#6f49e8" size={20} icon="Tag2" />Popular Tags</h4>
                        <ul className="d-flex align-items-center flex-wrap gap-2">
                            {tags.map((tag) =>(
                                <li key={tag.name} className={activeTaqg == tag.name ? "activeTag" : null} onClick={()=> {setActiveTaqg(tag.name)}}>
                                    <Link to={`/tags/category/${tag.name}`} className="AZ-tag-link d-flex align-items-center justify-content-center">{tag.name}</Link> 
                                </li>
                             ))}
                        </ul>
                        <div className="AZ-social d-flex align-items-center justify-content-evenly">
                            <Link to="#" className="d-flex align-items-center justify-content-center"><Icon color="#444" size={20} icon="twitter" /> </Link>
                            <Link to="#" className="d-flex align-items-center justify-content-center"><Icon color="#444" size={20} icon="youtube1" /></Link>
                            <Link to="#" className="email d-flex align-items-center justify-content-center"><Icon color="#444" size={20} icon="linkedin" /></Link>
                            <Link to="#" className="link d-flex align-items-center justify-content-center"><Icon color="#444" size={20} icon="luma" /></Link>
                        </div>
                        <p className="AZ-copyright text-center">All rights belong to Nabi Karampour</p>
                    </div>
                </div>
            </>
    )
}

export default PopularTag