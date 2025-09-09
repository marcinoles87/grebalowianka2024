
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';


import img1 from '../img/main.jpg'



function Aktualnosci() {


  const actual = [
    {
      title : 'informacje o klubie' ,
      text : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      img : img1 ,
      info:'Grębałowianka informacje ogolne',
      patch:'info'

    } ,

    {
      title : 'zarząd klubu' ,
      text : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      img : img1 ,
      info:'informacje na temat zarządu',
      patch:'zarzad'

    } ,

    {
      title : 'informacje o obozie' ,
      text : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      img : img1 ,
      info:'oboz grebalowianki 2026',
      patch:'oboz'


    },

      {
      title : 'wynajem boiska' ,
      text : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      img : img1 ,
      info:'nowe boisko dla Gręby',
      patch:'wynajem'

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
    <Link to={`/${item.patch}`} className='main-item-link'>{item.info.substring(0,20)+'...'}</Link>
    
    </Card.Body>
  </Card>
      )
    })}
    </Container>
    </>
   
   
    
  )
}

export default Aktualnosci