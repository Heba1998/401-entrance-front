
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';
import AllFavCard from './AllFavCard';

import UpdateForm from './UpdateForm'

class FavFlowers extends Component {
  constructor(props){
    super(props);
    this.state={
      url : 'http://localhost:3000',
      allFav:[],
      showFav:false,
      index:0
    }
  }

  componentDidMount= async () =>{
    axios.get(`${this.state.url}/fav`).then(result =>{
      this.setState({
        allFav:result.data,
        showFav:true
      })
    })
  }
  
 deleteFavItem = async (index) => {
  axios.delete(`${this.state.url}/fav/${index}?email=${this.props.auth0.user.email}`).then(result =>{
    this.setState({
      allFav:result.data,
      showFav:true,
      showModel:false
    })
  })
}

updateFavItem = async (event) => {
  event.preventDefault();
const reqbody={
  email:this.props.auth0.user.email,
  name:event.target.name.value,
  img:event.target.img.value,
  description:event.target.description.value
}
axios.put(`${this.state.url}/fav/${this.index}`).then(result =>{
  this.setState({
    allFav:result.data
  })
})
}

handleClose=()=>{
this.setState({
  showModel:false
})
}

handleShow=(index)=>{
  this.setState({
    showModel:true,
    index:index,
    name:this.state.allFav[index].name,
    img:this.state.allFav[index].img,
    description:this.state.allFav[index].description
  })
}
  render() {
    return(
      <>
        <h1>My Favorite Flowers</h1>

        <AllFavCard showFav={this.state.showFav} allFav={this.state.allFav} deleteFavItem={this.deleteFavItem} updateFavItem={this.updateFavItem}  />
      <UpdateForm showModel={this.state.showModel} handleShow={this.handleShow} handleClose={this.handleClose}/>
      
      </>
    )
  }
}

export default withAuth0(FavFlowers);
