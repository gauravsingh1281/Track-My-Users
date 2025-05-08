import { IoMdClose } from "react-icons/io";

export default function ActionBtn({
  showActiveUser,
  onSetShowActiveUser,
  showRegisteredUser,
  onSetShowRegisteredUser,
  showMobileNav,
  onSetShowMobileNav,
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

      {/* Mobile action btn */}
      {showMobileNav && (
        <div className="sm:hidden md:hidden lg:hidden fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-50">
          <div className="bg-white px-1 py-16 rounded-xl shadow-xl w-[90%] max-w-md relative flex flex-col justify-center items-center gap-6">
            <button
              className="absolute top-3 right-3 font-bold text-black hover:text-[#FB6A55] cursor-pointer hover:scale-[90%] transition-all ease-in duration-100"
              onClick={() => onSetShowMobileNav(false)}
            >
              <IoMdClose className="text-[32px]" />
            </button>
            <button
              type="button"
              onClick={() => {
                onSetShowRegisteredUser(!showRegisteredUser);
                onSetShowMobileNav(false);
              }}
              className={`px-4 py-2 w-[80%]  text-base font-medium ${
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
              onClick={() => {
                onSetShowActiveUser(!showActiveUser);
                onSetShowMobileNav(false);
              }}
              className={`px-4 py-2 w-[80%]  text-base ${
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
        </div>
      )}
    </>
  );
}
