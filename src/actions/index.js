export const incNumber=()=>{
  return{
    type: "INCREMENT"
    
  }
}
export const decNumber=()=>{
  return{ 
    type: "DECREMENT"
    
  }
}
export const add=()=>{
  return{ 
    type: "add"
    
  }
}

export const incrementByAmount=(num)=>{
  return{ 
    type: "addnumber",
    payload:num
    
  }
}