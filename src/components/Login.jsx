export default function login({
  userEmail,
  userPassword,
  onSetUserEmail,
  onSetUserPassword,
  onLogin,
  setShowRegister,
  registerForm,
}) {
  return (
    <>
      <div className="w-[300px]  bg-white rounded-2xl px-6 py-4 flex flex-col justify-start items-center gap-2 shadow-xl">
        <h2 className="text-2xl">Login</h2>
        <p className="text-sm">Welcome back!</p>
        {/* User Sign up form */}
        <form className="w-full" onSubmit={onLogin}>
          <label className="block text-sm ">Email :</label>
          <input
            type="text"
            placeholder="Enter email"
            className="border outline-0 my-1 w-full rounded-md px-2"
            value={userEmail}
            onChange={(e) => onSetUserEmail(e.target.value)}
            autoComplete="off"
          />
          <label className="block text-sm ">Password :</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border outline-0 my-1 w-full rounded-md px-2"
            value={userPassword}
            onChange={(e) => onSetUserPassword(e.target.value)}
            autoComplete="off"
          />

          <button
            type="submit"
            className="w-full bg-[#344564] my-3 text-white py-1 rounded-lg cursor-pointer"
          >
            Log In
          </button>
        </form>
        <div className="text-sm ">
          <span className="text-gray-600">Don't have an account ? </span>
          <button
            type="button"
            onClick={() => setShowRegister(!registerForm)}
            className="text-blue-500 cursor-pointer"
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
