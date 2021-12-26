import axios from 'axios';
import {withRouter} from 'react-router-dom';
import '../scss_files/add_product_style.scss';
import '../scss_files/error_popup.scss';
import React, { Component } from 'react';

const defaultState = {

  type: '',
  sku:'',
  name:'',
  price:'',
  book:'',
  size: '',
  height: '',
  width: '',
  length: '',
  priceError: '',
  typeError: '',
  skuError: '',
  bookError: '',
  nameError: ''

}

class add_product extends Component {
  handleClick() {
    this.props.history.push('/product_list');
  }
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    //this.onChangeType = this.onChangeType.bind(this);
    this.onChangeAttribute = this.onChangeAttribute.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = defaultState;

}

/*onChangeType(e) {
  this.setState({
      type:e.target.value
  })
}*/

onChangeAttribute(e) {
  this.setState({
    [e.target.name]:e.target.value

  })
}
nextPath(path) {
  this.props.history.push(path);
}

validate = () => {
 
 let typeError = '';
 let skuError = '';
 let nameError = '';
 let priceError = '';
 let bookError = '';
 let sizeError = '';
 let heightError = '';
 let widthError = '';
 let lengthError = '';


 if (!this.state.price.match(/^[0-9]+$/)){  /// use the 'match()' method to not allow the 'priceError event'
  priceError = 'Please insert a price';
}else if(this.state.price === ''){
  priceError = 'Please insert a psasdasdasd';
}
 if (!this.state.type){
  typeError = 'Please select the type';
}
 if (!this.state.sku){
   skuError = 'Please, insert the sku';
 }
 if (!this.state.name){
  nameError = 'Please select the name';
}


if (priceError || typeError || skuError || nameError) {
     this.setState({priceError,typeError,skuError,nameError});
     return false;
   }
 

 return true;

}

onSubmit(e) {
  e.preventDefault();

 const isValid = this.validate();

 if(isValid) {

  const obj = {
    type:this.state.type,
    sku:this.state.sku,
    name:this.state.name,
    price:this.state.price,
    book:this.state.book ,
    size:this.state.size ,
    height:this.state.height + 'x', 
    width:this.state.width + 'x',
    length:this.state.length 
    
    }

  //clear the form

  axios.post("http://localhost/scandiweb-test/src/backend/insert.php" ,obj) 
 .then(res => console.log(res.data));
 

 this.setState(defaultState);

 };  

}

    renderSelectedForm(type) {
        switch(type) {
            
      
          case '1':
            return  <form className = 'weight-style'>
                    <label for="fname">Weight</label>
                    <input type="text" name="book"
                    value = {this.state.book}
                    onChange={this.onChangeAttribute}></input>
                    </form>
        
      
          case '2':
            return  <form>
                    <label for="fname">Size(MB)</label>
                    <input type="text" name="size"
                    value = {this.state.size}  
                    onChange={this.onChangeAttribute}></input>
                    </form>;
      
          case '3':
            return  <form >
                    <label for="height">Height</label>
                    <input name="height" 
                    value = {this.state.height}
                    onChange={this.onChangeAttribute}
                    />
      
                    <label for="width">Width</label>
                    <input name="width"
                    value = {this.state.width}
                    onChange={this.onChangeAttribute} 
                    />
      
                    <label for="length">Length</label>
                    <input name="length" 
                    value = {this.state.length}
                    onChange={this.onChangeAttribute}
                    />
                  </form>;
            
          default:
            return null;           
        }
      }
      
       handleChange(e) {
        this.setState({
          type:e.target.value
      
        })
      }
      

    render() {
    return (
        <div>
          <button class="button-add" role="button" onClick={this.onSubmit}>SAVE</button>
                <button class="button-delete" role="button" onClick={() => this.nextPath('/product_list') }>CANCEL</button>
          <div className = 'header'></div>
          <h1 className="title">Add Product</h1>

          <div className = 'input_position'>
          

                    <label>SKU</label>
                    <input name = "sku" value = {this.state.sku}
                    onChange={this.onChangeAttribute}/>
                    <small style={{color: "red"}}>{this.state.skuError}</small>

                    
                     <label>Name</label>
                    <input name = "name" value = {this.state.name}
                    onChange={this.onChangeAttribute}/><br/>
                    <small style={{color: "red"}}>{this.state.nameError}</small>

                    <label>Price</label>
                    <input name = "price" value = {this.state.price}
                    onChange={this.onChangeAttribute}/><br/>
                    <small style={{color: "red"}}>{this.state.priceError}</small> 

        <form >
           <select name="type"  value={this.state.type} onChange={this.handleChange}>
               <option value="" selected="selected">Type</option>
               <option value="1">Book</option>
               <option value="2">DVD</option>
               <option value="3">Furniture</option>
           </select><br/>
           <small style={{color: "red"}}>{this.state.typeError}</small>
           
        </form>
        {this.renderSelectedForm(this.state.type)}
        


        </div>
        
    </div>

    )
}

}

export default withRouter (add_product)