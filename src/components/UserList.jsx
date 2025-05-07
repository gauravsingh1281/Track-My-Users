import { CiMail } from "react-icons/ci";
import { MdDelete, MdLogout } from "react-icons/md";
import { FiEye } from "react-icons/fi";
export default function UserList({
  userData,
  listMode,
  selectedUser,
  onSetSelectedUser,
  onDeleteUser,
  onLogOut,
}) {
  return (
    <>
      <li className=" bg-white flex justify-between items-center flex-row p-2 rounded-lg shadow-xl relative my-5 gap-1">
        <div className="w-20  overflow-hidden rounded-full">
          <img
            src={userData.userImage}
            alt={`${userData.userFullName}-image`}
            className="w-full h-full object-cover"
          />
        </div>
        {userData.loginStatus && (
          <div className="bg-lime-600 w-3 h-3 rounded-full absolute bottom-[11px] left-[52px] shadow-2xl"></div>
        )}
        <div className="flex flex-col justify-center items-start w-full px-2 gap-1">
          <h3>{userData.userFullName}</h3>
          <p className="flex justify-center items-center flex-row gap-1 text-sm text-gray-500">
            <CiMail />
            {userData.userEmail}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => onSetSelectedUser(userData)}
            className="p-2 rounded-full  hover:scale-[90%] hover:bg-[#FFC801]  transition-all ease-in duration-100 cursor-pointer "
          >
            <FiEye className=" text-black font-extrabold text-xl" />
          </button>
          {listMode === "activeUsers" ? (
            <button
              onClick={() => onLogOut(userData.userId)}
              className="p-2 rounded-full  hover:scale-[90%] hover:bg-[#FFC801]  transition-all ease-in duration-100 cursor-pointer "
            >
              <MdLogout className=" text-black font-extrabold text-xl" />
            </button>
          ) : (
            <button
              onClick={() => onDeleteUser(userData.userId)}
              className="p-2 rounded-full  hover:scale-[90%] hover:bg-[#fceebf]   transition-all ease-in duration-100 cursor-pointer "
            >
              <MdDelete className="text-red-500 font-extrabold text-xl" />
            </button>
          )}
        </div>
      </li>
    </>
  );
}
