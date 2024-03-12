import { useSelector } from "react-redux";
import {
  selectPostIds,
  getPostsStatus,
  getPostsError,
  //   fetchPosts,
} from "./postsSlice";
// import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  //   const dispatch = useDispatch();

  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  //   useEffect(() => {
  //     if (postStatus === "idle") {
  //       dispatch(fetchPosts());
  //     }
  //   }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId}></PostsExcerpt>
    ));
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    // content = orderedPosts.map((post) => (
    //   <PostsExcerpt key={post.id} post={post} />
    // ));
    console.log("content", content);
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
