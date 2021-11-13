import React from 'react';
import { Card } from 'react-bootstrap';
import Typical from 'react-typical'

const HomeHeader = () => {
    // background: `url(${bg})`,

    return (
        <div>
    <Card className="bg-dark text-white rounded-0">
        <Card.Img src="https://cdn.shopify.com/s/files/1/0355/9135/6553/files/slide2.png?v=1584689541)" alt="Card image" />
  
  <Card.ImgOverlay style={{display:'flex',justifyContent:'end',flexDirection:'column'}}>
    <Card.Title><h1>
            <span className=''>Game</span>
          <Typical className='something'
                loop={Infinity}
                wrapper="b"
                steps={[
                    ' Is Everything',
                    3000,  
                    ' For LIfe',
                    3000,
                    ' Is Money',
                    4000,
                    ' Is Happiness',
                    3000,
                    ' With Us',
                    3000
                ]}
            />
          </h1></Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className='primary-text-color'>Happy Gaming</Card.Text>
  </Card.ImgOverlay>
</Card>
            
        </div>
    );
};

export default HomeHeader;