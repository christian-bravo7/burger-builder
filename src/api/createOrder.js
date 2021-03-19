import { axiosClient } from '@/utils/axios';

const createOrder = async order => {
  await axiosClient.post('/orders.json', order, {
    headers: {
      request: 'create order',
    },
  });
};

export default createOrder;
