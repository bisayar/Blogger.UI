import { Route, Routes } from 'react-router-dom'

import Layout from './layout/Layout'
import About from './pages/About'
import Archive from './pages/Archive'
import Tags from './pages/Tags'
import Subscribe from './pages/Subscribe'
import PageNotFound from './pages/404'
import HomePage from './pages/HomePage'
import Post from './pages/Post'
import PostProvider from './context/PostContext'
import Category from './pages/Category'

function App() {

  return (
    <>
      <Layout>
        <PostProvider>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/archive' element={<Archive />}></Route>
            <Route path='/tags' element={<Tags />}></Route>
            <Route path='/tags/category/:id' element={<Category />}></Route>
            <Route path='/subscribe' element={<Subscribe />}></Route>
            <Route path='/archive/:id' element={<Post />}></Route>
            <Route path='/*' element={<PageNotFound />}></Route>
          </Routes>
        </PostProvider>
      </Layout>
    </>
  )
}

export default App
