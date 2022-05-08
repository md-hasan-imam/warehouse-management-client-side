import { useEffect, useState } from "react";

function useInventories(){
    const [inventories, setInventories] = useState([]);
    useEffect(()=>{
        fetch('https://fast-escarpment-66103.herokuapp.com/inventories')
        .then(res => res.json())
        .then(data => setInventories(data))
    },[])
    return [inventories,setInventories]
}
export default useInventories;