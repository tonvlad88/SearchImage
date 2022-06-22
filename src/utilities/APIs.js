import {get} from './fetch';

export const APIs = {
  getImages(keyword, page) {
    return get(keyword, page);
  },
};
