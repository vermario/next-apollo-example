import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Container, List, ListItem, ListItemContainer } from "./styles";
import ErrorMessage from "../ErrorMessage";

function UserList({ data: { loading, error, AllUsers } }) {
  if (error) return <ErrorMessage message="Error loading posts." />;

  if (AllUsers && AllUsers.length) {
    return (
      <Container>
        <h2>Users from graphql!</h2>
        <List>
          {AllUsers.map((user, index) => (
            <ListItem key={user.id}>
              <ListItemContainer>
                <p>
                  {user.name} {user.surname} : {user.email}
                </p>
              </ListItemContainer>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
  return <div>Loading...</div>;
}

const allUsers = gql`
  query {
    AllUsers {
      name
      surname
      email
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allUsers, {
  props: ({ data }) => ({
    data
  })
})(UserList);
