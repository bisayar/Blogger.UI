import { Link } from "react-router-dom"
import Icon from "../font-icon/Icon"
import { formatDate } from '../helpers/helpers'

function PostCard({data}) {
    
    const {articleId , title , body , summary , tags , readOnMinutes , publishedOnUtc} = data

    return (
        <>
            <div className="AZ-post-card">
                <Link to={`/archive/${articleId}`}><h4 className="post-card-title">{title} </h4></Link>
                <p className="post-card-text">{summary}</p>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                    <p className="post-details d-flex align-items-center gap-1 ">
                        <Icon color="#444" size={20} icon="Calendar" />
                        {formatDate(publishedOnUtc)}
                    </p>
                    <p className="post-details d-flex align-items-center gap-1 ">
                        <Icon color="#444" size={20} icon="Clock" />
                        {readOnMinutes} 
                    </p>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <Icon color="#444" size={20} icon="Tag1" />
                        {tags.map((t , index) => 
                            <p key={index} className="post-details post-details_tag d-flex align-items-center gap-1 ">
                                {t}
                            </p>    
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard