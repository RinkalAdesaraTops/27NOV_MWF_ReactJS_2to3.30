import React, { useState,useEffect } from 'react'
import axios from 'axios'
const ApiFilter = () => {
    const [data,setData] = useState([])
    const [catdata,setCatData] = useState([])
    // const [search,setSearch] = useState("")
    const fetchData = ()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>setData(res.data))
    }
    useEffect(()=>{
        fetchData()
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>setCatData(res.data))
    },[])
    const getCategory = (e)=>{
        let cat = e.target.value;
        if(cat !== ''){
            axios.get('https://fakestoreapi.com/products/category/'+cat)
            .then((res)=>setData(res.data))
        } else {
            fetchData()
        }
    }
    const getPricewiseData = (e)=>{
        let order = e.target.value;
        let data1 = [...data];
        if(order == "1"){
             data1.sort((a,b)=>{
                return a.price-b.price;
            })
        } else if(order == "2"){
            data1.sort((a,b)=>{
                return b.price-a.price;
            })
            // console.log(data1);
            // setData(data1)
        } else {
            fetchData()
        }
        setData(data1)
    }
    const getProductName = (e)=>{
        let search = e.target.value
        let addData = data
        if(search !== ''){
            let data1 = addData.filter((i)=>{
                if(i.title.includes(search) ){
                        return i
                    }
            })
            setData(data1)
        } else {
            fetchData()
        }
        
    }
  return (
    <div>
        <h3>Product Information</h3>
        <input type="search" name="searchname" id="searchname" onKeyUp={getProductName} />
        &nbsp; <select name='catname' onChange={getCategory}>
            <option value=''>--Select Category--</option>
            {
                catdata && catdata.map((i)=>{
                    return (<option value={i}>{i}</option>)
                })
            }
        </select>
             &nbsp; Price : &nbsp;
        <select name='priceorder' onChange={getPricewiseData}>
            <option value=''>--Select--</option>
            <option value="1">Low to High</option>
            <option value="2">High to Low</option>
        </select> 
        <br /> <br />
        <table border={'2'}>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
                <td>Category</td>
                <td>Description</td>
                
            </tr>
            {
                data && data.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.price}</td>
                            <td>{i.category}</td>
                            <td>{i.description}</td>

                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default ApiFilter
