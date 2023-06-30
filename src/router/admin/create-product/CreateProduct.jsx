import React,{useState, useRef} from 'react'
import "./CreateProduct.css"
import { db } from "../../../server"
import { collection, addDoc } from "firebase/firestore"
import { toast } from 'react-toastify' 
//collection = array


function CreateProduct() {
  //controlled form | component
  const [title, setTitle] = useState("")
  //uncontrolled form | component useRef - querySelector
  const price = useRef()
  const url = useRef()
  const [loading, setLoading] = useState(false)
  //database da kotta array ochdik yani collection array demakdir
  
  const productRef = collection(db, "products")


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    let newProduct = {
      title,
      price: +price.current.value,
      url: url.current.value,
    }    
    await addDoc(productRef, newProduct)
    .then(res =>{  
      console.log(res)
      setTitle("")
      price.current.value = ""
      url.current.value = ""
      toast.success("Muvaffaqiyatli yasaldi")
    })
    .catch(arr => console.log(arr))
    .finally(()=> setLoading(false))
  }
  return (
    <div className='createProduct'>
      <h2>CreateProduct</h2>
      <form onSubmit={handleSubmit} action="">
        <input value={title} onChange={e=> setTitle(e.target.value)} required type="text"  placeholder='title' name="" id="" /> 
        <input ref={price} required type="number" placeholder='price' name="" id="" />
        <input ref={url} required type="text"  placeholder='url' name="" id="" /><br/>
        <button disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
      </form>
    </div>
  )
}

export default CreateProduct
