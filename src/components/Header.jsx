import { AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Header({
  darkTheme,
  onSetDarkTheme,
  showMobileNav,
  onSetShowMobileNav,
}) {
  return (
    <>
      <div className="flex justify-between sm:justify-center md:justify-center lg:justify-center items-center w-full relative mb-8 lg:mb-0  md:mb-0 sm:mb-0 ">
        <h1
          className={`${
            darkTheme ? "text-[#FFC801]" : "text-[#2C444E]"
          } text-3xl sm:text-[48px] md:text-[52px] lg:text-[52px] mb-2`}
        >
          Track My Users
        </h1>
        <div
          onClick={() => onSetDarkTheme(!darkTheme)}
          className="absolute right-[38px] lg:right-1 md:right-1 sm:right-1 text-3xl sm:text-[35px] md:text-[40px] lg:text-[40px] cursor-pointer active:scale-[90%]  transition-all ease-in duration-100"
        >
          {darkTheme ? (
            <MdLightMode className="text-[#FFC801]" />
          ) : (
            <MdDarkMode className="text-[#2C444E]" />
          )}
        </div>

        <AiOutlineMenu
          onClick={() => onSetShowMobileNav(!showMobileNav)}
          className={`block sm:hidden lg:hidden md:hidden text-3xl ${
            darkTheme ? "text-white" : "text-[#2C444E]"
          } `}
        />
      </div>

      <p
        className={`mt-2 hidden sm:block md:block lg:block sm:text-[18px] md:text-[21px] lg:text-[21px] ${
          darkTheme ? "text-white" : "text-[#FB6A55]"
        }  font-medium`}
      >
        Manage users effortlessly — from sign-up to sign-out.
      </p>
    </>
  );
}
