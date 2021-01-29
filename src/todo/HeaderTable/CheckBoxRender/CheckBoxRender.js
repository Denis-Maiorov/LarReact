import React from 'react'

const CheckBoxRender = (props) => {
    if (props.value == 0){
        return(
            <div>
                <input type='checkbox'  checked={false}  />
            </div>
        )
    }else{
        return(
            <div>
                <input type='checkbox'  checked={true}  />
            </div>
        )
    }
}
export default CheckBoxRender