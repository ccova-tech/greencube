/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPuntoRecoleccion = /* GraphQL */ `
  mutation CreatePuntoRecoleccion(
    $input: CreatePuntoRecoleccionInput!
    $condition: ModelPuntoRecoleccionConditionInput
  ) {
    createPuntoRecoleccion(input: $input, condition: $condition) {
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
export const updatePuntoRecoleccion = /* GraphQL */ `
  mutation UpdatePuntoRecoleccion(
    $input: UpdatePuntoRecoleccionInput!
    $condition: ModelPuntoRecoleccionConditionInput
  ) {
    updatePuntoRecoleccion(input: $input, condition: $condition) {
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
export const deletePuntoRecoleccion = /* GraphQL */ `
  mutation DeletePuntoRecoleccion(
    $input: DeletePuntoRecoleccionInput!
    $condition: ModelPuntoRecoleccionConditionInput
  ) {
    deletePuntoRecoleccion(input: $input, condition: $condition) {
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
