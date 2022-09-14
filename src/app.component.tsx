/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SinglePostPage from './components/SinglePost';
import PostForm from './components/PostForm';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import Post from './components/Post';

const App: FC = (): ReactElement => {
  // const [activePostId, setActivePostId] = React.useState('');
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <Router>
          <nav>
            <Link to="/" className="mx-2 bg-blue-400">
              Home
            </Link>
            <Link to="/createPost" className="bg-blue-400">
              Create New Post
            </Link>
          </nav>
          <Routes>
            <Route
              element={
                <PostList
                // setActivePostId={setActivePostId}
                // activePostId={activePostId}
                />
              }
              path="/"
            />
            <Route element={<SinglePostPage />} path="/post/:id" />
            <Route element={<UpdatePost />} path={'updatePost/:id'} />
            <Route element={<CreatePost />} path={'createPost/'} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;
