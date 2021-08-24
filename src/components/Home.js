import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';
import AllDataApICard from './AllDataApICard';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      url : 'http://localhost:3000',
      allData:[],
      showData:false
    }
  }

componentDidMount= async () =>{
  axios.get(`${this.state.url}/api`).then(result =>{
    this.setState({
      allData:result.data,
      showData:true
    })
  })
}

addFavItem = async (item) => {
  const reqbody = {
    email : this.props.auth0.user.email,
    name:item.name,
    img:item.img,
    description:item.description
  }
  await axios.post(`${this.state.url}/fav`,reqbody);
}

  render() {
    return(
      <>
      <div>
        <h1>All Flowers</h1>
        <h4>Select your Favourites flower 🌷🌹🌼🥀💐</h4>
      </div>

      <AllDataApICard showData={this.state.showData} allData= {this.state.allData} addFavItem={this.addFavItem}/>

      </>
    )
  }
}

export default withAuth0(Home);