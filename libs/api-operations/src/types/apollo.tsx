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
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
  MongoID: { input: any; output: any; }
};

export type CreateOneOrganizationInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Array<InputMaybe<EnumOrganizationIndustry>>>;
  members?: InputMaybe<Array<InputMaybe<OrganizationMembersInput>>>;
  name: Scalars['String']['input'];
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<EnumOrganizationSize>;
  state?: InputMaybe<Scalars['String']['input']>;
  techStack?: InputMaybe<Array<InputMaybe<EnumOrganizationTechStack>>>;
  typeOfOrganization?: InputMaybe<Array<InputMaybe<EnumOrganizationTypeOfOrganization>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export enum EnumOrganizationIndustry {
  Agriculture = 'Agriculture',
  Construction = 'Construction',
  Education = 'Education',
  Energy = 'Energy',
  Entertainment = 'Entertainment',
  Finance = 'Finance',
  Government = 'Government',
  Healthcare = 'Healthcare',
  Hospitality = 'Hospitality',
  Manufacturing = 'Manufacturing',
  Media = 'Media',
  Nonprofit = 'Nonprofit',
  Other = 'Other',
  Retail = 'Retail',
  Technology = 'Technology',
  Transportation = 'Transportation'
}

export enum EnumOrganizationMembersRole {
  Admin = 'Admin',
  Member = 'Member'
}

export enum EnumOrganizationSize {
  A_1_10 = 'a_1_10',
  A_11_50 = 'a_11_50',
  A_51_200 = 'a_51_200',
  A_201_500 = 'a_201_500',
  A_501_1000 = 'a_501_1000',
  A_1001_5000 = 'a_1001_5000',
  A_5001_10000 = 'a_5001_10000',
  A_10000 = 'a_10000_'
}

export enum EnumOrganizationTechStack {
  AspNet = 'ASP_NET',
  Aws = 'AWS',
  Angular = 'Angular',
  ArtificialIntelligence = 'Artificial_Intelligence',
  Azure = 'Azure',
  BigData = 'Big_Data',
  Bitbucket = 'Bitbucket',
  Blockchain = 'Blockchain',
  C = 'C_',
  CircleCi = 'CircleCI',
  Confluence = 'Confluence',
  Django = 'Django',
  Docker = 'Docker',
  ExpressJs = 'Express_js',
  Firebase = 'Firebase',
  Flask = 'Flask',
  Git = 'Git',
  GitHub = 'GitHub',
  GitLab = 'GitLab',
  Go = 'Go',
  GoogleCloud = 'Google_Cloud',
  GraphQl = 'GraphQL',
  Heroku = 'Heroku',
  Jira = 'JIRA',
  Java = 'Java',
  JavaScript = 'JavaScript',
  Jenkins = 'Jenkins',
  Keras = 'Keras',
  Kotlin = 'Kotlin',
  Kubernetes = 'Kubernetes',
  Laravel = 'Laravel',
  MachineLearning = 'Machine_Learning',
  NoSql = 'NoSQL',
  NodeJs = 'Node_js',
  Other = 'Other',
  Php = 'PHP',
  PyTorch = 'PyTorch',
  Python = 'Python',
  RestApi = 'REST_API',
  React = 'React',
  Ruby = 'Ruby',
  RubyOnRails = 'Ruby_on_Rails',
  Rust = 'Rust',
  Sql = 'SQL',
  Slack = 'Slack',
  Spring = 'Spring',
  Swift = 'Swift',
  TensorFlow = 'TensorFlow',
  TravisCi = 'Travis_CI',
  Trello = 'Trello',
  VueJs = 'Vue_js',
  WebSocket = 'WebSocket'
}

export enum EnumOrganizationTypeOfOrganization {
  Corporation = 'Corporation',
  EducationalInstitution = 'Educational_Institution',
  GovernmentAgency = 'Government_Agency',
  Ngo = 'NGO',
  Nonprofit = 'Nonprofit',
  Other = 'Other',
  SmallBusiness = 'Small_Business',
  Startup = 'Startup'
}

export enum EnumUserAccessibilityNeeds {
  CognitiveImpairment = 'Cognitive_Impairment',
  HearingImpairment = 'Hearing_Impairment',
  MobilityImpairment = 'Mobility_Impairment',
  None = 'None',
  Other = 'Other',
  VisionImpairment = 'Vision_Impairment'
}

