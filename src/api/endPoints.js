// import { uploadFile } from "../features/users/uploadFile";

export const endPoints = {
  userRegistration: "/restAPI/login/user/registration",
  userAuthentication: "/restAPI/login/authenticateUser",
  sendOtp: "/restAPI/login/sendOTP",
  validateOtp: "/restAPI/login/validateOTP",
  resetPassword: "/restAPI/login/resetPassword",
  updateProfile: "/restAPI/login/updateProfile",
  masterApi: "/restAPI/dashboard/getMasterList",
  chapterCreation: "/restAPI/chapter/createChapter",
  chapterList: "/restAPI/chapter/getChapterList",
  superAdmin: "/restAPI/login/getAllUsers",
  upload:"/restAPI/AWSS3/uploadFile",
  usersList: "/restAPI/login/getAllUsers",
  uploadFileToChapterRepo:"/restAPI/chapter/uploadFileToRepo",
  getChapterRepoList:"/restAPI/chapter/getChapterRepoFilesByUserId",
  getChapterRepoListByChapterId:"/restAPI/chapter/getChapterRepoFilesByChapterId",
  assignAdminChapter:"/restAPI/chapter/assignAdmin",
  unAssignAdmin:"/restAPI/chapter/unAssignAdmin",
  requestToJoinAsMember:"/restAPI/user/requestToJoinAsMember",
  respondToMemberRequest:"/restAPI/chapter/approveOrRejectChapterMemberRequest",
  getAllUsersByChapterId:"/restAPI/chapter/getAllUsersByChapterId"
  
};