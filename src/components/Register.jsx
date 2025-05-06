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
}) {
  return (
    <>
      <div className="w-[300px] bg-white rounded-2xl px-6 py-4 flex flex-col justify-start items-center gap-2 shadow-xl">
        <h2 className="text-2xl">Sign Up</h2>
        <p className="text-sm">Let's get started!</p>
        {/* User Sign up form */}
        <form className="w-full" onSubmit={onRegisterFormSubmit}>
          <label className="block text-sm ">Full name :</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="border outline-0 my-1 w-full rounded-md px-2 "
            value={fullName}
            onChange={(e) => onSetFullName(e.target.value)}
            autoComplete="off"
          />
          <label className="block text-sm ">Email :</label>
          <input
            type="text"
            placeholder="Enter email"
            className="border outline-0 my-1 w-full rounded-md px-2"
            value={email}
            onChange={(e) => onSetEmail(e.target.value)}
            autoComplete="off"
          />
          <label className="block text-sm ">Password :</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border outline-0 my-1 w-full rounded-md px-2"
            value={password}
            onChange={(e) => onSetPassword(e.target.value)}
            autoComplete="off"
          />
          <label className="block text-sm ">Image :</label>
          <input
            type="text"
            value={image}
            className="border outline-0 my-1 w-full rounded-md px-2"
            onChange={(e) => onSetImage(e.target.value)}
            autoComplete="off"
          />
          <button
            type="submit"
            className="w-full bg-[#344564] my-3 text-white py-1 rounded-lg cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <div className="text-sm ">
          <span className="text-gray-600"> Already have an account ? </span>
          <button type="button" className="text-blue-500 cursor-pointer">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
