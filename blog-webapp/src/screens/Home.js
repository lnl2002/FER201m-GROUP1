import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

const Home = () => {
  // Dữ liệu các món mới nhất
  const newestRecipes = [
    {
      id: 1,
      name: 'Món mới 1',
      image: 'path/to/newest_recipe_1.jpg',
      description: 'Mô tả công thức 1',
    },
    {
      id: 2,
      name: 'Món mới 2',
      image: 'path/to/newest_recipe_2.jpg',
      description: 'Mô tả công thức 2',
    },
    // Thêm các món mới khác tương tự
  ];

  // Dữ liệu các món hot nhất
  const popularRecipes = [
    {
      id: 1,
      name: 'Món hot 1',
      image: 'path/to/popular_recipe_1.jpg',
      description: 'Mô tả công thức 1',
    },
    {
      id: 2,
      name: 'Món hot 2',
      image: 'path/to/popular_recipe_2.jpg',
      description: 'Mô tả công thức 2',
    },
    // Thêm các món hot khác tương tự
  ];

  // Dữ liệu các món lượt xem nhiều nhất
  const trendingRecipes = [
    {
      id: 1,
      name: 'Món hot 1',
      image: 'path/to/trending_recipe_1.jpg',
      description: 'Mô tả công thức 1',
    },
    {
      id: 2,
      name: 'Món hot 2',
      image: 'path/to/trending_recipe_2.jpg',
      description: 'Mô tả công thức 2',
    },
    // Thêm các món lượt xem nhiều khác tương tự
  ];

  return (
    <DefaultLayout>
    <Container>
      <Row>
        <Col>
          <h1>Các món mới nhất</h1>
          <Carousel>
            {newestRecipes.map((recipe) => (
              <Carousel.Item key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <img className="d-block w-100" src={recipe.image} alt={recipe.name} />
                  <Carousel.Caption>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>Các món hot nhất</h1>
          <Carousel>
            {popularRecipes.map((recipe) => (
              <Carousel.Item key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <img className="d-block w-100" src={recipe.image} alt={recipe.name} />
                  <Carousel.Caption>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>Các món lượt xem nhiều nhất</h1>
          <Carousel>
            {trendingRecipes.map((recipe) => (
              <Carousel.Item key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <img className="d-block w-100" src={recipe.image} alt={recipe.name} />
                  <Carousel.Caption>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
    </DefaultLayout>
  );
};

export default Home;
