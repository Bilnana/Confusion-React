import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish){
        if (dish != null){
          return (
            <Card>
              <CardImg width="100%" object src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
        } else {
          return(<div></div>);
        }
    }

    renderComments (dish) {
        if(dish !=null) {
            return (
              dish.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {comment.date}</p>
                    </li>
                )
              })
            )
        }       
    }

    render() {
       
        //console.log(this.props.selectedComments);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <ul className="list-unstyled text-left" >
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;