import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  MongoID: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  AdminUserRemoveAll?: Maybe<Scalars['Boolean']['output']>;
  userCreate?: Maybe<User>;
};


export type MutationUserCreateArgs = {
  displayName: Scalars['String']['input'];
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  walletAddress: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  userConnectWallet?: Maybe<User>;
};


export type QueryUserConnectWalletArgs = {
  walletAddress: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['MongoID']['output'];
  displayName: Scalars['String']['output'];
  pictureUrl?: Maybe<Scalars['String']['output']>;
  walletAddress: Scalars['String']['output'];
};

export type UserCreateMutationVariables = Exact<{
  walletAddress: Scalars['String']['input'];
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
}>;


export type UserCreateMutation = { __typename?: 'Mutation', userCreate?: { __typename?: 'User', _id: any } | null };

export type UserConnectWalletQueryVariables = Exact<{
  walletAddress: Scalars['String']['input'];
}>;


export type UserConnectWalletQuery = { __typename?: 'Query', userConnectWallet?: { __typename?: 'User', pictureUrl?: string | null, displayName: string, _id: any } | null };


export const UserCreateDocument = gql`
    mutation UserCreate($walletAddress: String!, $pictureUrl: String, $displayName: String!) {
  userCreate(
    walletAddress: $walletAddress
    pictureUrl: $pictureUrl
    displayName: $displayName
  ) {
    _id
  }
}
    `;
export type UserCreateMutationFn = Apollo.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      walletAddress: // value for 'walletAddress'
 *      pictureUrl: // value for 'pictureUrl'
 *      displayName: // value for 'displayName'
 *   },
 * });
 */
export function useUserCreateMutation(baseOptions?: Apollo.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, options);
      }
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const UserConnectWalletDocument = gql`
    query UserConnectWallet($walletAddress: String!) {
  userConnectWallet(walletAddress: $walletAddress) {
    pictureUrl
    displayName
    _id
  }
}
    `;

/**
 * __useUserConnectWalletQuery__
 *
 * To run a query within a React component, call `useUserConnectWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserConnectWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserConnectWalletQuery({
 *   variables: {
 *      walletAddress: // value for 'walletAddress'
 *   },
 * });
 */
export function useUserConnectWalletQuery(baseOptions: Apollo.QueryHookOptions<UserConnectWalletQuery, UserConnectWalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserConnectWalletQuery, UserConnectWalletQueryVariables>(UserConnectWalletDocument, options);
      }
export function useUserConnectWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserConnectWalletQuery, UserConnectWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserConnectWalletQuery, UserConnectWalletQueryVariables>(UserConnectWalletDocument, options);
        }
export type UserConnectWalletQueryHookResult = ReturnType<typeof useUserConnectWalletQuery>;
export type UserConnectWalletLazyQueryHookResult = ReturnType<typeof useUserConnectWalletLazyQuery>;
export type UserConnectWalletQueryResult = Apollo.QueryResult<UserConnectWalletQuery, UserConnectWalletQueryVariables>;