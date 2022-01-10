import axios from 'axios';
import '../scss_files/product_list_style.scss';
import '../scss_files/responsive_product_list.scss';
import React,{ useRef } from 'react';
import {withRouter} from 'react-router-dom';
import { Component } from 'react';
//import '../scss_files/input_style.scss';
import RecordList,{validate}  from './List';

 class product_list extends Component {
    handleClick() {
        this.props.history.push('/add_product');
        this.click = this.click.bind(this);
      }

    constructor(props) {
        super(props);
        this.state = {products: []};
      //  this.validate = this.validate.bind(this);
      //  this.remember = React.createRef();
        
     
     
    }
    


    componentDidMount() {
        axios.get('http://localhost/scandiweb-test/src/backend/list.php')
        .then(response => {
            this.setState({ products: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })

          
    }
    
   
    usersList(){
        return this.state.products.map(function(object,i){
        return <RecordList obj={object} key={i}/>
        });
    } 
        
            

    nextPath(path) {
        this.props.history.push(path);
    }

    click() {
        axios.get('http://localhost/scandiweb-test/src/backend/mass_delete.php')
        .then(console.log('Mass Deleted'))
        .catch(err => console.log(err))
    }

    render() {
    
        return (
            <div className='body_style'>

                <h3 className = 'title'>Product List</h3>
            

                <button class="button-add" role="button" onClick={() => this.nextPath('/add_product') }>ADD</button>
                <button class="button-delete" role="button" id="btn" onClick = {this.click}  >MASS DELETE</button>

                
                <div className = 'test'></div>
                
                <table className = "table-page" >
                    <tbody className = 'test2'>
                        
                     {this.usersList()}

                    </tbody>
                </table>                 
            </div>
        )
    }
}

export default withRouter (product_list);