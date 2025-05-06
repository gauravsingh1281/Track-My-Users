export default function ActionBtn({
  showActiveUser,
  onSetShowActiveUser,
  showRegisteredUser,
  onSetShowRegisteredUser,
}) {
  return (
    <>
      <div className="flex my-6 justify-center items-center flex-row gap-10">
        <button
          type="button"
          onClick={() => onSetShowRegisteredUser(!showRegisteredUser)}
          className={`px-4 py-2 ${
            showRegisteredUser
              ? "text-white bg-[#2A454E]"
              : " bg-[#FFC801] text-[#2A454E]"
          } font-medium rounded-2xl cursor-pointer active:scale-[90%]  transition-all ease-in duration-100`}
        >
          View all registered users
        </button>
        <button
          type="button"
          onClick={() => onSetShowActiveUser(!showActiveUser)}
          className={`px-4 py-2 ${
            showActiveUser
              ? "text-white bg-[#2A454E]"
              : " bg-[#FFC801] text-[#2A454E]"
          } font-medium rounded-2xl cursor-pointer active:scale-[90%]  transition-all ease-in duration-100`}
        >
          Show active users
        </button>
      </div>
    </>
  );
}
