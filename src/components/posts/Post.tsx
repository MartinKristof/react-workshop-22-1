import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { TPost } from '../../common/types/post';

interface PostProps {
  createdAt: TPost['createdAt'];
  nickName: TPost['nickName'];
  content: TPost['content'];
}

export const Post: React.FC<PostProps> = ({ createdAt, nickName, content }) => (
  <Card>
    <CardBody>
      <CardTitle>{nickName}</CardTitle>
      <CardSubtitle>{new Date(createdAt).toLocaleDateString()}</CardSubtitle>
      <CardText>{content}</CardText>
    </CardBody>
  </Card>
);
