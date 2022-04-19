import React, { useState } from 'react'
import axios from 'axios'

export default function Admin ({ setItems }) {
  const initialValues = {
    itemName: '',
    itemDescription: '',
    itemPrice: ''
  }

  const [formValues, setFormValues] = useState(initialValues)

  const handleInputChange = event => {
    const { name, value } = event.target

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = () => {
    const newItem = {
      name: formValues.itemName,
      description: formValues.itemDescription,
      price: formValues.itemPrice
    }
    axios.post('/items', newItem).then(result => {
      console.log(result)
      setItems(items => [...items, result.data.item])
    })
  }

  return (
    <div className='col-sm'>
      <div className='admin'>
        <h2>Add an item</h2>
        <label>
          Item Name
          <input
            name='itemName'
            value={formValues.itemName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Item Description
          <input
            name='itemDescription'
            value={formValues.itemDescription}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Item Price
          <input
            name='itemPrice'
            value={formValues.itemPrice}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
