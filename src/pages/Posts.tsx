import React from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import { TPost } from '../common/types/post';
import { Form, PostFormElements } from '../components/Form';
import { PostList } from '../components/PostList';
import { useState } from 'react';

const items: TPost[] = [
  {
    createdAt: Date.now(),
    nickName: 'Karel',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus porttitor turpis ac leo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aenean id metus id velit ullamcorper pulvinar. Phasellus faucibus molestie nisl. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Vivamus luctus egestas leo. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Integer imperdiet lectus quis justo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Mauris tincidunt sem sed arcu. Vivamus porttitor turpis ac leo.',
  },
];

export const Posts = () => {
  const [postItems, setPostItems] = useState<TPost[]>([]);

  const handleSubmit = (event: React.FormEvent<PostFormElements>) => {
    event.preventDefault();

    const newPost: TPost = {
      createdAt: Date.now(),
      nickName: event.currentTarget.elements.nick.value,
      content: event.currentTarget.elements.content.value,
    };

    setPostItems(oldItems => [...oldItems, newPost]);

    event.currentTarget.reset();
  };

  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">React</NavbarBrand>
      </Navbar>
      <Container className="my-5">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} />
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <PostList items={postItems} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
