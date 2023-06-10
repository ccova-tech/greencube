/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPuntoRecoleccion = /* GraphQL */ `
  query GetPuntoRecoleccion($id: ID!) {
    getPuntoRecoleccion(id: $id) {
      id
      puntoRecoleccion
      nombre
      direccionComuna
      direccionCalle
      direccionNumero
      telefono
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPuntoRecoleccions = /* GraphQL */ `
  query ListPuntoRecoleccions(
    $filter: ModelPuntoRecoleccionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPuntoRecoleccions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        puntoRecoleccion
        nombre
        direccionComuna
        direccionCalle
        direccionNumero
        telefono
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