export enum EnumUserEducation {
  AssociateDegree = 'Associate_Degree',
  BachelorSDegree = 'Bachelor_s_Degree',
  Bootcamp = 'Bootcamp',
  Certification = 'Certification',
  HighSchoolDiploma = 'High_School_Diploma',
  Jd = 'JD',
  Mba = 'MBA',
  Md = 'MD',
  MasterSDegree = 'Master_s_Degree',
  OnlineCourse = 'Online_Course',
  Other = 'Other',
  PhD = 'Ph_D_'
}

export enum EnumUserEmploymentIndustry {
  Agriculture = 'Agriculture',
  Construction = 'Construction',
  Education = 'Education',
  Energy = 'Energy',
  Entertainment = 'Entertainment',
  Finance = 'Finance',
  Government = 'Government',
  Healthcare = 'Healthcare',
  Hospitality = 'Hospitality',
  Manufacturing = 'Manufacturing',
  Media = 'Media',
  Other = 'Other',
  Retail = 'Retail',
  Technology = 'Technology'
}

export enum EnumUserEmploymentStatus {
  Employed = 'Employed',
  Other = 'Other',
  Retired = 'Retired',
  SelfEmployed = 'Self_Employed',
  Student = 'Student',
  Unemployed = 'Unemployed'
}

export enum EnumUserGender {
  Female = 'Female',
  Male = 'Male',
  NonBinary = 'Non_Binary',
  Other = 'Other',
  PreferNotToSay = 'Prefer_Not_to_Say',
  Transgender = 'Transgender'
}

export enum EnumUserHealthStatus {
  Excellent = 'Excellent',
  Fair = 'Fair',
  Good = 'Good',
  Poor = 'Poor',
  PreferNotToSay = 'Prefer_Not_to_Say'
}

export enum EnumUserHouseholdIncome {
  LessThan_25_000 = 'Less_than__25_000',
  Over_200_000 = 'Over__200_000',
  PreferNotToSay = 'Prefer_Not_to_Say',
  '25_000_50_000' = '_25_000____50_000',
  '50_001_75_000' = '_50_001____75_000',
  '75_001_100_000' = '_75_001____100_000',
  '100_001_150_000' = '_100_001____150_000',
  '150_001_200_000' = '_150_001____200_000'
}

export enum EnumUserInterests {
  Art = 'Art',
  Cooking = 'Cooking',
  Fashion = 'Fashion',
  Fitness = 'Fitness',
  Food = 'Food',
  Gaming = 'Gaming',
  Hiking = 'Hiking',
  History = 'History',
  Movies = 'Movies',
  Music = 'Music',
  Nature = 'Nature',
  Other = 'Other',
  OutdoorActivities = 'Outdoor_Activities',
  Pets = 'Pets',
  Photography = 'Photography',
  Politics = 'Politics',
  Reading = 'Reading',
  Religion = 'Religion',
  Science = 'Science',
  Sports = 'Sports',
  Technology = 'Technology',
  Travel = 'Travel',
  Volunteering = 'Volunteering',
  Writing = 'Writing'
}

export enum EnumUserLanguages {
  Arabic = 'Arabic',
  Bengali = 'Bengali',
  English = 'English',
  French = 'French',
  German = 'German',
  Hindi = 'Hindi',
  Japanese = 'Japanese',
  Mandarin = 'Mandarin',
  Other = 'Other',
  Portuguese = 'Portuguese',
  Punjabi = 'Punjabi',
  Russian = 'Russian',
  Spanish = 'Spanish'
}

export enum EnumUserMaritalStatus {
  Divorced = 'Divorced',
  DomesticPartnership = 'Domestic_Partnership',
  Married = 'Married',
  Other = 'Other',
  Separated = 'Separated',
  Single = 'Single',
  Widowed = 'Widowed'
}

export enum EnumUserPoliticalAffiliation {
  Democrat = 'Democrat',
  GreenParty = 'Green_Party',
  Independent = 'Independent',
  Libertarian = 'Libertarian',
  None = 'None',
  Other = 'Other',
  PreferNotToSay = 'Prefer_Not_to_Say',
  Republican = 'Republican'
}

