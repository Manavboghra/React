import useLocalStorage from "./useLocalStorage";

const SetUsername = () => {
const [name,setName] = useLocalStorage("username","")
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="enter username"
        onChange={(e) => {
         return setName(e.target.value);
        }}
      />
      <h1>Hello!!{name}</h1>
    </div>
  );
};

export default SetUsername;
