import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  concat,
  gql,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new createHttpLink({
  uri: "https://ark.iarmours.com/mind-castle-gql/graphql/notes",
});

export function getAccessToken() {
  return localStorage.getItem("token");
}

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    operation.setContext({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
});

export const GET_NOTES = gql`
  query getNotes($q: String, $limit: Int, $skip: Int) {
    notes(q: $q, limit: $limit, skip: $skip) {
      id
      title
      detail
      owner {
        username
      }
    }
  }
`;

export const ADD_Note = gql`
  mutation addNote($title: String!, $detail: String!) {
    addNote(title: $title, detail: $detail) {
      id
      title
      detail
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation deleteNote($id: Int!) {
    deleteNote(id: $id)
  }
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($id: Int!, $title: String!, $detail: String!) {
    updateNote(id: $id, title: $title, detail: $detail) {
      id
      title
      detail
    }
  }
`;