export enum EnumUserSkills {
  AnalyticalSkills = 'Analytical_Skills',
  ArtificialIntelligence = 'Artificial_Intelligence',
  Business = 'Business',
  Communication = 'Communication',
  Creativity = 'Creativity',
  CriticalThinking = 'Critical_Thinking',
  Cybersecurity = 'Cybersecurity',
  DataAnalysis = 'Data_Analysis',
  DatabaseManagement = 'Database_Management',
  Engineering = 'Engineering',
  ForeignLanguages = 'Foreign_Languages',
  Leadership = 'Leadership',
  MachineLearning = 'Machine_Learning',
  Mathematics = 'Mathematics',
  Networking = 'Networking',
  Other = 'Other',
  PresentationSkills = 'Presentation_Skills',
  ProblemSolving = 'Problem_Solving',
  Programming = 'Programming',
  ProjectManagement = 'Project_Management',
  Research = 'Research',
  Science = 'Science',
  SoftwareDevelopment = 'Software_Development',
  Teamwork = 'Teamwork',
  TimeManagement = 'Time_Management',
  UiUxDesign = 'UI_UX_Design',
  Writing = 'Writing'
}

export enum EnumUserTechSkills {
  ArtificialIntelligence = 'Artificial_Intelligence',
  BackEndDevelopment = 'Back_end_Development',
  Blockchain = 'Blockchain',
  CloudComputing = 'Cloud_Computing',
  Cybersecurity = 'Cybersecurity',
  DataScience = 'Data_Science',
  DatabaseManagement = 'Database_Management',
  DevOps = 'DevOps',
  FrontEndDevelopment = 'Front_end_Development',
  FullStackDevelopment = 'Full_stack_Development',
  GameDevelopment = 'Game_Development',
  IoT = 'IoT',
  MachineLearning = 'Machine_Learning',
  MobileAppDevelopment = 'Mobile_App_Development',
  Other = 'Other',
  UiUxDesign = 'UI_UX_Design',
  WebDevelopment = 'Web_Development'
}

export enum EnumUserVeteranStatus {
  ActiveDuty = 'Active_Duty',
  NotAVeteran = 'Not_a_Veteran',
  PreferNotToSay = 'Prefer_Not_to_Say',
  Reserve = 'Reserve',
  Veteran = 'Veteran'
}

