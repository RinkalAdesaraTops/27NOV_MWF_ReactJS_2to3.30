import React, { useEffect, useState } from 'react'
import useFetch from '../useFetch'

const ApiComponent = () => {
    const [data] = useFetch('https://fakestoreapi.com/products')
   return (
    <div>
      <h3>Api Component</h3>
        <table border={'2'}>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
                <td>Description</td>
                <td>Category</td>
            </tr>
            {
                data && data.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.price}</td>
                            <td>{i.description}</td>
                            <td>{i.category}</td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default ApiComponent
