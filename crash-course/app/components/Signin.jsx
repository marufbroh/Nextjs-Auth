import { doSignIn } from "../actions";

const Signin = () => {
  return (
    <form action={doSignIn}>
      <button className="p-2 bg-green-500 rounded" type="submit">
        Sign In with google
      </button>
    </form>
  );
};

export default Signin;
