/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePuntoRecoleccion = /* GraphQL */ `
  subscription OnCreatePuntoRecoleccion(
    $filter: ModelSubscriptionPuntoRecoleccionFilterInput
    $owner: String
  ) {
    onCreatePuntoRecoleccion(filter: $filter, owner: $owner) {
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
export const onUpdatePuntoRecoleccion = /* GraphQL */ `
  subscription OnUpdatePuntoRecoleccion(
    $filter: ModelSubscriptionPuntoRecoleccionFilterInput
    $owner: String
  ) {
    onUpdatePuntoRecoleccion(filter: $filter, owner: $owner) {
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
export const onDeletePuntoRecoleccion = /* GraphQL */ `
  subscription OnDeletePuntoRecoleccion(
    $filter: ModelSubscriptionPuntoRecoleccionFilterInput
    $owner: String
  ) {
    onDeletePuntoRecoleccion(filter: $filter, owner: $owner) {
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
