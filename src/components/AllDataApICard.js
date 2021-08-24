import React, {component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { Component } from 'react';


class AllDataApICard extends Component{
    render(){
        return(
            <div>
                {this.props.showData && this.props.allData.map(item =>{
                    return(
                        <Card style={{ width: '18rem' , display:'inline-block'}}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{this.props.addFavItem(item)}}>Add to Favorite</Button>
                </Card.Body>
                </Card>
                                 
                                 )
                })}
            </div>
        )
    }
}

export default AllDataApICard