import { useDataFetch } from "./useDataFetch";
export const DataFetching = () => {
  const { data, isLoading } = useDataFetch(
    "https://potterapi-fedeperin.vercel.app/en/characters"
  );
  return (
    <div>
      {isLoading ? (
        "loading......"
      ) : (
        <ul>
          {data.map((post, index) => (
            <li key={index}>
              {`${post.index+1}: `}
              {post.fullName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
