import { useMatch, useParams, useLocation } from "react-router-dom";

const Users = () => {
  const match = useLocation();
  console.log(match);
  return <div>{match}</div>;
};

export default Users;
