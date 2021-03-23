import { axiosClient } from '@/utils/axios';

const getOrders = async () => {
  const { data } = await axiosClient.get('/orders.json');

  console.log(data);
};

export default getOrders;
