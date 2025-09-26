import Cookies from "js-cookie";


export const registerUser = async (data) => {
    

    const response = await fetch(`${import.meta.env.VITE_API_TEAM_SERVER}/api/auth/new`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-token': Cookies.get('x-token')
    },
    body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
};
