import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v1/deals';

export const getDealsByName = async (name = '') => {
  try {
    name = name.toLocaleLowerCase().trim();
    if (name.length === 0) return [];

    const response = await axios.get('/', {
      params: {
        q: `title:${name}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
