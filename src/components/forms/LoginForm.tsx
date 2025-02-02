import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { userLoginValidator } from "../../validators/user.login.validator.ts";

interface ILoginForm {
  userName: string;
  userPassword: string;
}

const LoginForm = () => {
  const { handleSubmit, register } = useForm<ILoginForm>({
    mode: "all",
    resolver: joiResolver(userLoginValidator),
  });

  const onSubmit = handleSubmit((formDataProps: ILoginForm) => {
    // console.log(formDataProps);

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formDataProps.userName,
        password: formDataProps.userPassword,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((userTokens) => {
        console.log(userTokens);
        localStorage.setItem("users", JSON.stringify(userTokens));
        // window.location.href = "auth/users";
      });
  });

  return (
    <>
      <form
        className={"w-[30%] bg-blue-400 p-8 flex flex-col gap-6 mt-12 "}
        onSubmit={onSubmit}
      >
        <input
          className={"input"}
          type="text"
          placeholder={"login"}
          {...register("userName")}
        />
        <input
          className={"input"}
          type="text"
          placeholder={"password"}
          {...register("userPassword")}
        />
        <button className={"bg-blue-700 text-white p-2"}>Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
