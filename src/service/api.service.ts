import { IAuthResponse } from "../models/IAuthResponse.ts";

const baseUrl = "https://dummyjson.com";

export const getUserToken = async (): Promise<IAuthResponse | null> => {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 1, // optional, defaults to 60
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка при получении токена:", error);
    return null;
  }
};
