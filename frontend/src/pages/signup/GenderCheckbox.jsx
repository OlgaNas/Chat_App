import React from 'react'

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={`label cursor-pointer gap-1 ${selectedGender === "male" ? "selected" : ""}`}>
                <span className="label-text text-base-200">Male</span> 
                <input type="checkbox" 
                    className="checkbox border-green-100" 
                    checked = {selectedGender === "male"} 
                    onChange = {() => onCheckboxChange("male")}/>
            </label>
        </div>
        <div className="form-control ms-2">
            <label className={`label cursor-pointer gap-1 ${selectedGender === "female" ? "selected" : ""}`} >
                <span className="label-text text-base-200">Female</span> 
                <input type="checkbox" 
                    className="checkbox border-green-100" 
                    checked = {selectedGender === "female"} 
                    onChange = {() => onCheckboxChange("female")}/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox

//STARTER CODE FOR THIS FILE
// const GenderCheckbox = () => {
//     return (
//       <div className='flex'>
//           <div className="form-control">
//               <label className="label cursor-pointer gap-1">
//                   <span className="label-text text-base-200">Male</span> 
//                   <input type="checkbox" className="checkbox border-green-100" />
//               </label>
//           </div>
//           <div className="form-control ms-2">
//               <label className="label cursor-pointer gap-1">
//                   <span className="label-text text-base-200">Female</span> 
//                   <input type="checkbox" className="checkbox border-green-100" />
//               </label>
//           </div>
//       </div>
//     )
//   }
  
//   export default GenderCheckbox