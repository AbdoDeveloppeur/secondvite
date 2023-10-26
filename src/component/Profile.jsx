import { useSelector } from "react-redux/es/hooks/useSelector";

const Profile = () => {
  const data = useSelector((state) => {
    state.usersRed;
  });
  console.log(data);

  return (
    <>
      <h2>dd</h2>
    </>
  );
};

export default Profile;
