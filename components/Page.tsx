// import React, { Suspense } from "react";
//
// import { useFragment, graphql } from "react-relay";
// import { Page_page$key } from "../__generated__/Page_page.graphql";
//
// const Page = (props) => {
//   const page = useFragment<Page_page$key>(
//     graphql`
//       fragment Page_page on Page {
//         users {
//           id
//           name
//         }
//       }
//     `,
//     props.page
//   );
//
//   return (
//     <div>
//       <div>Blog posts</div>
//       <div>
//         <Suspense fallback={null}>
//           <ul className="space-y-5 mb-10">
//             {page?.users.map(({ user }) => {
//               return <div>{user.name}</div>;
//               // return <RelayMatchContainer key={node.__id} match={node} />;
//             })}
//           </ul>
//         </Suspense>
//         {/*<LoadMore*/}
//         {/*  disabled={isLoadingNext || !hasNext}*/}
//         {/*  onClick={() => {*/}
//         {/*    loadNext(1);*/}
//         {/*  }}*/}
//         {/*/>*/}
//       </div>
//     </div>
//   );
// };
//
// export default Page;
//
// // function LoadMore({ onClick, disabled }) {
// //   return (
// //     <Button onClick={onClick} disabled={disabled}>
// //       Load More
// //     </Button>
// //   );
// // }
