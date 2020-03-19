import {noteData} from './FirebaseConnect'

var redux = require('redux');
const  noteInitialState = {
    isEdit:false,
    isEdits:false,
    getItem:'',
    productNumber1:''
}
const allReducers = (state =  noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":            
            noteData.push(action.getItem)
            console.log('them du lieu ' + JSON.stringify(action.getItem) + 'thanh cong');
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "CHANGE_EDIT_STATURS":
            return {...state,isEdits:!state.isEdits}
        case "GET_DATA":
            return {...state,getItem:action.getData}
        case "CART_PRODUCT":
             return {...state,productNumber1:action.cartProduct}       
         default:
            return state
    }
}  
var Store = redux.createStore(allReducers);
Store.subscribe(function(){ 
    console.log(JSON.stringify(Store.getState()));    
})
export default Store;