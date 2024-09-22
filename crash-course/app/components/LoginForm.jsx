"use client"
import { useRouter } from "next/navigation";
import { login } from "../actions";

const LoginForm = () => {
    const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const res = await login(formData);

      if (!!res.error) {
        console.log(res.error);
      }else{
        router.push("/")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="flex gap-5">
        <label htmlFor="email">Email Address</label>
        <input
          className="border rounded"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex gap-5">
        <label htmlFor="password">Password</label>
        <input
          className="border rounded"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button className="bg-green-400 py-1 px-2 rounded" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
