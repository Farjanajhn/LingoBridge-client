import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const axiosSecure = axios.create({
  baseURL: 'https://lingo-bridge-server-farjanajhn.vercel.app', 
});


const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 

/* 
  const token = localStorage.getItem('access-token'); */
 /*  console.log(token) */
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
         const token = localStorage.getItem('access-token'); 
      console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;