import axios from "../shared/axios";

//utility functions
export const getRequest = async (uri) => {
    try {
        let response = await axios.get(uri);

        return{
            data: response.data,
            error:null
        };
    }catch(error){
        return{
            data: null,
            error: error
        };
    }
};