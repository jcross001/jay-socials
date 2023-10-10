import "./posts.scss";
import { useQuery } from "react-query";
import { makeReq } from "../../axios";
import Post from "../post/Post";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery("posts", () =>
    makeReq.get(`/posts${userId ? `?userId=${userId}` : ""}`).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
