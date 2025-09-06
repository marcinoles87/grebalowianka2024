
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';


import img1 from '../img/main.jpg'



function Aktualnosci() {


  const actual = [
    {
      title : 'oboz grebalowianki' ,
      text : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      img : img1 ,

    } ,

    {
      title : 'oboz grebalowianki' ,
      text : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      img : img1 ,

    } ,

    {
      title : 'oboz grebalowianki' ,
      text : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      img : img1 ,

    }

  ]


  return (
    <>
   
     <Container className='aktualnosci'>
      
         {actual.map( (item , index) => {
      return(
        <Card style={{ width: '18rem' }}   key={index}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.text}
      </Card.Text>
    <Link to={'/info'} className='main-item-link'>Info</Link>
    
    </Card.Body>
  </Card>
      )
    })}
    </Container>
    </>
   
   
    
  )
}

export default Aktualnosci