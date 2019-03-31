import Main from "../lib/layout";
import Header from "../components/Header";
import UserList from "../components/UserList";
import withData from "../lib/apollo";

export default withData(props => (
  <Main>
    <Header />
    <UserList />
  </Main>
));
