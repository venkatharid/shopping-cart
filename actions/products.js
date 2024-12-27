
export async function fetchProducts(page = 1) {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${page * 10}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }