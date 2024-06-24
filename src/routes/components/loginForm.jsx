import axios from "axios";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLogginStatus } from "../../features/login/loginSlice";


export default function LoginForm () {
  const dispatch = useDispatch(); 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios.post("http://localhost:3000/auth/login", data,{withCredentials:true})
    .then((response) => {
      dispatch(changeLogginStatus(true))
      navigate('/');
    })
    .catch((error) => {
      dispatch(changeLogginStatus(true))
      console.log(error)});
  };


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2 mx-auto">
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="email">Email</label>
      <input type="email"  className="border-2 p-2 mb-2" {...register("email",{ required: true ,pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, })} />
      {errors.email && <span>Invalid email</span>}

        <label htmlFor="password">Password</label>
      <input type="password" className="border-2  mb-2" {...register("password", { required: true ,pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>Invalid password</span>}


      <input type="submit" value={"Login"} />
    </form>
  )
}