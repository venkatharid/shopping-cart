'use client'
import Filters from '@/components/Filters'
import SingleProduct from '@/components/SingleProduct'
import { LOW_TO_HIGH } from '@/constants/constant'
import { CartState } from '@/context/Context'

export default function Home() {
  const {
    state: { products },
    productState: { sort, searchQuery },
  } = CartState()


  const transformProducts = () => {
    let sortedProducts = products

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === LOW_TO_HIGH ? a.price - b.price : b.price - a.price
      )
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      )
    }

    return sortedProducts
  }

  return (
    <div className='flex'>
      <Filters />
      <div className='flex flex-wrap gap-6 p-4 justify-start'>
        {transformProducts().map((prod) => {
          return <SingleProduct prod={prod} key={`${prod.id}_${prod.title}`} />
        })}
      </div>
    </div>
  )
}