import { Metadata } from 'next';
import { cookies } from 'next/headers';

import { Product, products } from '@/data/products';
import { ItemCard } from '@/components/cart/item-card';

export const metadata: Metadata = {
  title: 'Shopping cart'
}

interface ProductInCart  {
  product:  Product;
  quantity: number;
}

const getProductsInCart = ( cart: { [id:string]: number } ): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find( prod => prod.id === id );
    if ( product ) {
      productsInCart.push({ product: product, quantity: cart[id] })
    }
  }

  return productsInCart;
}

export default async function CartPage() {
  const cookiesStore = await cookies();
  const cart = JSON.parse( cookiesStore.get('cart')?.value ?? '{}' ) as { [id:string]: number };
  const productsInCart = getProductsInCart(cart);

  return (
    <div>
      <h1 className="text-4xl mb-4">Shopping cart</h1>

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {
            productsInCart.map( ({ product, quantity }) => (
              <ItemCard key={ product.id } product={ product } quantity={ quantity } />
            ))
          }
        </div>
      </div>
    </div>
  );
}