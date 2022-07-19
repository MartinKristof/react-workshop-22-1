import React from 'react';
import { TPost } from './common/types/post';
import { PostList } from './components/PostList';

const items: TPost[] = [
  {
    createdAt: Date.now(),
    nickName: 'Karel',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus porttitor turpis ac leo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aenean id metus id velit ullamcorper pulvinar. Phasellus faucibus molestie nisl. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Vivamus luctus egestas leo. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Integer imperdiet lectus quis justo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Mauris tincidunt sem sed arcu. Vivamus porttitor turpis ac leo.',
  },
];

const App = () => (
  <div>
    <PostList items={items} />
  </div>
);

export default App;
