import React from 'react';
import { Row, Col } from 'reactstrap';
import { TPost } from '../common/types/post';
import { Form, PostFormElements } from '../components/posts/Form';
import { PostList } from '../components/posts/PostList';
import { useState } from 'react';
import { Layout } from '../components/Layout';

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
    <Layout>
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
    </Layout>
  );
};
