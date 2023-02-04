import React, { memo, useState } from "react";
import { connect } from "react-redux";
import Input from "./Input";
import Select from "./Select";
import Text from "./Text";

const AddPost = memo((props) => {
  
  const [postObj, setPostObj] = useState({});
  const { title = '', post = '', category = '' } = postObj;
  const { categories = [] } = props;
  const handleChange = (e) => {
    setPostObj({...postObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(postObj));
    // setPostObj({});
  }

  const handleSelectChange = (val) => {
    setPostObj({...postObj, 'category': val });
  }

  return (
    <div className="add-post">
      <h2>New Post</h2>
      <div className="add-post-form">
        <Input required type="text" label="Title" value={title} name="title" onChange={handleChange} />
        <Text required label="Type in your thoughts in 200 words or less" value={post} onChange={handleChange} name="post" />
        <span className="char-count">{post.length} of 200 Characters</span>
        <Select required label="Select a category" options={categories} name="category" onChange={handleSelectChange} value={category} />
        <button id="add-post-btn" onClick={handleSubmit}>+ Add</button>
      </div>
    </div>
  );
});

const mapStateToProps = (state) => ({
  categories: state.posts.categories
});

export default connect(mapStateToProps)(AddPost);
