import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addOneReview } from "../../features/review/reviewSlice";

export default function ReviewForm({movieId}) {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data, movie : movieId
    }
    try {
      const response = await axios.post("http://localhost:3000/reviews", payload, { withCredentials: true });
      console.log('Response:', response);
      dispatch(addOneReview(response.data))
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

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
