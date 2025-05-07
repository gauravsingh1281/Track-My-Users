import { formatLoginTime, formatJoinedDate } from "../utils/formatDateTime";
import { IoMdClose, IoMdLogIn } from "react-icons/io";
import { CiMail, CiCalendarDate } from "react-icons/ci";
import { useState } from "react";

export default function UserFullDetailModal({ selectedUser, onClose }) {
  const [loginHistoryVisibility, setLoginHistoryVisibility] = useState({});

  const toggleLoginHistory = (userId) => {
    setLoginHistoryVisibility((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  if (!selectedUser) return null;

  const isLoginHistoryVisible =
    loginHistoryVisibility[selectedUser.userId] || false;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-50">
      <div className="bg-white px-6 py-10 rounded-xl shadow-xl w-[90%] max-w-md relative">
        <button
          className="absolute top-3 right-3 font-bold text-black hover:text-red-500 cursor-pointer hover:scale-[90%] transition-all ease-in duration-100"
          onClick={onClose}
        >
          <IoMdClose className="text-[35px]" />
        </button>

        <div className="flex flex-col items-center text-center gap-3">
          <img
            src={selectedUser.userImage}
            alt={selectedUser.userFullName}
            className="w-28 h-28 object-cover rounded-full border-2 border-gray-300"
          />
          <div className="flex justify-center items-center gap-1">
            <h2 className="text-xl font-semibold">
              {selectedUser.userFullName}
            </h2>
            <span
              className={`text-[12px] px-2 py-[2px] rounded-full text-white ${
                selectedUser.loginStatus ? "bg-lime-500" : "bg-red-500"
              }`}
            >
              {selectedUser.loginStatus ? "Online" : "Offline"}
            </span>
          </div>

          <p className="text-base text-gray-500 -mt-2 flex justify-center items-center gap-1">
            <CiMail />
            {selectedUser.userEmail}
          </p>
          <p className="flex justify-center items-center gap-1">
            <CiCalendarDate />
            Joined {formatJoinedDate(selectedUser.joinedOn)}
          </p>
          {selectedUser.loginStatus && (
            <p className="flex justify-center items-center gap-1">
              <IoMdLogIn /> Last login {formatLoginTime(selectedUser.loginTime)}
            </p>
          )}
          <div className="flex justify-between items-center flex-row  w-full"></div>
          <button
            onClick={() => toggleLoginHistory(selectedUser.userId)}
            type="button"
            className={`px-3 py-1 text-base ${
              isLoginHistoryVisible
                ? "text-white bg-[#2A454E]"
                : " bg-[#FFC801] text-[#2A454E]"
            } font-medium rounded-2xl cursor-pointer active:scale-[90%]  transition-all ease-in duration-100`}
          >
            Login History
          </button>
        </div>
        {isLoginHistoryVisible &&
        selectedUser.loginHistory &&
        selectedUser.loginHistory.length > 0 ? (
          <div className="text-left w-full mt-4">
            <ul className="text-sm text-gray-600 max-h-32 flex justify-center items-center flex-row wrap">
              {selectedUser.loginHistory.map((time, index) => (
                <li key={index}>
                  <span className="bg-gray-200 text-black mr-3 px-1 py-1 rounded-md">
                    {formatLoginTime(time)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : isLoginHistoryVisible ? (
          <p className="text-center mt-4">No login history found</p>
        ) : null}
      </div>
    </div>
  );
}
