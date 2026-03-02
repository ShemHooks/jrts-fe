export const login = async (email: string, password: string) => {
const res = await fetch("http://127.0.0.1:8000/api/auth/login", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
});

return res.json();

};

