import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {dataProductItem} = this.props;
        return (
            <div className='card text-left'>
                <img className='card-img-top' src={dataProductItem.image} alt='item'></img>
                <div className='card-body'>
                    <h4>{dataProductItem.name}</h4>
                    <p>{dataProductItem.price}</p>
                    <button className='btn btn-dark rounded-0'>Add to cart <i class="fa fa-shopping-cart ps-2"></i></button>
                </div>
            </div>

        )
    }
}
