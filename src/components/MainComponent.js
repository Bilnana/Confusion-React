import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';


import { Navbar, NavbarBrand } from 'reactstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish : null,
     //selectedComments : null
    };
  }

  onDishSelect(dishId){
    this.setState({
      selectedDish : dishId,
      //selectedComments : selectedDish.comments
    });

    // console.log(dishId);
  }

  render() {
    console.log(this.state.selectedComments);
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
