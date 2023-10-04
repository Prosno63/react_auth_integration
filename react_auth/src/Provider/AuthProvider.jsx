import { Children, createContext } from "react";


const AuthContext = createContext(null);


const AuthProvider = () => {
    const authInfo = {name: 'Limon'}
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;