export const getToken = () => {
    return localStorage.getItem("token");
}

export const setUserSession = (token, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
}

export const removeUserSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
}