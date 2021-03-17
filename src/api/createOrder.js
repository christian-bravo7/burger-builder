import { axiosClient } from '@/utils/axios';

const createOrder = async order => {
  const { data } = await axiosClient.post('/orders.json', order);
  console.log(data);
};

export default createOrder;
