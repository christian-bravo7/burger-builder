import { axiosClient } from '@/utils/axios';

const getOrders = async () => {
  const { data } = await axiosClient.get('/orders.json');

  if (data) {
    const transformedOrders = transformOrdersData(data);
    return transformedOrders;
  }

  return [];
};

const transformOrdersData = data => {
  return Object.keys(data).map(id => {
    return {
      id,
      ...data[id],
    };
  });
};

export default getOrders;
