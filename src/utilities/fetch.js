import axios from 'axios';
import {appConfig} from '../utilities/constants';
const {baseUrl, imageTypePhoto, myAPIKey, perPage} = appConfig;

const finalURL = `${baseUrl}/api/?key=${myAPIKey}${imageTypePhoto}&per_page=${perPage}&order=latest`;

export const get = async (keyword, page) => {
  try {
    const key = keyword !== '' ? `&q=${keyword}` : '';
    console.log(`${finalURL}&page=${page}${key}`);
    const res = await axios.get(`${finalURL}&page=${page}${key}`);
    return res.data;
  } catch (error) {
    // console.log('error', error);
    return {hits: []};
  }
};
