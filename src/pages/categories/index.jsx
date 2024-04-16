import React, { useEffect } from 'react'
import { getCategoryList } from '../../api/category';

function Categories() {

  function getDataCategories(){
    const data = getCategoryList();
    console.log(data)
  }

  useEffect(() => {
    getDataCategories()
  }, [])
  return (
    <div>Categories</div>
  )
}

export default Categories