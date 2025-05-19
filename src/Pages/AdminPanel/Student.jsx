import { Search } from "lucide-react";
import axios from "axios";
import Logo from "../../assets/Logo.png";
import { useEffect, useState } from "react";
import Studentdetails from "./StudentDetails";
import handleScrollToTop from "../../utils/SmoothScroll";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";
import { Strings } from "../../Strings/Strings";
import { baseApi } from "../../api/baseApi";
import { endPoints } from "../../api/endPoints";
import { api } from "../../utils/api";

const Student = () => {
  const [data, setData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [filtredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const payload = { userId: 1 ,userType:0};
        const response = await api.post(endPoints.usersList, payload)
        console.log(response.data.responseObject, "super admin");
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
    const filterStudentData = data.filter((each) => each.userId === id);
    setFilteredData(filterStudentData);
    setShowDetails(true);
    handleScrollToTop();
  };

  // Updated filter function with null checks
  const filteredStudents = data.filter(student => {
    if (!student) return false;
    if (searchTerm === "") return true;
    
    const searchLower = searchTerm.toLowerCase();
    
    // Safely access properties with null checks
    const firstName = (student.firstName || "").toLowerCase();
    const lastName = (student.lastName || "").toLowerCase();
    const universityName = (student.universityName || "").toLowerCase();
    const signUpAs = (student.signUpAs || "").toLowerCase();

    return (
      firstName.includes(searchLower) ||
      lastName.includes(searchLower) ||
      universityName.includes(searchLower) ||
      signUpAs.includes(searchLower)
    );
  });

  if (showDetails) {
    return (
      <Studentdetails
        setStudentDetailModal={setShowDetails}
        item={filtredData}
      />
    );
  }

  return (
    <div className="flex flex-col w-full  gap-6 p-8 h-[100vh] overflow-scroll scrollbar-hide ">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">{Strings.students}</h1>
        <div className="mt-28 flex items-center w-[460px]">
          {/* Unified Search Input */}
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
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-center py-4">
          {Strings.error_loading_students} {error}
        </div>
      )}

      {/* Students List */}
      {loading ? <LoadingSpinner/> : (
        <div className="flex flex-col">
          {filteredStudents.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {Strings.No_students_found_matching_your_search_criteria}
            </div>
          ) : (
            filteredStudents.slice().reverse().map((student, index) => (
              <div
                key={student.userId}
                className={`flex items-center p-4 ${index % 2 === 0 ? "" : "bg-white"} rounded-full`}
              >
                {/* Profile Image */}
                <div className="mr-6">
                  <img
                    src={student.profieLink ? student.profieLink : Logo}
                    alt="student"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>

                {/* Student Details */}
                <div className="flex-grow grid grid-cols-4 gap-6 items-center">
                  {/* Name and ID */}
                  <div>
                    <p className="text-sm text-[#8A8A8A]">{Strings.name}</p>
                    <h3 className="text-[16px] text-[#282828] font-medium">
                      {`${student.firstName || ''} ${student.lastName || ''}`}
                    </h3>
                  </div>

                  {/* School */}
                  <div>
                    <p className="text-sm text-[#8A8A8A]">{Strings.school}</p>
                    <p className="text-[#282828]">{student.universityName==null ? student.otherUniversityName : student.universityName }</p>
                  </div>

                  {/* UserType */}
                  <div>
                    <p className="text-[14px] text-[#8A8A8A]">{Strings.usertype}</p>
                    <p className="text-[#282828] text-[16px]">{student.signUpAs || 'N/A'}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end gap-4">
                    <button 
                      onClick={() => handleUserDetails(student.userId)}
                      className="px-6 py-2 text-white bg-[#E02239] rounded-full text-[14px] font-[500] transition-colors hover:bg-[#c41e32]"
                    >
                      {Strings.view_details}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Student;