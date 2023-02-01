import React, { useState } from 'react'

export const useData = () => {
  const [data, setData] = useState({})

  const onInputChange = (name,value) => {
    setData({
        ...data,
        [ name ]: value
    });
}
  return {data,onInputChange}
}
