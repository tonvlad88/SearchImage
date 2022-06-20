import axios from 'axios';
import {appConfig} from '../utilities/constants';
const {baseUrl, imageTypePhoto, myAPIKey, perPage} = appConfig;

const finalURL = `${baseUrl}/api/?key=${myAPIKey}${imageTypePhoto}&per_page=${perPage}&order=latest`;

export const get = async (searchValue, page) => {
  try {
    const res = await axios.get(`${finalURL}&page=${page}`);
    return res.data;
  } catch (error) {
    console.log('error', error);
    return {hits: []};
  }
};
