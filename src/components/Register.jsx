import signupIllustration from "../assets/images/signup-img.jpg";
export default function Register({
  fullName,
  email,
  password,
  image,
  onSetFullName,
  onSetImage,
  onSetEmail,
  onSetPassword,
  onRegisterFormSubmit,
  onSetToggleForm,
  toggleForm,
}) {
  return (
    <>
      <div className="w-[80%] h-[520px] flex flex-row justify-center items-start shadow-xl rounded-2xl overflow-hidden">
        <img
          className="h-full w-[60%] object-cover"
          src={signupIllustration}
          alt="signup-illustration"
        />
        <div className="w-[40%] h-full bg-white px-6 py-4 flex flex-col justify-center items-center gap-3 ">
          <h2 className="text-2xl">Let's get started!</h2>
          <form className="w-full" onSubmit={onRegisterFormSubmit}>
            <label className="block text-base ">Full name :</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="border outline-0 my-2 w-full rounded-md p-2 "
              value={fullName}
              onChange={(e) => onSetFullName(e.target.value)}
              autoComplete="off"
            />
            <label className="block text-base ">Email :</label>
            <input
              type="text"
              placeholder="Enter email"
              className="border outline-0 my-2 w-full rounded-md p-2"
              value={email}
              onChange={(e) => onSetEmail(e.target.value)}
              autoComplete="off"
            />
            <label className="block text-base ">Password :</label>
            <input
              type="password"
              placeholder="Enter password"
              className="border outline-0 my-2 w-full rounded-md p-2"
              value={password}
              onChange={(e) => onSetPassword(e.target.value)}
              autoComplete="off"
            />
            <label className="block text-base ">Image :</label>
            <input
              type="text"
              value={image}
              className="border outline-0 my-2 w-full rounded-md p-2"
              onChange={(e) => onSetImage(e.target.value)}
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-full bg-[#2A454E] my-3 text-white py-2 rounded-lg cursor-pointer"
            >
              Sign Up
            </button>
          </form>
          <div className="text-base ">
            <span className="text-gray-600"> Already have an account ? </span>
            <button
              type="button"
              onClick={() => onSetToggleForm(!toggleForm)}
              className="text-blue-500 cursor-pointer"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
