import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v1/deals';

export const getDeals = async () => {
  try {
    const response = await axios.get();

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
