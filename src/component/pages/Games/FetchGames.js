import { BaseUrl } from "../../urlPath";

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
  params: {
    tag: "3d.mmorpg.fantasy.pvp",
    platform: "pc",
  },
  headers: {
    "X-RapidAPI-Key": "4318904c87mshcf8fcdc984cadc9p1f8d99jsn9790322cce04",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const fetchGames = async () => {
  try {
    const resp = await fetch(BaseUrl, options);
    const gamesData = await resp.json();
    return gamesData;
  } catch (error) {
    console.log("Error fetching games:", error);
    return [];
  }
};
