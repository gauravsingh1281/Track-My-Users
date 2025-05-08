export default function ActionBtn({
  showActiveUser,
  onSetShowActiveUser,
  showRegisteredUser,
  onSetShowRegisteredUser,
  darkTheme,
}) {
  return (
    <>
      <div className="hidden sm:flex md:flex lg:flex my-6 justify-center items-center flex-col sm:flex-row md:flex-row lg:flex-row gap-4 sm:gap-10 md:gap-10 lg:gap-10 w-full">
        <button
          type="button"
          onClick={() => onSetShowRegisteredUser(!showRegisteredUser)}
          className={`px-4 py-2 w-1/2 sm:w-fit md:w-fit lg:w-fit font-medium ${
            showRegisteredUser
              ? darkTheme
                ? "text-white bg-[#FB6A55]"
                : "text-white bg-[#2A454E]"
              : "bg-[#FFC801] text-[#2A454E]"
          } font-medium rounded-2xl cursor-pointer active:scale-[90%] transition-all ease-in duration-100`}
        >
          View all registered users
        </button>
        <button
          type="button"
          onClick={() => onSetShowActiveUser(!showActiveUser)}
          className={`px-4 py-2 w-1/2 sm:w-fit md:w-fit lg:w-fit ${
            showActiveUser
              ? darkTheme
                ? "text-white bg-[#FB6A55]"
                : "text-white bg-[#2A454E]"
              : "bg-[#FFC801] text-[#2A454E]"
          } font-medium rounded-2xl cursor-pointer active:scale-[90%]  transition-all ease-in duration-100`}
        >
          Show active users
        </button>
      </div>
    </>
  );
}
