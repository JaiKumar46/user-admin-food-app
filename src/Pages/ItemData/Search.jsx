import { data } from 'autoprefixer';
import React,{useState} from 'react'
import {BsSearch} from "react-icons/bs"
const Search = ({items,onSearch,fetchagain}) => {
    const [input, setInput] = useState("");
  const[searchList,setSearchList]=useState([]);

 
  

  const submitHandler = (e) => {
    e.preventDefault();
        fetchagain();
  };

  const handleSaerch=(e)=>{
    setInput(e.target.value);
    if (e.target.value==="") {

        setSearchList([]);
        return;
    }
    
    setSearchList(items.filter(c=>c.name.toLowerCase().includes(e.target.value.toLowerCase())));
    onSearch(e.target.value);
  }

  return (
    <div className='md:relative  top-6'>
    <form onSubmit={submitHandler} className=' h-auto w-[25rem] flex'>
        <input type="text" className="search-input shadow-lg shadow-black h-8 w-[20rem] 
         border-none placeholder:p-4  
        p-4 rounded-lg active:border-4"  placeholder="Search" 
        value={input}  onChange={handleSaerch}/>
        <button className="btn btn-primary relative top-0 shadow-lg shadow-black 
        rounded-md h-9 w-20 bg-slate-700 "><BsSearch className='relative
        left-8 text-white'/></button>
    </form>
    <ul className="h-auto w-[20rem] rounded shadow-md shadow-black absolute z-[999] bg-white  left-2 ">
        {searchList.map((search,index) => {
            return <li key={index} 
            onClick={()=>
                {setInput(search.name); 
                onSearch(input); 
                setSearchList([])}} className="cursor-pointer m-4 border-b-2 border-gray-300  hover:bg-[#c7c5c5]">{search.name}</li>
        })}
    </ul>

    </div>
  )
}

export default Search