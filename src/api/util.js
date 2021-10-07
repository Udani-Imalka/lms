import axios from "../shared/axios";

//utility functions
export const getRequest = async (uri) => {
  try {
    let response = await axios.get(uri);

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};

export const putRequest = async (uri, data) => {
  try {
    let response = await axios.put(uri, data);

    return {
      data: response.data,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: error
    };
  }
}

export const deleteRequest = async (uri, data) => {
  try {
    let response = await axios.delete(uri);

    return {
      data: response.data,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: error
    };
  }
}
