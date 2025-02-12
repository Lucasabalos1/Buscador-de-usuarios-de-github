import { useState, useEffect } from "react";
export const useFetchUsers = (user) => {
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    try {
      if (!user) {
        setUserData(null); 
        return;
      }
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);


  return {
    userData
  }
};
