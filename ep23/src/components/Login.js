import React, { useState } from "react";
import {z} from "zod"
const loginSchema = z.object({
	email:z.string().email('invalid email address'),
	password:z.string().min(6,'password must be atleast 6 characters long')
})

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error,setError] = useState({})
  //    const [email,setEmail] = useState("")
  //    const [password,setPassword] = useState("")
  const changeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
	setFormData({...formData,[name]: value})
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
	const result = loginSchema.safeParse(formData)
	if(!result.success){
		const errrorField = result.error.formErrors.fieldErrors
		setError(errrorField)
		console.log(error)
		return;
	}
    console.log("Email - ", formData.email);
    console.log("Password - ", formData.password);
  };


  return (
    <div className="flex w-full h-[80vh] justify-center items-center bg-gray-400">
      <form
        onSubmit={SubmitHandler}
        className="border border-black m-4 px-6 py-2 flex flex-col gap-5 w-[30%] rounded-2xl"
      >
        <input
          name="email"
          value={formData.email}
          onChange={changeHandle}
          className="border border-black px-4 py-2 rounded-2xl"
          type="email"
          placeholder="Email"
        />
		<span className="text-xs text-red-700">{error.email}</span>
        <input
          name="password"
          value={formData.password}
          onChange={changeHandle}
          className="border border-black px-4 py-2 rounded-2xl"
          type="password"
          placeholder="password"
        />
		<span className="text-xs text-red-700">{error.password}</span>
        <button className="border bg-blue-900 rounded-2xl">Login</button>
      </form>
    </div>
  );
};

export default Login;
