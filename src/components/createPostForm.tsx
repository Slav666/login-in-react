import React, { ChangeEvent, useState, useEffect } from 'react';

// const defaultFormValues = {
//   postOwnerId: 1,
//   postCreatedDate:

// };

const AddPostForm = () => {
  return (
    <form>
      <label className="mx-2">Add post title</label>
      <input
        className="bg-blue-500"
        autoFocus
        name=" post title"
        placeholder="add post title"
        type="text"
      />
      <label className="mx-2">Add post content</label>
      <input
        className="bg-blue-500"
        autoFocus
        name="post content"
        placeholder="add post content"
        type="text"
      />
      <button
        aria-label="Add Item"
        className="mx-4 rounded bg-sky-500 py-2 px-4 hover:bg-cyan-600"
        type="submit"
      >
        Save Post
      </button>
    </form>
  );
};

export default AddPostForm;
