import axios from "axios";
import { baseUrl } from "../environments/environments";

const useAuthServices = () => {
  const login = async (body: any) => {
    const { data } = await axios.post(`${baseUrl}/auth/login`, body);
    return data;
  };

  const signUp = async (body: any) => {
    const { data } = await axios.post(`${baseUrl}/auth/sign-up`, body);
    return data;
  };

  return { login, signUp };
};

export default useAuthServices;
