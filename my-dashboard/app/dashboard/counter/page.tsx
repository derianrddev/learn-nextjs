import { CartCounter } from "@/app/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Shopping Cart',
 description: 'Product counter in the cart',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-3xl">Products in the cart</h1>
      <CartCounter value={10} />
    </div>
  );
}