export enum EnumUserWorkExperience {
  Consultant = 'Consultant',
  Contract = 'Contract',
  Director = 'Director',
  EntryLevel = 'Entry_Level',
  Executive = 'Executive',
  Freelance = 'Freelance',
  FullTime = 'Full_Time',
  Internship = 'Internship',
  Manager = 'Manager',
  MidLevel = 'Mid_Level',
  Other = 'Other',
  PartTime = 'Part_Time',
  Senior = 'Senior'
}

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']['output']>;
  /** MongoDB error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AdminOrganizationRemoveAll?: Maybe<Scalars['Boolean']['output']>;
  AdminUserRemoveAll?: Maybe<Scalars['Boolean']['output']>;
  organizationCreate?: Maybe<Organization>;
  userCreate?: Maybe<User>;
  userUpdate?: Maybe<User>;
};


export type MutationOrganizationCreateArgs = {
  record: CreateOneOrganizationInput;
  userId: Scalars['MongoID']['input'];
};


export type MutationUserCreateArgs = {
  displayName: Scalars['String']['input'];
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  walletAddress: Scalars['String']['input'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['MongoID']['input'];
  record: UpdateOneUserInput;
};

export type Organization = {
  __typename?: 'Organization';
  _id: Scalars['MongoID']['output'];
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Array<Maybe<EnumOrganizationIndustry>>>;
  members?: Maybe<Array<Maybe<OrganizationAllMembers>>>;
  name: Scalars['String']['output'];
  pictureUrl?: Maybe<Scalars['String']['output']>;
  size?: Maybe<EnumOrganizationSize>;
  state?: Maybe<Scalars['String']['output']>;
  techStack?: Maybe<Array<Maybe<EnumOrganizationTechStack>>>;
  typeOfOrganization?: Maybe<Array<Maybe<EnumOrganizationTypeOfOrganization>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type OrganizationAllMembers = {
  __typename?: 'OrganizationAllMembers';
  role?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type OrganizationMembersInput = {
  role?: InputMaybe<EnumOrganizationMembersRole>;
  user?: InputMaybe<Scalars['MongoID']['input']>;
};

export type Query = {
  __typename?: 'Query';
  organizationList?: Maybe<Array<Maybe<Organization>>>;
  userConnectWallet?: Maybe<User>;
};


export type QueryOrganizationListArgs = {
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};


export type QueryUserConnectWalletArgs = {
  walletAddress: Scalars['String']['input'];
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']['output']>;
};

export enum SortFindManyOrganizationInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateOneUserInput = {
  accessibilityNeeds?: InputMaybe<EnumUserAccessibilityNeeds>;
  age?: InputMaybe<Scalars['Float']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  education?: InputMaybe<Array<InputMaybe<EnumUserEducation>>>;
  employmentIndustry?: InputMaybe<EnumUserEmploymentIndustry>;
  employmentStatus?: InputMaybe<EnumUserEmploymentStatus>;
  gender?: InputMaybe<EnumUserGender>;
  healthStatus?: InputMaybe<EnumUserHealthStatus>;
  householdIncome?: InputMaybe<EnumUserHouseholdIncome>;
  householdSize?: InputMaybe<Scalars['Float']['input']>;
  interests?: InputMaybe<Array<InputMaybe<EnumUserInterests>>>;
  languages?: InputMaybe<Array<InputMaybe<EnumUserLanguages>>>;
  maritalStatus?: InputMaybe<EnumUserMaritalStatus>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  politicalAffiliation?: InputMaybe<EnumUserPoliticalAffiliation>;
  religion?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<EnumUserSkills>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  techSkills?: InputMaybe<Array<InputMaybe<EnumUserTechSkills>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  veteranStatus?: InputMaybe<EnumUserVeteranStatus>;
  walletAddress?: InputMaybe<Scalars['String']['input']>;
  workExperience?: InputMaybe<Array<InputMaybe<EnumUserWorkExperience>>>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['MongoID']['output'];
  accessibilityNeeds?: Maybe<EnumUserAccessibilityNeeds>;
  age?: Maybe<Scalars['Float']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  displayName: Scalars['String']['output'];
  education?: Maybe<Array<Maybe<EnumUserEducation>>>;
  employmentIndustry?: Maybe<EnumUserEmploymentIndustry>;
  employmentStatus?: Maybe<EnumUserEmploymentStatus>;
  gender?: Maybe<EnumUserGender>;
  healthStatus?: Maybe<EnumUserHealthStatus>;
  householdIncome?: Maybe<EnumUserHouseholdIncome>;
  householdSize?: Maybe<Scalars['Float']['output']>;
  interests?: Maybe<Array<Maybe<EnumUserInterests>>>;
  languages?: Maybe<Array<Maybe<EnumUserLanguages>>>;
  maritalStatus?: Maybe<EnumUserMaritalStatus>;
  organizations: Array<Organization>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
  politicalAffiliation?: Maybe<EnumUserPoliticalAffiliation>;
  religion?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Maybe<EnumUserSkills>>>;
  state?: Maybe<Scalars['String']['output']>;
  techSkills?: Maybe<Array<Maybe<EnumUserTechSkills>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  veteranStatus?: Maybe<EnumUserVeteranStatus>;
  walletAddress: Scalars['String']['output'];
  workExperience?: Maybe<Array<Maybe<EnumUserWorkExperience>>>;
};


export type UserOrganizationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyOrganizationInput>;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']['output']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int']['output'];
  /** Validation error message */
  message?: Maybe<Scalars['String']['output']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']['output']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']['output']>;
};

export type OrganizationCreateMutationVariables = Exact<{
  record: CreateOneOrganizationInput;
  userId: Scalars['MongoID']['input'];
}>;


export type OrganizationCreateMutation = { __typename?: 'Mutation', organizationCreate?: { __typename?: 'Organization', _id: any } | null };

export type UserCreateMutationVariables = Exact<{
  walletAddress: Scalars['String']['input'];
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
}>;


export type UserCreateMutation = { __typename?: 'Mutation', userCreate?: { __typename?: 'User', _id: any } | null };

export type UserUpdateMutationVariables = Exact<{
  userUpdateId: Scalars['MongoID']['input'];
  record: UpdateOneUserInput;
}>;


