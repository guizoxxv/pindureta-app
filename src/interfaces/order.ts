import OrderItem from './orderItem';

export default interface Order {
  [id: string]: OrderItem;
}