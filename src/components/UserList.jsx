import { Tooltip } from "react-tooltip";
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
      <li className=" bg-white flex justify-between items-center flex-col md:flex-row lg:flex-row p-2 rounded-lg shadow-xl relative my-5 gap-1">
        <div className=" w-22 h-22 md:h-18 lg:h-16 relative rounded-full  mt-2 ">
          <img
            src={userData.userImage}
            alt={`${userData.userFullName}-image`}
            className="w-full h-full object-cover  rounded-full  object-top"
          />
          {userData.loginStatus && (
            <div className="bg-lime-600 w-[14px] h-[14px] md:w-3 md:h-3 lg:w-3 lg:h-3 rounded-full absolute top-[75px] left-[60px] md:top-[57px] md:left-[54px]  lg:top-[50px] lg:left-[48px]  shadow-2xl"></div>
          )}
        </div>
        <div className="flex flex-col justify-center item-center md:items-start lg:items-start md:w-full lg:w-full px-2 gap-1">
          <h3 className="text-center">{userData.userFullName}</h3>
          <p className="flex justify-center items-center flex-row gap-1 text-sm text-gray-500">
            <CiMail />
            {userData.userEmail}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 lg:mt-0 mt-2">
          <button
            data-tooltip-id="view-fulldetails-btn"
            data-tooltip-content="View full details"
            data-tooltip-place="bottom"
            onClick={() => onSetSelectedUser(userData)}
            className="p-2 rounded-full  hover:scale-[90%] hover:bg-[#FFC801]  transition-all ease-in duration-100 cursor-pointer "
          >
            <FiEye className=" text-black font-extrabold text-xl" />
          </button>

          {listMode === "activeUsers" ? (
            <button
              data-tooltip-id="logout-btn"
              data-tooltip-content="Logout"
              data-tooltip-place="bottom"
              onClick={() => onLogOut(userData.userId)}
              className="p-2 rounded-full  hover:scale-[90%] hover:bg-[#FFC801]  transition-all ease-in duration-100 cursor-pointer "
            >
              <MdLogout className=" text-black font-extrabold text-xl" />
            </button>
          ) : (
            <button
              data-tooltip-id="delete-btn"
              data-tooltip-content="Delete"
              data-tooltip-place="bottom"
              onClick={() => onDeleteUser(userData.userId)}
              className="p-2 rounded-full  hover:scale-[90%] hover:bg-[#fceebf]   transition-all ease-in duration-100 cursor-pointer "
            >
              <MdDelete className="text-red-500 font-extrabold text-xl" />
            </button>
          )}
        </div>
      </li>
      {/* Tooltip */}
      <Tooltip id="view-fulldetails-btn" />
      <Tooltip id="logout-btn" />
      <Tooltip id="delete-btn" />
    </>
  );
}
