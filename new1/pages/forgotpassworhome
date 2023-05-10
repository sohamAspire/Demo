import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Forgotpassword = () => {
  const router = useRouter();
  // const router = useRouter();

  const [user, setuser] = useState();
  const { register, errors, handleSubmit, reset } = useForm({});
  const onSubmit = async (data) => {
    console.log(data.email);
    await axios
      .get(`http://localhost:3001/login?data.Username=${data.email}`)
      .then((result) => {
        console.log(result.data[0].data.password);
        setuser(result.data[0]);
        console.log(result.data[0].id);
        // console.log(router.query);
      });
  };
  if (user) {
    router.push({
      pathname: `/forgotpassword/${user.id}`,
      // query: { keyword: 'this way' },  
  });
  } else {
    console.log("error");
  }
  return (
    <container className="mt-5 w-50" bg="secondary">
      <div border="info" className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter email"
          />
          <button type="submit" className="mx-2">
            Submit
          </button>
        </form>
      </div>
    </container>
  );
};

export default Forgotpassword;
