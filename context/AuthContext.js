import React, { createContext, useState, useEffect, Children } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const storedUser = await AsyncStorage.getItem("user");
        if(storedUser) {
            setUser(JSON.parse(storedUser));
        }
    };

    const login = async (email, senha) => {
        const testeUser = {
            email, nome: "usuário teste",
            recentes: [],
            favoritos: []
        };
        setUser(testeUser);
        await AsyncStorage.setItem("user", JSON.stringify(testeUser));
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}