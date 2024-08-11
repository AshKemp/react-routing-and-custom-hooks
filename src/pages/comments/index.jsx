import useFetch from "../../hooks/use-fetch";

function CommentsList() {
  const { data, loading } = useFetch("https://dummyjson.com/comments");
  if (loading) return <h1>Fetching comments!! Please wait.</h1>;

  return (
    <div>
      <h1>Comments List Page</h1>
      <ul>
        {data?.comments?.length > 0
          ? data?.comments.map((comment) => (
              <div>
                <label>{comment?.body}</label>
                <p>{comment?.likes}</p>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default CommentsList;
