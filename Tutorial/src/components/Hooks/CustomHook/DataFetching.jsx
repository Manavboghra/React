import { useDataFetch } from "./useDataFetch";
export const DataFetching = () => {
  const { data, isLoading } = useDataFetch(
    "https://meowfacts.herokuapp.com/?count=3"
  );
  return (
    <div>
      {isLoading ? (
        "loading......"
      ) : (
        <ul>
    
          {data.map((post, index) => (
            <li key={index}>
              {post}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
