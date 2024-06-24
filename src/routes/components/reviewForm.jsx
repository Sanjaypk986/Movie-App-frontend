import axios from "axios";
import { useForm } from "react-hook-form";

export default function ReviewForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/reviews", data, { withCredentials: true });
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  console.log(watch("title")); // Watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-1/2 mx-auto"
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        className="border-2 p-2 mb-2"
        {...register("title", { required: true })}
      />
      {errors.title && <span>Invalid title</span>}
      
      <label htmlFor="description">Description</label>
      <textarea
        rows={10}
        type="text"
        className="border-2 p-2 mb-2"
        {...register("description", { required: true})}
      />
      {errors.description && <span>Invalid description</span>}

      <input className="border bg-blue-400 w-1/2 mx-auto my-3" type="submit" value={"Add Review"} />
    </form>
  );
}
