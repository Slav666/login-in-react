/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SinglePostPage from './components/SinglePost';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

const App: FC = (): ReactElement => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="grow">
        <Router>
          <nav className="m-2 flex justify-center">
            <Link
              className="m-2 rounded-md bg-sky-500 p-2 hover:bg-sky-800"
              to="/"
            >
              Home
            </Link>
            <Link
              className="m-2 rounded-md bg-sky-500 p-2 hover:bg-sky-800"
              to="/createPost"
            >
              Create New Post
            </Link>
          </nav>
          <Routes>
            <Route element={<PostList />} path="/" />
            <Route element={<SinglePostPage />} path="/posts/:id" />
            <Route element={<UpdatePost />} path="updatePost/:id" />
            <Route element={<CreatePost />} path="createPost/" />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;
