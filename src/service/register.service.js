"use server";

export const registerService = async (userDetail) => {
  console.log(userDetail);
  const baseUrl = process.env.BASE_URL;
  const endpoint = "auth/sign-up";
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
