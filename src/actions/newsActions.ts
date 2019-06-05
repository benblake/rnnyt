import { NYT_API_KEY } from "react-native-dotenv";
import { LOAD_NEWS, SEARCH_NEWS } from "./actionTypes";

export interface ActionType {
  type: string;
  payload: any;
}

export const loadNews = () => {
  const req = fetch(
    `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NYT_API_KEY}`,
  );

  return {
    type: LOAD_NEWS,
    payload: req.then(response => {
      console.log(response);
      return response.json();
    }),
  };
};

export const searchNews = (searchTerm: string) => ({
  type: SEARCH_NEWS,
  payload: searchTerm,
});
