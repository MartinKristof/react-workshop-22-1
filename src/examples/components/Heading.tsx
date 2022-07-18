import React, { ReactNode } from 'react';

const Heading: React.FC<{ title?: string; children: ReactNode }> = ({ title = 'foo', children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

// class Heading extends React.Component<{
//   title: string;
//   children: ReactNode;
// }> {
//   render() {
//     const { title, children } = this.props;

//     return (
//       <div>
//         <h1>{title}</h1>
//         {children}
//       </div>
//     );
//   }
// }

export default Heading;
