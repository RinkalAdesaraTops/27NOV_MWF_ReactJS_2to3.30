import React, { useState } from 'react'

const useFetch = (url) => {
  const [data,setData] = useState([])
    fetch(url)
            .then(res=>res.json())
            .then(json=>setData(json))
    return ([data])
}

export default useFetch
