import React, { useContext, useState } from "react";

const NavLinksContext = React.createContext();

export const useNavLinks = () => {
    return useContext(NavLinksContext);
}

export const NavLinksProvider = ({ children }) => {
    const [navLinks, setNavLinks] = useState([
        {id: 1, title: 'All', path: '/', active: true},
        {id: 2, title: 'Active', path: '/active', active: false},
        {id: 3, title: 'Completed', path: '/completed', active: false},
    ]);
    const changeActive = (index) => {
        const newNavLinks = [...navLinks];
        newNavLinks.forEach(link => link.active = false);
        setNavLinks(newNavLinks, newNavLinks[index].active = true);
    }

    return (
        <NavLinksContext.Provider value={{navLinks, setNavLinks, changeActive}}>
            { children }
        </NavLinksContext.Provider>
    )
}