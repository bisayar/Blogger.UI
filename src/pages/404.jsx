import Icon from "../font-icon/Icon"
// import PostCard from "../components/PostCard"

function PageNotFound() {
      return (
          <>
              <div className="box-404 d-flex align-items-center justify-content-center flex-column">
                  <Icon color="#6F49E8" size={100} icon="Note_Search" />
                  <h1 className="box-404-title text-center">Oops,Search Topic Not Found </h1>
              </div>

              {/* <h2 className="AZ-section-title">Popular Post</h2>
              <div className="w-100">
                    <PostCard />
              </div> */}

              {/* <h3 className="AZ-section-title">Last Post</h3>
              <div className="w-100">
                  <PostCard />
              </div> */}
          </>
      )
}
  
export default PageNotFound