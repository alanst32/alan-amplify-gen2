/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      address {
        address
        country
        postcode
        state
        __typename
      }
      category
      createdAt
      datetime
      id
      name
      privacySetting
      updatedAt
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        category
        createdAt
        datetime
        id
        name
        privacySetting
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
