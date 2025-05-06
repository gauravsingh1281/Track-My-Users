import UserList from "./UserList";
export default function UserListContainer({
  showCard,
  userData,
  listHeading,
  listMode,
}) {
  return (
    <>
      <div className="w-[48%] p-3">
        {showCard && (
          <>
            <h2 className="text-2xl text-center mb-5">{listHeading}</h2>
            <div className="w-full ">
              <ul>
                {userData.map((data) => (
                  <UserList
                    userData={data}
                    listMode={listMode}
                    key={data.userId}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}
