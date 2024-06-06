import { useEffect , useState } from "react"
import api from "../services/config"
import Icon from "../font-icon/Icon"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

function Archive() {
      const [archive , setArchive] = useState([])

      useEffect(()=>{
         const fetchArchive = async () => {
            try{
              setArchive(await api.get("/articles/archive"))
            }catch(error){
              console.log(error.message)
            }
         }

         fetchArchive();
      } , [])

      return (
          <>

            {!archive.length && <Loader />}
            {
              archive.map((item , index) => (
                <div className="history" key={index}>
                    <div className="history-head d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                            <span className="circle">
                                <span className="circle-inner"></span>
                            </span>
                            <h2 className="history-title"> {item.year} {item.month} </h2>
                        </div>
                        <div className="line"></div>
                        <p className="history-number d-flex align-items-center gap-1"><Icon color="#444" size={20} icon="Note" />{item.articles.length} Post</p>
                    </div>
                    <ul className="history-list">
                        {item.articles.map((article) => (
                          <li className="d-flex align-items-center gap-2" key={article.articleId}>
                            <span className="history-list_number d-inline-flex">{article.day}</span>
                            <Link to={`/archive/${article.articleId}`} className="history-list_link">{article.title}</Link>
                          </li>
                        ))}
                    </ul>
                </div>
              ))
            }
          </>
      )
}
  
export default Archive