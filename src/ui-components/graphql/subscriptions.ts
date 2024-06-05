/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
