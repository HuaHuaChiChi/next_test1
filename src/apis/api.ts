import axios from "axios";

const catApi = axios.create({
  url: "https://catfact.ninja/fact",
});

export type Cat = {
  fact: string;
  length: number;
};

export const getCatApi = async (): Promise<Cat> => {
  try {
    const response = await catApi.get("");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
