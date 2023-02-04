import React, { memo } from "react";
import moment from "moment";
import DeletePostButton from "./DeletePostButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Post = memo((props) => {
  const { user = {}, post = {} } = props;
  const formatedTimestamp = moment(post.timestamp).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <div className="post">
      <h1>{post.title}</h1>
      { user?.id && user?.id === post?.author?.id && <DeletePostButton />}
      <h3>
        by <Link to={`/author/${post.author.id}`}>{post.author.name}</Link> |
        <Link to={`/category/${post.categories.id}`}>
          {post.categories.title}
        </Link>{" "}
        | Posted on {formatedTimestamp}
      </h3>
      <p>{post.content}</p>
    </div>
  );
});

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps)(Post);
