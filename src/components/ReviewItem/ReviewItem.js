import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,key} = props.product;
    const {handleRemove} = props;
    return (
        <div className="product" >
            <div >
                <h1 className="product-name" >{name}</h1>
                <h4>Price{price}</h4>
                <h6>Quantitay{quantity}</h6>
                <button onClick={()=>handleRemove(key)} className="btn-regular">Remove</button>
                
            </div>
        </div>
    );
};

export default ReviewItem;