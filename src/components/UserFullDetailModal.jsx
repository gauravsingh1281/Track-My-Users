import { formatLoginTime, formatJoinedDate } from "../utils/formatDateTime";

export default function UserFullDetailModal({ selectedUser, onClose }) {
  if (!selectedUser) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center text-center gap-4">
          <img
            src={selectedUser.userImage}
            alt={selectedUser.userFullName}
            className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
          />
          <h2 className="text-xl font-semibold">{selectedUser.userFullName}</h2>
          <p className="text-sm text-gray-500">{selectedUser.userEmail}</p>
          <p>
            <strong>Status:</strong>{" "}
            {selectedUser.loginStatus ? "Online" : "Offline"}
          </p>
          <p>
            <strong>Joined:</strong> {formatJoinedDate(selectedUser.joinedOn)}
          </p>
          {selectedUser.loginStatus && (
            <p>
              <strong>Last Login:</strong>{" "}
              {formatLoginTime(selectedUser.loginTime)}
            </p>
          )}
        </div>
        {selectedUser.loginHistory && selectedUser.loginHistory.length > 0 && (
          <div className="text-left w-full mt-4">
            <h3 className="font-semibold mb-2">Login History:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 max-h-32 overflow-y-auto">
              {selectedUser.loginHistory.map((time, index) => (
                <li key={index}>{formatLoginTime(time)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
