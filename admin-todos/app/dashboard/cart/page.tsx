import { Metadata } from 'next';
import { cookies } from 'next/headers';

import { Product, products } from '@/data/products';
import { ItemCard } from '@/components/cart/item-card';
import { WidgetItem } from '@/components/widget-item';

export const metadata: Metadata = {
  title: 'Shopping cart'
}

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find(prod => prod.id === id);
    if (product) {
      productsInCart.push({ product: product, quantity: cart[id] })
    }
  }

  return productsInCart;
}

export default async function CartPage() {
  const cookiesStore = await cookies();
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as { [id: string]: number };
  const productsInCart = getProductsInCart(cart);

  const totalToPay = productsInCart.reduce((prev, current) => (current.product.price * current.quantity) + prev, 0);

  return (
    <div>
      <h1 className="text-4xl mb-4">Shopping cart</h1>

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {
            productsInCart.map(({ product, quantity }) => (
              <ItemCard key={product.id} product={product} quantity={quantity} />
            ))
          }
        </div>
        <div className="flex flex-col w-full sm:w-4/12">
          <WidgetItem title="Total to pay">
            <div className="mt-2 flex flex-col justify-center gap-4">
              <div className="mt-2 flex justify-center gap-4">
                <h3 className="text-3xl font-bold text-gray-700">${(totalToPay * 1.15).toFixed(2)}</h3>
              </div>
              <span className="font-bold text-center text-gray-500">Tax 15%: ${(totalToPay * 0.15).toFixed(2)}</span>
            </div>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}