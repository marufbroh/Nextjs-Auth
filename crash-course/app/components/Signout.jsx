import { doSignOut } from "../actions";

const Signout = () => {
 return (
 <form action={doSignOut}>
    <button className="p-2 bg-red-500 rounded" type="submit">Sign Out</button>
 </form>
 )
};

export default Signout;