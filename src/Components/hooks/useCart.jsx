import { useQuery } from '@tanstack/react-query'

import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from './useAxciosSecure';
const useCart = () => {
  const { user,loading } = useContext(AuthContext);
/*   const token = localStorage.getItem('access-token'); */
  const[axiosSecure]=useAxiosSecure()
  const {  refetch,data: cart=[]} = useQuery(
    {
      queryKey: ['carts', user?.email],
      
      enabled:!!user?.email && !!loading && !!localStorage.getItem("access-token"),
      /*      queryFn: async () => {
             const res = await fetch(`https://lingo-bridge-server-farjanajhn.vercel.app/carts?email=${user.email}`, {
               headers: {
                 authorization:`bearer ${token}`
               }
             })
             return res.json()
           }, */
      queryFn: async () => {
       
          const res = await axiosSecure.get(`/carts?email=${user?.email}`)
          console.log('res from axios', res)
          return res.data;
        }
      
    }
  )
  return [cart,refetch]
};

export default useCart;