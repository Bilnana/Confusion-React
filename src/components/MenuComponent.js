import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

  function RenderMenu ({dish, onClick}) {
    return (
      <Link to={`/menu/${dish.id}`} >
        <Card key={dish.id}>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </Link>
    );
  }

  const Menu = (props) => {
      const menu = props.dishes.map((dish) => {
          return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
               <RenderMenu dish = {dish}/>
            </div>
          );
      });

      return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
  }

export default Menu;