export const login = async (data: { customernumber: number; customerpin: number }) => {
    const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json();
};

export const fetchUser = async (token: string) => {
    const response = await fetch("/api/user/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return response.json();
};
