export default function UserList({ userData, listMode }) {
  return (
    <>
      <li
        key={userData.userId}
        className=" bg-white flex justify-between items-center flex-row p-2 rounded-lg shadow-xl relative my-5"
      >
        <div className="w-20  overflow-hidden rounded-full">
          <img
            src={userData.userImage}
            alt={`${userData.userFullName}-image`}
            className="w-full h-full object-cover"
          />
        </div>
        {userData.loginStatus && (
          <div className="bg-lime-600 w-3 h-3 rounded-full absolute bottom-[11px] left-[52px]"></div>
        )}
        <div className="flex flex-col justify-center items-center w-full px-2 gap-2">
          <h3>{userData.userFullName}</h3>
          <div className="flex justify-between items-center w-full">
            <p>
              {listMode === "activeUsers"
                ? `login at ${userData.loginTime}`
                : `Joined ${userData.joinedOn}`}
            </p>
            <p>{userData.userEmail}</p>
          </div>
        </div>
        <button className="p-2 bg-red-500 rounded-full text-sm text-white active:scale-[95%] transition-all ease-in duration-100 cursor-pointer ">
          Delete
        </button>
      </li>
    </>
  );
}
