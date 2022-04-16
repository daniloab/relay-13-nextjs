import { graphql, useLazyLoadQuery, useFragment } from "react-relay";
import { withRelayBoundary } from "../ui/withRelayBoundary";
import {pagesIndex_Query$key} from "../__generated__/pagesIndex_Query.graphql";

const Index = (props) => {
  const response = useLazyLoadQuery(
    graphql`
      fragment pagesIndexQuery on Query {
        ...pagesIndex_Query
      }
    `,
    {},
    {
      fetchPolicy: "store-or-network",
      fetchKey: props.fetchKey,
    }
  );

  const query = useFragment<pagesIndex_Query$key>(
    graphql`
      fragment pagesIndex_Query on Query {
        countries {
          code
          name
        }
      }
    `,
    response
  );

  return <div>teste</div>;
};

export default withRelayBoundary(Index);
