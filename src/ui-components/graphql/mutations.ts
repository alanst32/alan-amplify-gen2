/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $condition: ModelEventConditionInput
    $input: CreateEventInput!
  ) {
    createEvent(condition: $condition, input: $input) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $condition: ModelEventConditionInput
    $input: DeleteEventInput!
  ) {
    deleteEvent(condition: $condition, input: $input) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $condition: ModelEventConditionInput
    $input: UpdateEventInput!
  ) {
    updateEvent(condition: $condition, input: $input) {
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
