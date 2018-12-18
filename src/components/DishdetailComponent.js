import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

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

    renderComments(comments) {
        if(comments !=null) {
            return (
                this.props.comments.map((comment)=> {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author} , {comment.date}</p>
                        </li>
                    )
                })
            )
           
            console.log('NOT null');

        } else {
            return (
                <div></div>
            )

            console.log('null');
        }
    }
    
    render() {
       
        //console.log(this.props.selectedComments);

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <ul className="list-unstyled text-left" >
                        <h4>Comments</h4>
                        {this.renderComments(this.props.comments)}
                    </ul>
                </div>
            </div> 
        );
    }
}

export default DishDetail;