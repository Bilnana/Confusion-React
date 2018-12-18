import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(selectedDish){
        if (selectedDish != null){
          return (
            <Card>
              <CardImg width="100%" object src={selectedDish.image} alt={selectedDish.name} />
              <CardBody>
                <CardTitle>{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
              </CardBody>
            </Card>
          );
        } else {
          return(<div></div>);
        }
    }

    renderComment(selectedComments) {
        if(selectedComments !=null) {
            return (
                this.props.selectedComments.map((comment)=> {
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
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <ul className="list-unstyled text-left" >
                        <h4>Comments</h4>
                        {this.renderComment(this.props.selectedComments)}
                    </ul>
                </div>
            </div> 
        );
    }
}

export default DishDetail;