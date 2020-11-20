import Product from "./product";

export default interface OrderItem extends Product {
  quantity: number;
  total: number;
}