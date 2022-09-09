/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SinglePostPage from './components/singlePost';
import AddPostForm from './components/createPostForm';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import PostList from './components/postList';

const App: FC = (): ReactElement => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="grow">
      <Router>
        <nav>
          <Link to="/" className="mx-2 bg-blue-400">
            Home
          </Link>
          <Link to="/addPost" className="bg-blue-400">
            Create New Post
          </Link>
        </nav>
        <Routes>
          <Route element={<PostList />} path="/" />
          <Route element={<SinglePostPage />} path={`singlePost/*`} />
          <Route element={<AddPostForm />} path={'addPost/'} />
          {/* <Route element={<UpdatePost />} path={'updatePost/:id'} /> */}
          {/* <Route element={<PostList />} path={`updatePostPage/`} /> */}
        </Routes>
      </Router>
    </main>
    <Footer />
  </div>
);

export default App;
