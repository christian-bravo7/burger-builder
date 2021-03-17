import { axiosClient } from '@/utils/axios';

const getOrders = async () => {
  const { data } = await axiosClient.get('/orders');

  console.log(data);
};

export default getOrders;
