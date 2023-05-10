import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Divider } from "primereact/divider";
import { Password } from "primereact/password";
import * as yup from "yup";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
export default function Home() {
  const schema = yup.object().shape({
    password: yup
      .string()
      .min(12)
      .max(20)
      // .required("Please Enter your password")
      .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(/^(?=.*[!@#%&_-])/, "Must contain at least one special character"),
  });
  const { register, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [value, setValue] = useState("");
  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
    <>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li className={value.match(/[a-z]/) ? "text-green-700" : "text-white"}>
          {" "}
          {value.match(/[a-z]/) ? (
            <AiFillCheckCircle className={`text-green-700 m-2 inline`} />
          ) : null}{" "}
          At least one lowercase
        </li>
        <li className={value.match(/[A-Z]/) ? "text-green-700" : "text-white"}>
          {value.match(/[A-Z]/) ? (
            <AiFillCheckCircle className={`text-green-700 m-2 inline`} />
          ) : null}
          At least one uppercase
        </li>
        <li className={value.match(/[0-9]/) ? "text-green-700" : "text-white"}>
          {value.match(/[0-9]/) ? (
            <AiFillCheckCircle className={`text-green-700 m-2 inline`} />
          ) : null}
          At least one numeric
        </li>
        <li
          className={value.match(/[!@#%&]/) ? "text-green-700" : "text-white"}
        >
          {value.match(/[!@#%&]/) ? (
            <AiFillCheckCircle className={`text-green-700 m-2 inline`} />
          ) : null}
          Minimum 12 characters
        </li>
      </ul>
    </>
  );
  const onSubmit = (data) => {
    console.log({ data });
    console.log(errors);
    // reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Password
          value={value}
          onChange={(e) => setValue(e.target.value)}
          header={header}
          footer={footer}
        ></Password>
        {errors?.password && (
          <p role="alert" className="text-red-700">
            {errors?.password.message}
          </p>
        )}
        <button type="submit" className=" mx-2">
          submit
        </button>
      </form>
    </>
  );
}
