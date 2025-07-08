<<<<<<< HEAD
import { useSelector } from "react-redux";

const UseraName = () => {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return;
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
=======
const UseraName = () => {
  return (
    <div className="hidden text-sm font-semibold md:block">Mugisha Liad</div>
>>>>>>> 9a3e27e5f4a62ec5ca80e4a83f8e2c607e37569b
  );
};

export default UseraName;
