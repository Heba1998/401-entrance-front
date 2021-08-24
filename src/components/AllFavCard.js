import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import { Button, Card } from 'react-bootstrap';


class AllFavCard extends Component{
    render(){
        return(
            <div>
                {this.props.showFav && this.props.allFav.map(item =>{
                    return(
                        <Card style={{ width: '18rem' , display:'inline-block'}}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                            {item.description}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{this.props.deleteFavItem(item)}}>delete</Button>
                            <Button variant="primary" onClick={()=>{this.props.updateFavItem(item)}}>update</Button>
                        </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}
export default AllFavCard