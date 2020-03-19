import React, { Component } from 'react';
import ContainerTow from './product/ContainerTow';

class AppSearchProduct extends Component {
  getData = () => this.props.dataUserProps.map((value,key) => {
                                return (
                                <ContainerTow
                                key={key}
                                product_name={value.product_name}
                                product_price={value.product_price}
                                image={value.image}
                                />                    
                                )
                         })
    render() {
        return (
            <div className="home-product">
            <div className="row sm-gutter">
            {
               this.getData()
            }
             </div>
          </div>
        )
    }
}
export default AppSearchProduct;