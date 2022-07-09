import { ReactNode } from 'react';

const Heading = ({ title, children }: { title: string; children: ReactNode }) => (
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
