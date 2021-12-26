import React, {Component} from "react";
import './add_product';
import '../backend/delete.php'
import axios from 'axios';
import $ from 'jquery';
import '../scss_files/product_list_style.scss';

export default  class RecordList extends Component {
    constructor() {
        super();
        this.test = this.test.bind(this);
     
    }

    
    test(e) {
      
      axios.get('http://localhost/scandiweb-test/src/backend/delete.php?id='+this.props.obj.d_sku)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
      
  }
 
    render() {


        return(
            
            <div className="box">
               <button className ="delete" role="button" onClick={e => this.test(e)} >DELETE</button>
            
            <td className = 'a'>{this.props.obj.d_sku}</td>

            <td className = 'a'>{this.props.obj.d_name}</td>
  
            <td className = 'a'>{this.props.obj.d_price + "$"}</td>
  
            <td className = 'a'>{this.props.obj.d_attribute}</td>
            

            </div>
        )
    }
}

      
   



    

