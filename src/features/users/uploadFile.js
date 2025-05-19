import { endPoints } from "../../api/endPoints";
import { api } from "../../utils/api";

export const uploadFile = async (file, directory, userId) => {
  try {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("directory", directory);
    formData.append("userId", userId);

    const response = await api.post(
      endPoints.upload,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.statusCode === 200) {
      console.log("File uploaded successfully:", response.data.responseObject);
      return response;
    } else {
      console.error("Upload failed:", response.data.message);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};



export const uploadChapterRepo = async (file, directory, userId,chapterId,) => {
  try {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("directory", directory);
    formData.append("userId", userId);
    formData.append("chapterId", chapterId);

    const response = await api.post(
      endPoints.uploadFileToChapterRepo,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.statusCode === 200) {
      console.log("File uploaded successfully:", response.data.responseObject);
      return response;
    } else {
      console.error("Upload failed:", response.data.message);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};


export const getChapterRepoListByChapterId = async (body) => {
  try {
  
    const response = await api.post(endPoints.getChapterRepoListByChapterId,body);

    if (response.data.statusCode === 200) {
      console.log("get ChapterRepo List Succesfully:", response.data.responseObject);
      return response;
    } else {
      console.error(" failed:", response.data.message);
    }
  } catch (error) {
    console.error("Error while getting:", error);
  }

}


export const unAssignChapterAdminBySuperAdmin = async (body) => {
  try {
  
    const response = await api.post(endPoints.unAssignAdmin,body);

    if (response.data.statusCode === 200) {
      console.log("Chapter Assigned successfully:", response.data.responseObject);
      return response;
    } else {
      console.error("Not Assigned:", response.data.message);
    }
  } catch (error) {
    console.error("Error while Assign:", error);
  }

}


export const requestToJoinAsMember=async(body)=>{
  try {
    const response = await api.post(endPoints.requestToJoinAsMember,body);
    return response
  }
  catch(error){
    console.log("Error While Assign:",error)
  }

  //   if (response.data.statusCode === 200) {
  //     console.log("Chapter Assigned successfully:", response.data.responseObject);
  //     return response;
  //   } else {
  //     console.error("Not Assigned:", response.data.message);
  //   }
  // } catch (error) {
  //   console.error("Error while Assign:", error);
  // }

}




export const approveOrRejectChapterMemberRequest=async(body)=>{
  try {
    const response = await api.post(endPoints.respondToMemberRequest,body);

    if (response.data.statusCode === 200) {
      console.log("Chapter Assigned successfully:", response.data.responseObject);
      return response;
    } else {
      console.error("Not Assigned:", response.data.message);
    }
  } catch (error) {
    console.error("Error while Assign:", error);
  }
}