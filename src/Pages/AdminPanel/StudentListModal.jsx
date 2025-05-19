import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import handleScrollToTop from "../../utils/SmoothScroll";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";
import { Strings } from "../../Strings/Strings";
import { endPoints } from "../../api/endPoints";
import { api } from "../../utils/api";
import AreYouSure from "../Modals/AreYouSure";
import { useNavigate } from "react-router-dom";
import AssignSuccess from "../Modals/AssignSucess";

// export const SuccessModal = ({ message, onClose }) => {
//   const navigate = useNavigate();

//   const handleOk = () => {
//      onClose();
//       navigate("/chapterslist");
    
   
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
//       <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg text-center">
//         <img src={Logo} alt="brand" />
//         <p className="text-black text-lg font-semibold">{message}</p>
//         <button
//           onClick={handleOk}
//           className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
//         >
//           OK
//         </button>
//       </div>
//     </div>
//   );
// };

const StudentListModal = ({ closeModal, chapterId, context ,usecase}) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [areyousure, setAreyousure] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState();
console.log(usecase,"helllllllo")
  const handleClose = () => {
    closeModal();
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const payload = { userId: 1, userType: 1 ,chapterId:chapterId};
        const response = await api.post(endPoints.usersList, payload);
        setData(response.data.responseObject || []);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserDetails = (id) => {
    setSelectedUserId(id);
    setAreyousure(true);
    handleScrollToTop();
  };

  const filteredStudents = data.filter((student) => {
    if (!student) return false;
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      (student.firstName || "").toLowerCase().includes(searchLower) ||
      (student.lastName || "").toLowerCase().includes(searchLower) ||
      (student.universityName || "").toLowerCase().includes(searchLower) ||
      (student.signUpAs || "").toLowerCase().includes(searchLower)
    );
  });

  return (
    <div >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div
          className={`fixed inset-0 flex items-start justify-center bg-black bg-opacity-50   ${
            areyousure ? " bg-white blur-sm " : ""
          }`}
        >
          <div
            className={`relative w-full max-w-4xl z-50 bg-white rounded-lg shadow-lg p-10 mt-32 ml-[200px]`}
          >
            {successMessage && (
              <AssignSuccess
                message={successMessage}
                onClose={() => setSuccessMessage(null)}
              />
            )}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                {Strings.students}
              </h1>
              <button
                onClick={handleClose}
                className="bg-red-500 text-white px-3 py-1 rounded-full"
              >
                X
              </button>
            </div>
            
            <div className="flex items-center w-full  mb-4 ">
              <input
                type="text"
                className="flex-grow h-10 px-4 border border-gray-200 rounded-l-lg focus:outline-none"
                placeholder="Search by Name, School or User type"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-gray-800 h-10 flex justify-center items-center rounded-r-lg">
                <Search className="text-white h-4 w-11" />
              </button>
            </div>
            {error && (
              <div className="text-red-500 text-center py-4">
                {Strings.error_loading_students} {error}
              </div>
            )}

            <div className="flex flex-col  h-[40vh] overflow-y-auto  scrollbar-hide ">
              {filteredStudents.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  {Strings.No_students_found_matching_your_search_criteria}
                </div>
              ) : (
                filteredStudents.map((student, index) => (
                  <div
                    key={student.userId}
                    className={`flex items-center p-4 ${
                      index % 2 === 0 ? "bg-[#F1F1F1]" : "bg-white"
                    } rounded-full`}
                  >
                    <img
                      src={student.profieLink || Logo}
                      alt="student"
                      className="w-12 h-12 rounded-full object-cover mr-6"
                    />
                    <div className="flex-grow grid grid-cols-4 gap-6 items-center">
                      <div>
                        <p className="text-sm text-[#8A8A8A]">{Strings.name}</p>
                        <h3 className="text-[16px] text-[#282828] font-medium">
                          {`${student.firstName || ""} ${
                            student.lastName || ""
                          }`}
                        </h3>
                      </div>
                      <div>
                        <p className="text-sm text-[#8A8A8A]">
                          {Strings.school}
                        </p>
                        <p className="text-[#282828]">
                          {student.universityName === "Other"
                            ? student.otherUniversityName
                            : student.universityName}
                        </p>
                      </div>
                      <div>
                        <p className="text-[14px] text-[#8A8A8A]">
                          {Strings.usertype}
                        </p>
                        <p className="text-[#282828] text-[16px]">
                          {student.signUpAs || "N/A"}
                        </p>
                      </div>
                      <div className="flex items-center justify-end gap-4">
                        <button
                          onClick={() => handleUserDetails(student.userId)}
                          className="px-6 py-2 text-white bg-[#E02239] rounded-full text-[14px] font-[500] transition-colors hover:bg-[#c41e32]"
                        >
                          {context === "assign" ? "Assign" : "Request"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {areyousure && (
        <div className="z-40 opacity-1 absolute left-[40%] top-[32%]">
          <AreYouSure
            usecase="assign"
            areyousure={areyousure}
            setSuccessMessage={setSuccessMessage}
            chapterId={chapterId}
            userId={selectedUserId}
            closeModal={() => setAreyousure(false)}
          />
        </div>
      )}
    </div>
  );
};

export default StudentListModal;

