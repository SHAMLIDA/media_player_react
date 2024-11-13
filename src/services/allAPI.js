import commonAPI from "./CommenAPI";
import SERVEL_URL from "./Servel_url";

// Save video - API called by app.jsx
export const addVideo = async (video) => {
  try {
    return await commonAPI("POST", `${SERVEL_URL}/allvideos`, video);
   
  } catch (error) {
    console.error("Error adding video:", error);
    throw error; 
  }
};

// Get all videos
export const getAllVideos = async () => {
  try {
    return await commonAPI("GET", `${SERVEL_URL}/allvideos`, "");
   
  } catch (error) {
    console.error( error);
    throw error; 
  }
};

// Delete video
export const deleteVideos = async (videoid) => {
  return await commonAPI("DELETE", `${SERVEL_URL}/allvideos/${videoid}`, {});
};
//watch history

export const saveHistory = async (video) => {
  return   await commonAPI("POST", `${SERVEL_URL}/history`, video);

}


//history fetch

export const getHistory = async () => {
  return await commonAPI("GET", `${SERVEL_URL}/history`, "");
};

// Delete video from history
export const deleteHistory = async (videoId) => {
  return await commonAPI("DELETE", `${SERVEL_URL}/history/${videoId}`, {});
};

 


  