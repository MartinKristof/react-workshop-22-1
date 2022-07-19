import React, { FC } from 'react';
import { List } from 'reactstrap';
import { TPost } from '../../common/types/post';
import { Post } from './Post';

interface Props {
  items: TPost[];
}

export const PostList: FC<Props> = ({ items }) => (
  <List type="unstyled">
    {items.map(item => (
      <li key={`${item.nickName}-${item.createdAt.toString()}`}>
        <Post {...item} />
      </li>
    ))}
  </List>
);
