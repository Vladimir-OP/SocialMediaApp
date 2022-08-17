import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [commentsCount, setCommentsCount] = useState();

  return (
    <UserContext.Provider
      value={{ user, setUser, commentsCount, setCommentsCount }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
