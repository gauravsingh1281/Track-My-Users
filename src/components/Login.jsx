import loginIllustration from "../assets/images/login-img.jpg";
export default function login({
  userEmail,
  userPassword,
  onSetUserEmail,
  onSetUserPassword,
  onLogin,
  onSetToggleForm,
  toggleForm,
}) {
  return (
    <>
      <div className=" w-full lg:w-[80%] h-full lg:h-[520px] flex flex-col lg:flex-row justify-center items-start shadow-xl rounded-2xl overflow-hidden">
        <img
          className="h-full w-full lg:w-[60%] object-cover"
          src={loginIllustration}
          alt="login-illustration"
        />
        <div className="w-full lg:w-[40%] h-full  bg-white px-6 py-4 flex flex-col justify-center items-center gap-2">
          <h2 className="text-3xl mb-3">Welcome back!</h2>

          <form className="w-full" onSubmit={onLogin}>
            <label className="block text-base ">Email :</label>
            <input
              type="text"
              placeholder="Enter email"
              className="border outline-0 my-2 w-full rounded-md p-2 "
              value={userEmail}
              onChange={(e) => onSetUserEmail(e.target.value)}
              autoComplete="off"
            />
            <label className="block text-base ">Password :</label>
            <input
              type="password"
              placeholder="Enter password"
              className="border outline-0 my-2 w-full rounded-md p-2"
              value={userPassword}
              onChange={(e) => onSetUserPassword(e.target.value)}
              autoComplete="off"
            />

            <button
              type="submit"
              className="w-full bg-[#2C444E] my-3 text-white py-2 rounded-lg cursor-pointer"
            >
              Log In
            </button>
          </form>
          <div className="text-base ">
            <span className="text-gray-600">Don't have an account ? </span>
            <button
              type="button"
              onClick={() => onSetToggleForm(!toggleForm)}
              className="text-blue-500 cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
