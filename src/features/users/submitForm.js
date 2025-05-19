import axios from "axios";
import { api } from "../../utils/api";
import { endPoints } from "../../api/endPoints";

export const submitForm = async (data) => {
  console.log("submitfomr", data);
  try {
    const response = await api.put(endPoints.updateProfile, data)
    console.log(response);

    if (response.data.statusCode === 200) {
      console.log("Form data updated successfully:", response.data);
      return response;
    } else {
      console.error("Upload failed:", response.data);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
