import React, {Component} from "react";
import './add_product';
import '../backend/delete.php'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import '../scss_files/product_list_style.scss';

export default  class RecordList extends Component {
    constructor() {
        super();
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }

    
    delete(e) {
      
      axios.get('https://nastase-valentin.000webhostapp.com/delete.php?id='+this.props.obj.d_sku)
        .then(this.setState({ redirect: true}))
        .catch(err => console.log(err))
      
  }
 
    render() {

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/product_list'/>;
        }

        return(
            
            <div className="box">
               <button className ="delete" role="button" onClick={e => this.delete(e)} >DELETE</button>
            
            <td className = 'a'>{this.props.obj.d_sku}</td>

            <td className = 'a'>{this.props.obj.d_name}</td>
  
            <td className = 'a'>{this.props.obj.d_price + "$"}</td>
  
            <td className = 'a'>{this.props.obj.d_attribute}</td>
            

            </div>
        )
    }
}

      
   



    

