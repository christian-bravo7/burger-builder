import axios from 'axios';

import {
  onRequestError,
  onRequestSuccess,
} from '@/utils/axios/interceptors/onRequest';
import {
  onResponseError,
  onResponseSuccess,
} from '@/utils/axios/interceptors/onResponse';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosClient.interceptors.request.use(
  onRequestSuccess,
  onRequestError
);

axiosClient.interceptors.response.use(
  onResponseSuccess,
  onResponseError
);

export { axiosClient };
