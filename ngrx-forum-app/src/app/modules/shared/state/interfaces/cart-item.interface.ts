export interface CartItem {
  itemId: number;
  itemName: string;
  itemCost: number;
  itemCount?: number | 0;
}
