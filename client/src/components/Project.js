import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BasicCard(props) {


  const mapItems = (items) => {

    return items.map((item) => (
    <>
    <div>

    <Card style={{ width: '18rem', height: '350px' }} className='border border-primary'>
      <Card.Img variant="top" src={item.image} className='rounded'/>
      <Card.Body>
        <Card.Title className='mt-2'>{item.title}</Card.Title>
        <Card.Text>
          {item.subtitle}
        </Card.Text>
        <Link variant="primary" className='btn btn-primary' to={item.link} target="_blank" rel="noopener noreferrer" >Check it out!</Link>
      </Card.Body>
    </Card>
    </div>
      <div style={{width: '1%'}}></div>
    </>
    ))}

  

  return (
    <>
    
<div className='row align-self-center col-12 justify-content-center'>

   { mapItems(props.items)}
    
   </div>

    </>
  );
}

export default BasicCard;