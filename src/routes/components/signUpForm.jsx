import axios from "axios";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/users", data)
    .then(() => {
      console.log("signup");
    })
    .catch((error) => console.log(error));
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 p-8 ">
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="name">Name</label>
      <input
        {...register("name", { required: true, maxLength: 20 })}
        className="border-2 mb-2"
      />
        {errors.name && <span>Please check the field</span>}
      <label htmlFor="email">Email</label>
      <input
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        className="border-2 mb-2"
      />
      {errors.email && <span>Please check the field</span>}

      <label htmlFor="pssword">Password</label>
      <input
        {...register("password", {
          required: true,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        })}
        className="border-2 mb-2"
      />
      {errors.password && <span>Please check the field</span>}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input type="submit" />
    </form>
  );
}
