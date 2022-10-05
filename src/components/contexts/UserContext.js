import { createContext,  useState } from "react";
import PropTypes from "prop-types";

// context to share data realted to user
export const UserContext = createContext(null);

/**
 * Creates context provider to serve as a one source of shared data between different components on different levels
 * @param {node} children
 * @returns {contextProvider} Context provider containing the children with shared data
 */
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [comments, setComments] = useState([]);
  const [album, setAlbum] = useState([]);



  return (
    <UserContext.Provider
      value={{
        album,
        setAlbum,
        openAlbum,
        setOpenAlbum,
        user,
        setUser,
        comments,
        setComments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export default UserContextProvider;
