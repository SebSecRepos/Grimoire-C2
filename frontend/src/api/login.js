

export const login = async (data) => {

    const response = await fetch(`${import.meta.env.VITE_API_TEAM_SERVER}/api/auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;

  };
