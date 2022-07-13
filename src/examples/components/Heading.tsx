import React, { ReactNode } from 'react';

const Heading: React.FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
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
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         {this.props.children}
//       </div>
//     );
//   }
// }

export default Heading;
