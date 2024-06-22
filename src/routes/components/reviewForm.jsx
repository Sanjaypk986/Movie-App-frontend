import axios from "axios";
import { useForm } from "react-hook-form";

export default function ReviewForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/auth/login", data, {withCredentials: true})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-1/2 mx-auto"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <textarea rows={10}
        type="text"
        className="border-2 p-2 mb-2"
        {...register("review", {
          required: true, maxLength:50
        })}
      />


      <input type="submit" value={"Add Review"} />
    </form>
  );
}
