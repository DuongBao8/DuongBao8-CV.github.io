import React, { Component } from 'react'
import ContainerOne from './search_product/ContainerOne';
import AppSearchProduct from './AppSearchProduct';
import ContainerTow2 from './product/ContainerTow2';
import ContainerTow3 from './product/ContainerTow3';
import ContainerTow4 from './product/ContainerTow4';
import {noteData}  from '../FirebaseConnect';
import {connect} from 'react-redux'


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataFirebase:[]
            }
        }
    componentWillMount() {
        noteData.on('value', (notes) =>{
            var arrayData = [];
            notes.forEach(elemnet => {
                const key = elemnet.key;
                const product_name = elemnet.val().product_name;
                const product_price = elemnet.val().product_price;
                const image = elemnet.val().image;
                arrayData.push({
                    key:key,
                    product_name:product_name,
                    product_price:product_price,
                    image:image
                })
            });
            this.setState({
                dataFirebase:arrayData
                 });  
           })      
        }           
    render() {
        var ketqua = [];
        this.state.dataFirebase.forEach((items) => {
            if(items.product_name.indexOf(this.props.dl) !== -1){
            ketqua.push(items);
            } 
        });
        console.log('phần tìm kiếm:' + ' ' + ketqua);
        return (
        <div className="app__container">
          <div className="grid wide">
              <div className="row sm-gutter app__content">
                    <ContainerOne/>
                    <div className="col l-10 m-12 c-12">
                    <ContainerTow2/>
                    <ContainerTow3/>
                    <AppSearchProduct
                    dataUserProps={ketqua}
                    />
                    <ContainerTow4/>
                </div>
              </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dl: state.getItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
         getEditData: () => {
            dispatch({
                type:"GET_DATA"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
