import axios from "../../../utils/axios";

export const login = async (adminDetails: any) => {
    try {
        const response = await axios.post("/auth/admin-login", adminDetails);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};
