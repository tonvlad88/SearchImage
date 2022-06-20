import {get} from './fetch';

export const APIs = {
  getImages(value, page) {
    return get(JSON.stringify(value), page);
  },
};