export type UserUpdateMutation = { __typename?: 'Mutation', userUpdate?: { __typename?: 'User', _id: any } | null };

export type UserConnectWalletQueryVariables = Exact<{
  walletAddress: Scalars['String']['input'];
}>;


export type UserConnectWalletQuery = { __typename?: 'Query', userConnectWallet?: { __typename?: 'User', walletAddress: string, displayName: string, pictureUrl?: string | null, age?: number | null, country?: string | null, state?: string | null, city?: string | null, gender?: EnumUserGender | null, languages?: Array<EnumUserLanguages | null> | null, maritalStatus?: EnumUserMaritalStatus | null, householdSize?: number | null, householdIncome?: EnumUserHouseholdIncome | null, employmentStatus?: EnumUserEmploymentStatus | null, employmentIndustry?: EnumUserEmploymentIndustry | null, religion?: string | null, politicalAffiliation?: EnumUserPoliticalAffiliation | null, accessibilityNeeds?: EnumUserAccessibilityNeeds | null, healthStatus?: EnumUserHealthStatus | null, veteranStatus?: EnumUserVeteranStatus | null, skills?: Array<EnumUserSkills | null> | null, techSkills?: Array<EnumUserTechSkills | null> | null, education?: Array<EnumUserEducation | null> | null, workExperience?: Array<EnumUserWorkExperience | null> | null, interests?: Array<EnumUserInterests | null> | null, _id: any, createdAt?: any | null, updatedAt?: any | null, organizations: Array<{ __typename?: 'Organization', name: string, website?: string | null, pictureUrl?: string | null, _id: any }> } | null };


export const OrganizationCreateDocument = gql`
    mutation OrganizationCreate($record: CreateOneOrganizationInput!, $userId: MongoID!) {
  organizationCreate(record: $record, userId: $userId) {
    _id
  }
}
    `;
export type OrganizationCreateMutationFn = Apollo.MutationFunction<OrganizationCreateMutation, OrganizationCreateMutationVariables>;

/**
 * __useOrganizationCreateMutation__
 *
 * To run a mutation, you first call `useOrganizationCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrganizationCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [organizationCreateMutation, { data, loading, error }] = useOrganizationCreateMutation({
 *   variables: {
 *      record: // value for 'record'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOrganizationCreateMutation(baseOptions?: Apollo.MutationHookOptions<OrganizationCreateMutation, OrganizationCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrganizationCreateMutation, OrganizationCreateMutationVariables>(OrganizationCreateDocument, options);
      }
export type OrganizationCreateMutationHookResult = ReturnType<typeof useOrganizationCreateMutation>;
export type OrganizationCreateMutationResult = Apollo.MutationResult<OrganizationCreateMutation>;
export type OrganizationCreateMutationOptions = Apollo.BaseMutationOptions<OrganizationCreateMutation, OrganizationCreateMutationVariables>;
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
export const UserUpdateDocument = gql`
    mutation UserUpdate($userUpdateId: MongoID!, $record: UpdateOneUserInput!) {
  userUpdate(id: $userUpdateId, record: $record) {
    _id
  }
}
    `;
export type UserUpdateMutationFn = Apollo.MutationFunction<UserUpdateMutation, UserUpdateMutationVariables>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      userUpdateId: // value for 'userUpdateId'
 *      record: // value for 'record'
 *   },
 * });
 */
export function useUserUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UserUpdateMutation, UserUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(UserUpdateDocument, options);
      }
export type UserUpdateMutationHookResult = ReturnType<typeof useUserUpdateMutation>;
export type UserUpdateMutationResult = Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>;
export const UserConnectWalletDocument = gql`
    query UserConnectWallet($walletAddress: String!) {
  userConnectWallet(walletAddress: $walletAddress) {
    walletAddress
    displayName
    pictureUrl
    age
    country
    state
    city
    gender
    languages
    maritalStatus
    householdSize
    householdIncome
    employmentStatus
    employmentIndustry
    religion
    politicalAffiliation
    accessibilityNeeds
    healthStatus
    veteranStatus
    skills
    techSkills
    education
    workExperience
    interests
    _id
    createdAt
    updatedAt
    organizations {
      name
      website
      pictureUrl
      _id
    }
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