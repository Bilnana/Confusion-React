import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){
        
          return (
            <Card>
              <CardImg width="100%" object src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
    }

    function RenderComments ({dish}) {
            return (
              dish.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                )
              })
            )  
    }

    const  DishDetail = (props) => {
        //console.log(this.props.selectedComments);
        if (props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                       <RenderDish dish = {props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <ul className="list-unstyled text-left" >
                            <h4>Comments</h4>
                            <RenderComments dish = {props.dish}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
        } else {
            return(
                <div></div>
            )
        }
    }

export default DishDetail;