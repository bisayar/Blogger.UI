import { useState } from "react"
import { Link } from "react-router-dom"

import Icon from "../font-icon/Icon"
import Menu from "../components/Menu"
import Events from "../components/Events"
import PopularTag from "../components/PopularTag"

function Layout({ children }) {
    
    const [sidebar , setSidebar] = useState(false)
    const [search , setSearch] = useState("")
    // const [query , setQuery] = useState({})

    const sidebarHandler = ()=> {
        setSidebar(!sidebar)
        console.log(sidebar)
    }

    const searchHandler = () =>{
        console.log("search")
        // setQuery((query) => ({...query , search}))
    }

    return (
        <>
            <div className="overlay" style={{display : sidebar ? "block" : "none"  }} onClick={() => {setSidebar(false)}}></div>
            {/* heder */}
            <header className="AZ-header d-lg-none">
                <div className="container">
                    <nav className="navbar d-flex align-items-center justify-content-between p-0">
                        <button className="hamburger-menu" onClick={sidebarHandler}>
                            <Icon color="#444" size={20} icon="Hamburger_LG" />
                        </button>
                        <h2 className="header-name"> Nabi Karampour  </h2>
                        <button type="button" className="search-btn" ><Icon color="#444" size={20} icon="Search_Magnifying_Glass" /></button>
                    </nav>
                    {/* search */}
                    <div className="search-header">  
                        <div className="container h-100">
                            <div className="search-header-container d-flex align-items-center justify-content-between h-100 py-2">
                                <div className="d-flex align-items-center gap-2 flex-grow-1">
                                    <button type="button"><Icon color="#444" size={20} icon="Search_Magnifying_Glass" /></button>
                                    <input type="text" name="" id="" placeholder="search..." className="flex-grow-1" />
                                </div>
                                <Link to="#" className="close-search-wrapper d-flex align-items-center justify-content-center"><Icon color="#444" size={20} icon="Close_SM" /></Link>
                            </div>
                            {/* search tags */}
                            {/* <div className=" py-3">
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <a href="#" className="AZ-tag-link d-flex align-items-center justify-content-center"> HTML </a>
                                    <a href="#" className="AZ-tag-link d-flex align-items-center justify-content-center">CSS</a>
                                    <a href="#" className="AZ-tag-link d-flex align-items-center justify-content-center">ASP</a>
                                    <a href="#" className="AZ-tag-link d-flex align-items-center justify-content-center">Bootstrap</a>
                                    <a href="#" className="AZ-tag-link d-flex align-items-center justify-content-center">PHP</a>
                                    <a href="#" className="AZ-tag-link d-flex align-items-center justify-content-center">Sass</a>
                                    <a href="#" className="AZ-tag-link d-flex align-items-center justify-content-center">Javascript</a>
                                    <a href="#" className="AZ-tag-link d-flex align-items-center justify-content-center">Js</a>
                                    <a href="#" className="AZ-tag-link d-flex align-items-center justify-content-center">CSS</a>
                                </div>
                            </div> */}
                            {/* search result */}
                            {/* <div className="search-result py-3">
                                <ul>
                                    <li>
                                        <a href="#" className="search-result-link d-flex align-items-center ">Padding for Overlaid Structs</a>
                                    </li>
                                    <li>
                                        <a href="#" className="search-result-link d-flex align-items-center ">Padding for Overlaid Structs</a>
                                    </li>
                                    <li>
                                        <a href="#" className="search-result-link d-flex align-items-center ">Padding for Overlaid Structs</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>
            <section className="AZ-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Menu sidebar={sidebar}  />
                            <Events />
                        </div>
                        <div className="col-lg-6">
                            <form action="">
                                <div className="AZ-search-wrapper d-none d-lg-flex align-items-center gap-3">
                                    <button type="button" onClick={searchHandler}><Icon color="#444" size={20} icon="search-lg" /></button>
                                    <input type="search" placeholder="search..." value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase().trim()) }} />
                                </div>
                            </form>
                            {children}
                        </div>
                        <div className="col-lg-3">
                            <PopularTag />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Layout