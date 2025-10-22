import { useForm } from "react-hook-form";

type FormInputs = { email: string; password: string };

export const FormsPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "uncorreo@fake.com",
      password: "1234567",
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log("entrando al evento onSubmit");
    console.log({ myForm });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Formularios</h3>
      <div className="flex flex-col space-y-2 w-[500px]">
        <input
          type="email"
          placeholder="email"
          className="border border-gray-300 p-2 rounded-xl"
          {...register("email", { required: true })}
        ></input>

        <input
          type="password"
          placeholder="password"
          className="border border-gray-300 p-2 rounded-xl"
          {...register("password", { required: true })}
        ></input>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-xl">
          Login
        </button>
      </div>
    </form>
  );
};
