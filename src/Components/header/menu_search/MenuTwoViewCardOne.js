import React, { Component } from 'react';
import {connect} from 'react-redux'

class MenuTwoViewCardOne extends Component {
    constructor(props) {
        super(props);
       this.state = {
           numberProduct3:[]
       }   
    }
    componentWillMount() {
     var a=this.props.i;
     this.setState({
        numberProduct:a
      });
      this.props.numberProduct2(this.state.numberProduct3)
    }
    render() {
        return (
            <li className="header__cart-item">
                <img src={this.props.image} alt="Ảnh sản phẩm" className="header__cart-img" />
                <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                            <h5 className="header__cart-item-name">{this.props.productname}</h5>
                            <div className="header__cart-item-price-wrap">
                                <span className="header__cart-item-price">{this.props.productprice}</span>
                                <span className="header__cart-item-multipl">x</span>
                                <span className="header__cart-item-qnt">2</span>
                            </div>
                        </div>
                    <div className="header__cart-item-body">
                        <span className="header__cart-item-description">
                        Phân loại :Bạc
                        </span>
                        <span className="header__cart-item-remove">xóa</span>
                    </div>
                </div>
                </li>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        numberProduct2: (cartProduct) => {
            dispatch({
                type:"CART_PRODUCT",
                cartProduct
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuTwoViewCardOne)