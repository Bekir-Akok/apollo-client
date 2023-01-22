import { gql } from "@apollo/client";

export const CREATE_FILM = gql`
  mutation createFilm($name: String!) {
    createFilm(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_FILM = gql`
  mutation updateFilm($id: String!) {
    updateFilm(id: $id) {
      id
      name
    }
  }
`;

export const DELETE_FILM = gql`
  mutation deleteFilm($id: String!) {
    deleteFilm(id: $id) {
      id
    }
  }
`;
