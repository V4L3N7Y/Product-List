import axios from 'axios';
import {withRouter} from 'react-router-dom';
import '../scss_files/add_product_style.scss';
import '../scss_files/error_popup.scss';
import '../scss_files/input_style.scss';
import '../scss_files/responsive_add_product.scss';
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
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ obj})
    };
    fetch('https://nastase-valentin.000webhostapp.com/insert.php', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));


 /* axios.post("https://nastase-valentin.000webhostapp.com/insert.php" ,obj) 
  .then(res => console.log(res.data)); */
 
 this.setState(defaultState);

 };  

}

    renderSelectedForm(type) {
        switch(type) {
            
      
          case '1':
            return  <form>  
                    <input type="text" className='inputs' placeholder="Weight" name="book"
                    value = {this.state.book}
                    onChange={this.onChangeAttribute}></input>
                    </form>;
        
      
          case '2':
            return  <form>
                    <input className='inputs' placeholder="Size(MB)"  type="text" name="size"
                    value = {this.state.size}  
                    onChange={this.onChangeAttribute}></input>
                    </form>;
      
          case '3':
            return  <div >
                    
                    <input className='inputs' placeholder="Height" name="height" 
                    value = {this.state.height}
                    onChange={this.onChangeAttribute}
                    /><br/>
      
                   
                    <input className='inputs' placeholder="Width" name="width"
                    value = {this.state.width}
                    onChange={this.onChangeAttribute} 
                    /><br/>
      
                    
                    <input className='inputs' placeholder="Length" name="length" 
                    value = {this.state.length}
                    onChange={this.onChangeAttribute}
                    />
                  </div>;
            
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
              <div className= "button_position">
               <button class="button-add" role="button" onClick={this.onSubmit}>SAVE</button>
                <button class="button-delete" role="button" onClick={() => this.setState(defaultState) }>CANCEL</button>
                </div>
                <a class= "a_style" onClick={() => this.nextPath('/product_list')}>Go to Product List</a>
          <div className = 'header'></div>
          <h1 className="title_add">Add Product</h1>

          <div className = 'input_position'> 
          
                    
                    <input className="Sku" placeholder="Sku" name = "sku" value = {this.state.sku}
                    onChange={this.onChangeAttribute}/><br/>
                    <small className='error_sku' style={{color: "red"}}>{this.state.skuError}</small><br/>

                    
                     
                    <input className="Name" placeholder="Name" name = "name" value = {this.state.name}
                    onChange={this.onChangeAttribute}/><br/>
                    <small className='error_name' style={{color: "red"}}>{this.state.nameError}</small><br/>

                    
                    <input className="Price" placeholder="Price" name = "price" value = {this.state.price}
                    onChange={this.onChangeAttribute}/><br/>
                    <small className='error_price' style={{color: "red"}}>{this.state.priceError}</small>

        <form >
           <select className="select" name="type"  value={this.state.type} onChange={this.handleChange}><br/>
               <option value="" selected="selected">Type</option>
               <option value="1">Book</option>
               <option value="2">DVD</option>
               <option value="3">Furniture</option>
           </select><br/>
           <small className='error_type' style={{color: "red"}}>{this.state.typeError}</small>
           
        </form>
        {this.renderSelectedForm(this.state.type)}
        


        </div>
         
        
        </div>

    )
}

}

export default withRouter (add_product)