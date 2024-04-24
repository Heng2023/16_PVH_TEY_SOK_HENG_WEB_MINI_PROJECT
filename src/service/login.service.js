export const loginService = async (userDetail) => {
  console.log(userDetail)
  const baseUrl = process.env.BASE_URL;
  const endpoint = "auth/login"; 
  const url = `${baseUrl}${endpoint}`;

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userDetail),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  return result;
};
