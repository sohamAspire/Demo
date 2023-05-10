import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
export default function Login() {
  const { register, errors, handleSubmit, reset } = useForm({});
  const [user, setuser] = useState();
  const router = useRouter();
  const path = router.asPath.split("?")[0];
  const id = path.split("/")[2];
  console.log(id);
  const onSubmit = async (data) => {
    const data1 = { data: data };
    console.log(data1);
    await axios
      .patch(`http://localhost:3001/login/${id}`)
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          change your Password
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Enter New Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="confrim password"
              className="block text-sm font-semibold text-gray-800"
            >
              confrim password
            </label>
            <input
              type="password"
              {...register("confrim password")}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
