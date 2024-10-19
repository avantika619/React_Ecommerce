import React from 'react'
import './NewCollections.css'
import newCollections from '../assets/new_collections'
import Item from '../item/Item'

const NewCollections = () => {
  const handleAddToCart = (itemkeyword) => {
    console.log(`${itemkeyword} added to cart`);
  };
  return (
    <div className='new-collections'>
        <h1>ACCESSORIES</h1>
        <hr />
        <div className='new-collection-items'>
        {
            newCollections.map((item)=>{
                return(
                    <Item
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    old_price={item.old_price}
                    new_price={item.new_price}
                    onAddToCart={() => handleAddToCart(item.keyword)}
                  />
                )
            })
        }
        </div>
    </div>
  )
}

export default NewCollections