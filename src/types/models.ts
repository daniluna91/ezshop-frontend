// Product es una interface que define la estructura de un producto, las interfaces son tipos personalizados que definen la forma de un objeto y se usan para tipar los objetos
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

// CartItem es una interface que define la estructura de un item del carrito, extends Product significa que hereda las propiedades de Product
// quantity es la cantidad de productos que se van a añadir al carrito
export interface CartItem extends Product {
  quantity: number;
}
