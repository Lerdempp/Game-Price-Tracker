import axios from 'axios';

const BASE_URL = 'https://www.cheapshark.com/api/1.0';


export const getGames = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/deals`);
    console.log("API Response for Deals:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};


export const getGameDetails = async (dealID) => {
  try {
    const response = await axios.get(`${BASE_URL}/deals`, {
      params: {
        id: dealID,
      },
    });
    console.log("API Response for Game Details:", response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching game details:', error);
    return null;
  }
};
