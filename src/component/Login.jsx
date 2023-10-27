import { useForm } from "react-hook-form"; // import react-hook-forms //
import { DevTool } from "@hookform/devtools"; // import package devtools Hook form //

const Login = () => {
  const numbers = Array.from({ length: 43 }, (_, index) => index + 18); //generate age
  // **create state users //

  // ** Destructer package use form ** //
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  // func to send data //
  const submit = (data) => {
    console.log(data);
  };

  // **Validate space Custome validation** //
  const validateNoSpaces = (value) => {
    if (/\s/.test(value)) {
      return "Username cannot contain spaces";
    }
    return true;
  };

  return (
    <div className="container">
      <h2 className="text-center">Cretae New a Account</h2>
      <form
        onSubmit={handleSubmit(submit)}
        noValidate
        className="d-flex flex-column gap-1"
      >
        <label className="text-dark fs-3" htmlFor="FullName">
          FullName
        </label>
        <input
          id="FullName"
          type="text"
          {...register("name", {
            required: { value: true, message: "fields is required " },
            minLength: { value: 4, message: "3 characters above" },
            maxLength: { value: 8, message: "max 8 char pleas" },
            validate: validateNoSpaces,
          })} //**Name and Options**
        />

        {errors.name && (
          //**Check Errors in fields**//
          <strong className="alert alert-dismissible alert-danger">
            {errors.name.message}
          </strong>
        )}

        <label className="text-dark fs-3" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email Format address",
            },
          })}
        />
        {errors.email && (
          <strong className="alert alert-dismissible alert-danger">
            {errors.email.message}
          </strong>
        )}
        <label className="text-dark fs-3" htmlFor="country">
          Select your Country :
        </label>
        <select id="country" {...register("country")}>
          <option value="MA">Maroc</option>
          <option value="EG">EGYPTE</option>
          <option value="CN">CANADA</option>
        </select>
        <label className="text-dark fs-3" htmlFor="age">
          Select your age:
        </label>
        <select
          name="age"
          id="age"
          {...register("age", {
            required: { value: true, message: "age is required" },
          })}
        >
          <option value="">-- Select Age --</option>
          {numbers.map((number, index) => (
            <option key={index} value={number}>
              {number}
            </option>
          ))}
        </select>
        {errors.age && (
          <div className="alert alert-dismissible alert-danger">
            <strong>{errors.age.message}</strong>
          </div>
        )}
        <label className="text-dark fs-3" htmlFor="password">
          Paasword
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
        />
        {errors.password && (
          <strong className="alert alert-dismissible alert-danger">
            {errors.password.message}
          </strong>
        )}
        <label className="text-dark fs-3" htmlFor="file">
          Select a file:
        </label>
        <input
          multiple
          type="file"
          name="file"
          id="file"
          accept=".jpg, .png, .pdf"
          {...register("image", {
            required: { value: true, message: "image is required" },
          })}
        />
        {errors.image && (
          <div className="alert alert-dismissible alert-danger">
            <strong>{errors.image.message}</strong>
          </div>
        )}
        <input className="btn btn-primary w-25 mx-auto mt-2 " type="submit" />
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Login;
