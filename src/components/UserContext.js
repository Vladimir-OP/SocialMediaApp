import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [commentsL, setCommentsL] = useState();

  return (
    <UserContext.Provider value={{ user, setUser, commentsL, setCommentsL }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
