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

export type CreateManyCrowdFundedDataInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<CrowdFundedDataSubmissionsInput>>>;
};

export type CreateManyCrowdFundedDataPayload = {
  __typename?: 'CreateManyCrowdFundedDataPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<CrowdFundedData>>;
};

export type CreateManyMessageInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  topicId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type CreateManyMessagePayload = {
  __typename?: 'CreateManyMessagePayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<Message>>;
};

export type CreateManyPersonaInput = {
  age?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  expectations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  needs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  painPoints?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  personaType: EnumPersonaPersonaType;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type CreateManyPersonaPayload = {
  __typename?: 'CreateManyPersonaPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<Persona>>;
};

export type CreateManyTopicInput = {
  bestAnswer?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['MongoID']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateManyTopicPayload = {
  __typename?: 'CreateManyTopicPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<Topic>>;
};

export type CreateManyUsabilityTestingInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<CrowdFundedDataSubmissionsInput>>>;
};

export type CreateManyUsabilityTestingPayload = {
  __typename?: 'CreateManyUsabilityTestingPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<UsabilityTesting>>;
};

export type CreateManyVoiceYourOpinionInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<CrowdFundedDataSubmissionsInput>>>;
  surveyTopics?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateManyVoiceYourOpinionPayload = {
  __typename?: 'CreateManyVoiceYourOpinionPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<VoiceYourOpinion>>;
};

export type CreateOneCrowdFundedDataInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<CrowdFundedDataSubmissionsInput>>>;
};

export type CreateOneCrowdFundedDataPayload = {
  __typename?: 'CreateOneCrowdFundedDataPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<CrowdFundedData>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneMessageInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  topicId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type CreateOneMessagePayload = {
  __typename?: 'CreateOneMessagePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Message>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
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

export type CreateOnePersonaInput = {
  age?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  expectations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  needs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  painPoints?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  personaType: EnumPersonaPersonaType;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type CreateOnePersonaPayload = {
  __typename?: 'CreateOnePersonaPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Persona>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneTopicInput = {
  bestAnswer?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['MongoID']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateOneTopicPayload = {
  __typename?: 'CreateOneTopicPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Topic>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneUsabilityTestingInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<CrowdFundedDataSubmissionsInput>>>;
};

export type CreateOneUsabilityTestingPayload = {
  __typename?: 'CreateOneUsabilityTestingPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<UsabilityTesting>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneVoiceYourOpinionInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<CrowdFundedDataSubmissionsInput>>>;
  surveyTopics?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateOneVoiceYourOpinionPayload = {
  __typename?: 'CreateOneVoiceYourOpinionPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<VoiceYourOpinion>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CrowdFundedData = {
  __typename?: 'CrowdFundedData';
  _id: Scalars['MongoID']['output'];
  amount?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['MongoID']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
  submissions?: Maybe<Array<Maybe<CrowdFundedDataSubmissions>>>;
};

/** List of items with pagination. */
export type CrowdFundedDataPagination = {
  __typename?: 'CrowdFundedDataPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<CrowdFundedData>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type CrowdFundedDataSubmissions = {
  __typename?: 'CrowdFundedDataSubmissions';
  answer?: Maybe<Scalars['String']['output']>;
  isMultipleChoice?: Maybe<Scalars['Boolean']['output']>;
  isMultipleSelect?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  question?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

export type CrowdFundedDataSubmissionsInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  isMultipleChoice?: InputMaybe<Scalars['Boolean']['input']>;
  isMultipleSelect?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
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

export enum EnumPersonaPersonaType {
  Entrepreneur = 'Entrepreneur',
  Environmentalist = 'Environmentalist',
  HealthCare = 'HealthCare'
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

export type FilterCountCrowdFundedDataInput = {
  AND?: InputMaybe<Array<FilterCountCrowdFundedDataInput>>;
  OR?: InputMaybe<Array<FilterCountCrowdFundedDataInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountCrowdFundedDataOperatorsInput>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<FilterCountCrowdFundedDataSubmissionsInput>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountCrowdFundedDataOperatorsInput = {
  _id?: InputMaybe<FilterCountCrowdFundedData_IdOperatorsInput>;
};

export type FilterCountCrowdFundedDataSubmissionsInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  isMultipleChoice?: InputMaybe<Scalars['Boolean']['input']>;
  isMultipleSelect?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type FilterCountCrowdFundedData_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountMessageCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterCountMessageInput = {
  AND?: InputMaybe<Array<FilterCountMessageInput>>;
  OR?: InputMaybe<Array<FilterCountMessageInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountMessageOperatorsInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  topicId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountMessageOperatorsInput = {
  _id?: InputMaybe<FilterCountMessage_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterCountMessageCreatedAtOperatorsInput>;
};

export type FilterCountMessage_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountPersonaInput = {
  AND?: InputMaybe<Array<FilterCountPersonaInput>>;
  OR?: InputMaybe<Array<FilterCountPersonaInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountPersonaOperatorsInput>;
  age?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  expectations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  needs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  painPoints?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  personaType?: InputMaybe<EnumPersonaPersonaType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountPersonaOperatorsInput = {
  _id?: InputMaybe<FilterCountPersona_IdOperatorsInput>;
};

export type FilterCountPersona_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountTopicInput = {
  AND?: InputMaybe<Array<FilterCountTopicInput>>;
  OR?: InputMaybe<Array<FilterCountTopicInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountTopicOperatorsInput>;
  bestAnswer?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['MongoID']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountTopicOperatorsInput = {
  _id?: InputMaybe<FilterCountTopic_IdOperatorsInput>;
};

export type FilterCountTopic_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountUsabilityTestingInput = {
  AND?: InputMaybe<Array<FilterCountUsabilityTestingInput>>;
  OR?: InputMaybe<Array<FilterCountUsabilityTestingInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountUsabilityTestingOperatorsInput>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<FilterCountCrowdFundedDataSubmissionsInput>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountUsabilityTestingOperatorsInput = {
  _id?: InputMaybe<FilterCountUsabilityTesting_IdOperatorsInput>;
};

export type FilterCountUsabilityTesting_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountVoiceYourOpinionInput = {
  AND?: InputMaybe<Array<FilterCountVoiceYourOpinionInput>>;
  OR?: InputMaybe<Array<FilterCountVoiceYourOpinionInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountVoiceYourOpinionOperatorsInput>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<FilterCountCrowdFundedDataSubmissionsInput>>>;
  surveyTopics?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountVoiceYourOpinionOperatorsInput = {
  _id?: InputMaybe<FilterCountVoiceYourOpinion_IdOperatorsInput>;
};

export type FilterCountVoiceYourOpinion_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyCrowdFundedDataInput = {
  AND?: InputMaybe<Array<FilterFindManyCrowdFundedDataInput>>;
  OR?: InputMaybe<Array<FilterFindManyCrowdFundedDataInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyCrowdFundedDataOperatorsInput>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<FilterFindManyCrowdFundedDataSubmissionsInput>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCrowdFundedDataOperatorsInput = {
  _id?: InputMaybe<FilterFindManyCrowdFundedData_IdOperatorsInput>;
};

export type FilterFindManyCrowdFundedDataSubmissionsInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  isMultipleChoice?: InputMaybe<Scalars['Boolean']['input']>;
  isMultipleSelect?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyCrowdFundedData_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyMessageCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindManyMessageInput = {
  AND?: InputMaybe<Array<FilterFindManyMessageInput>>;
  OR?: InputMaybe<Array<FilterFindManyMessageInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyMessageOperatorsInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  topicId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMessageOperatorsInput = {
  _id?: InputMaybe<FilterFindManyMessage_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterFindManyMessageCreatedAtOperatorsInput>;
};

export type FilterFindManyMessage_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPersonaInput = {
  AND?: InputMaybe<Array<FilterFindManyPersonaInput>>;
  OR?: InputMaybe<Array<FilterFindManyPersonaInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPersonaOperatorsInput>;
  age?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  expectations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  needs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  painPoints?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  personaType?: InputMaybe<EnumPersonaPersonaType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPersonaOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPersona_IdOperatorsInput>;
};

export type FilterFindManyPersona_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyTopicInput = {
  AND?: InputMaybe<Array<FilterFindManyTopicInput>>;
  OR?: InputMaybe<Array<FilterFindManyTopicInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyTopicOperatorsInput>;
  bestAnswer?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['MongoID']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTopicOperatorsInput = {
  _id?: InputMaybe<FilterFindManyTopic_IdOperatorsInput>;
};

export type FilterFindManyTopic_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyUsabilityTestingInput = {
  AND?: InputMaybe<Array<FilterFindManyUsabilityTestingInput>>;
  OR?: InputMaybe<Array<FilterFindManyUsabilityTestingInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyUsabilityTestingOperatorsInput>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<FilterFindManyCrowdFundedDataSubmissionsInput>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUsabilityTestingOperatorsInput = {
  _id?: InputMaybe<FilterFindManyUsabilityTesting_IdOperatorsInput>;
};

export type FilterFindManyUsabilityTesting_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyVoiceYourOpinionInput = {
  AND?: InputMaybe<Array<FilterFindManyVoiceYourOpinionInput>>;
  OR?: InputMaybe<Array<FilterFindManyVoiceYourOpinionInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyVoiceYourOpinionOperatorsInput>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<FilterFindManyCrowdFundedDataSubmissionsInput>>>;
  surveyTopics?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyVoiceYourOpinionOperatorsInput = {
  _id?: InputMaybe<FilterFindManyVoiceYourOpinion_IdOperatorsInput>;
};

export type FilterFindManyVoiceYourOpinion_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type Message = {
  __typename?: 'Message';
  _id: Scalars['MongoID']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  topicId?: Maybe<Scalars['MongoID']['output']>;
  topicTitle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userFullName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['MongoID']['output']>;
  userPictureUrl?: Maybe<Scalars['String']['output']>;
};

/** List of items with pagination. */
export type MessagePagination = {
  __typename?: 'MessagePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<Message>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
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
  AdminMessageRemoveAll?: Maybe<Scalars['Boolean']['output']>;
  AdminOrganizationRemoveAll?: Maybe<Scalars['Boolean']['output']>;
  AdminPersonaRemoveAll?: Maybe<Scalars['Boolean']['output']>;
  AdminTopicRemoveAll?: Maybe<Scalars['Boolean']['output']>;
  AdminUserRemoveAll?: Maybe<Scalars['Boolean']['output']>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  crowdfundeddataBatchCreate?: Maybe<CreateManyCrowdFundedDataPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  crowdfundeddataCreate?: Maybe<CreateOneCrowdFundedDataPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  crowdfundeddataDelete?: Maybe<RemoveByIdCrowdFundedDataPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  crowdfundeddataUpdate?: Maybe<UpdateByIdCrowdFundedDataPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  forummessageBatchCreate?: Maybe<CreateManyMessagePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  forummessageCreate?: Maybe<CreateOneMessagePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  forummessageDelete?: Maybe<RemoveByIdMessagePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  forummessageUpdate?: Maybe<UpdateByIdMessagePayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  forumtopicBatchCreate?: Maybe<CreateManyTopicPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  forumtopicCreate?: Maybe<CreateOneTopicPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  forumtopicDelete?: Maybe<RemoveByIdTopicPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  forumtopicUpdate?: Maybe<UpdateByIdTopicPayload>;
  organizationCreate?: Maybe<Organization>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  personaBatchCreate?: Maybe<CreateManyPersonaPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  personaCreate?: Maybe<CreateOnePersonaPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  personaDelete?: Maybe<RemoveByIdPersonaPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  personaUpdate?: Maybe<UpdateByIdPersonaPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  usabilitytestingBatchCreate?: Maybe<CreateManyUsabilityTestingPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  usabilitytestingCreate?: Maybe<CreateOneUsabilityTestingPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  usabilitytestingDelete?: Maybe<RemoveByIdUsabilityTestingPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  usabilitytestingUpdate?: Maybe<UpdateByIdUsabilityTestingPayload>;
  userCreate?: Maybe<User>;
  userGeneratePersona?: Maybe<Persona>;
  userUpdate?: Maybe<User>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  voiceyouropinionBatchCreate?: Maybe<CreateManyVoiceYourOpinionPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  voiceyouropinionCreate?: Maybe<CreateOneVoiceYourOpinionPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  voiceyouropinionDelete?: Maybe<RemoveByIdVoiceYourOpinionPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  voiceyouropinionUpdate?: Maybe<UpdateByIdVoiceYourOpinionPayload>;
};


export type MutationCrowdfundeddataBatchCreateArgs = {
  records: Array<CreateManyCrowdFundedDataInput>;
};


export type MutationCrowdfundeddataCreateArgs = {
  record: CreateOneCrowdFundedDataInput;
};


export type MutationCrowdfundeddataDeleteArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationCrowdfundeddataUpdateArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdCrowdFundedDataInput;
};


export type MutationForummessageBatchCreateArgs = {
  records: Array<CreateManyMessageInput>;
};


export type MutationForummessageCreateArgs = {
  record: CreateOneMessageInput;
};


export type MutationForummessageDeleteArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationForummessageUpdateArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdMessageInput;
};


export type MutationForumtopicBatchCreateArgs = {
  records: Array<CreateManyTopicInput>;
};


export type MutationForumtopicCreateArgs = {
  record: CreateOneTopicInput;
};


export type MutationForumtopicDeleteArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationForumtopicUpdateArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdTopicInput;
};


export type MutationOrganizationCreateArgs = {
  record: CreateOneOrganizationInput;
  userId: Scalars['MongoID']['input'];
};


export type MutationPersonaBatchCreateArgs = {
  records: Array<CreateManyPersonaInput>;
};


export type MutationPersonaCreateArgs = {
  record: CreateOnePersonaInput;
};


export type MutationPersonaDeleteArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPersonaUpdateArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPersonaInput;
};


export type MutationUsabilitytestingBatchCreateArgs = {
  records: Array<CreateManyUsabilityTestingInput>;
};


export type MutationUsabilitytestingCreateArgs = {
  record: CreateOneUsabilityTestingInput;
};


export type MutationUsabilitytestingDeleteArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationUsabilitytestingUpdateArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdUsabilityTestingInput;
};


export type MutationUserCreateArgs = {
  displayName: Scalars['String']['input'];
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  walletAddress: Scalars['String']['input'];
};


export type MutationUserGeneratePersonaArgs = {
  id: Scalars['MongoID']['input'];
  questions: Scalars['String']['input'];
  theme?: InputMaybe<Scalars['String']['input']>;
  type: EnumPersonaPersonaType;
};


export type MutationUserUpdateArgs = {
  id: Scalars['MongoID']['input'];
  record: UpdateOneUserInput;
};


export type MutationVoiceyouropinionBatchCreateArgs = {
  records: Array<CreateManyVoiceYourOpinionInput>;
};


export type MutationVoiceyouropinionCreateArgs = {
  record: CreateOneVoiceYourOpinionInput;
};


export type MutationVoiceyouropinionDeleteArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationVoiceyouropinionUpdateArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdVoiceYourOpinionInput;
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

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  itemCount?: Maybe<Scalars['Int']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
};

export type Persona = {
  __typename?: 'Persona';
  _id: Scalars['MongoID']['output'];
  age?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  expectations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  gender?: Maybe<Scalars['String']['output']>;
  goals?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  needs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  painPoints?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  personaType: EnumPersonaPersonaType;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userId?: Maybe<Scalars['MongoID']['output']>;
};

/** List of items with pagination. */
export type PersonaPagination = {
  __typename?: 'PersonaPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<Persona>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Query = {
  __typename?: 'Query';
  crowdfundeddataCount?: Maybe<Scalars['Int']['output']>;
  crowdfundeddataList: Array<CrowdFundedData>;
  crowdfundeddataPagination?: Maybe<CrowdFundedDataPagination>;
  crowdfundeddataRead?: Maybe<CrowdFundedData>;
  forummessageCount?: Maybe<Scalars['Int']['output']>;
  forummessageList: Array<Message>;
  forummessagePagination?: Maybe<MessagePagination>;
  forummessageRead?: Maybe<Message>;
  forumtopicCount?: Maybe<Scalars['Int']['output']>;
  forumtopicList: Array<Topic>;
  forumtopicPagination?: Maybe<TopicPagination>;
  forumtopicRead?: Maybe<Topic>;
  organizationList?: Maybe<Array<Maybe<Organization>>>;
  personaCount?: Maybe<Scalars['Int']['output']>;
  personaList: Array<Persona>;
  personaPagination?: Maybe<PersonaPagination>;
  personaRead?: Maybe<Persona>;
  usabilitytestingCount?: Maybe<Scalars['Int']['output']>;
  usabilitytestingList: Array<UsabilityTesting>;
  usabilitytestingPagination?: Maybe<UsabilityTestingPagination>;
  usabilitytestingRead?: Maybe<UsabilityTesting>;
  userConnectWallet?: Maybe<User>;
  voiceyouropinionCount?: Maybe<Scalars['Int']['output']>;
  voiceyouropinionList: Array<VoiceYourOpinion>;
  voiceyouropinionPagination?: Maybe<VoiceYourOpinionPagination>;
  voiceyouropinionRead?: Maybe<VoiceYourOpinion>;
};


export type QueryCrowdfundeddataCountArgs = {
  filter?: InputMaybe<FilterCountCrowdFundedDataInput>;
};


export type QueryCrowdfundeddataListArgs = {
  filter?: InputMaybe<FilterFindManyCrowdFundedDataInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCrowdFundedDataInput>;
};


export type QueryCrowdfundeddataPaginationArgs = {
  filter?: InputMaybe<FilterFindManyCrowdFundedDataInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCrowdFundedDataInput>;
};


export type QueryCrowdfundeddataReadArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryForummessageCountArgs = {
  filter?: InputMaybe<FilterCountMessageInput>;
};


export type QueryForummessageListArgs = {
  filter?: InputMaybe<FilterFindManyMessageInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyMessageInput>;
};


export type QueryForummessagePaginationArgs = {
  filter?: InputMaybe<FilterFindManyMessageInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyMessageInput>;
};


export type QueryForummessageReadArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryForumtopicCountArgs = {
  filter?: InputMaybe<FilterCountTopicInput>;
};


export type QueryForumtopicListArgs = {
  filter?: InputMaybe<FilterFindManyTopicInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyTopicInput>;
};


export type QueryForumtopicPaginationArgs = {
  filter?: InputMaybe<FilterFindManyTopicInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyTopicInput>;
};


export type QueryForumtopicReadArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryOrganizationListArgs = {
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};


export type QueryPersonaCountArgs = {
  filter?: InputMaybe<FilterCountPersonaInput>;
};


export type QueryPersonaListArgs = {
  filter?: InputMaybe<FilterFindManyPersonaInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPersonaInput>;
};


export type QueryPersonaPaginationArgs = {
  filter?: InputMaybe<FilterFindManyPersonaInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPersonaInput>;
};


export type QueryPersonaReadArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUsabilitytestingCountArgs = {
  filter?: InputMaybe<FilterCountUsabilityTestingInput>;
};


export type QueryUsabilitytestingListArgs = {
  filter?: InputMaybe<FilterFindManyUsabilityTestingInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyUsabilityTestingInput>;
};


export type QueryUsabilitytestingPaginationArgs = {
  filter?: InputMaybe<FilterFindManyUsabilityTestingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyUsabilityTestingInput>;
};


export type QueryUsabilitytestingReadArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserConnectWalletArgs = {
  walletAddress: Scalars['String']['input'];
};


export type QueryVoiceyouropinionCountArgs = {
  filter?: InputMaybe<FilterCountVoiceYourOpinionInput>;
};


export type QueryVoiceyouropinionListArgs = {
  filter?: InputMaybe<FilterFindManyVoiceYourOpinionInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyVoiceYourOpinionInput>;
};


export type QueryVoiceyouropinionPaginationArgs = {
  filter?: InputMaybe<FilterFindManyVoiceYourOpinionInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyVoiceYourOpinionInput>;
};


export type QueryVoiceyouropinionReadArgs = {
  _id: Scalars['MongoID']['input'];
};

export type RemoveByIdCrowdFundedDataPayload = {
  __typename?: 'RemoveByIdCrowdFundedDataPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<CrowdFundedData>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdMessagePayload = {
  __typename?: 'RemoveByIdMessagePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Message>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdPersonaPayload = {
  __typename?: 'RemoveByIdPersonaPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Persona>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdTopicPayload = {
  __typename?: 'RemoveByIdTopicPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Topic>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdUsabilityTestingPayload = {
  __typename?: 'RemoveByIdUsabilityTestingPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<UsabilityTesting>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdVoiceYourOpinionPayload = {
  __typename?: 'RemoveByIdVoiceYourOpinionPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<VoiceYourOpinion>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']['output']>;
};

export enum SortFindManyCrowdFundedDataInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyMessageInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyOrganizationInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPersonaInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyTopicInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyUsabilityTestingInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyVoiceYourOpinionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type Topic = {
  __typename?: 'Topic';
  _id: Scalars['MongoID']['output'];
  bestAnswer?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['MongoID']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

/** List of items with pagination. */
export type TopicPagination = {
  __typename?: 'TopicPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<Topic>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type UpdateByIdCrowdFundedDataInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<UpdateByIdCrowdFundedDataSubmissionsInput>>>;
};

export type UpdateByIdCrowdFundedDataPayload = {
  __typename?: 'UpdateByIdCrowdFundedDataPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<CrowdFundedData>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdCrowdFundedDataSubmissionsInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  isMultipleChoice?: InputMaybe<Scalars['Boolean']['input']>;
  isMultipleSelect?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdMessageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  topicId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdMessagePayload = {
  __typename?: 'UpdateByIdMessagePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Message>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPersonaInput = {
  age?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  expectations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  needs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  painPoints?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  personaType?: InputMaybe<EnumPersonaPersonaType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdPersonaPayload = {
  __typename?: 'UpdateByIdPersonaPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Persona>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdTopicInput = {
  bestAnswer?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['MongoID']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdTopicPayload = {
  __typename?: 'UpdateByIdTopicPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Topic>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdUsabilityTestingInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<UpdateByIdCrowdFundedDataSubmissionsInput>>>;
};

export type UpdateByIdUsabilityTestingPayload = {
  __typename?: 'UpdateByIdUsabilityTestingPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<UsabilityTesting>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdVoiceYourOpinionInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['MongoID']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  submissions?: InputMaybe<Array<InputMaybe<UpdateByIdCrowdFundedDataSubmissionsInput>>>;
  surveyTopics?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateByIdVoiceYourOpinionPayload = {
  __typename?: 'UpdateByIdVoiceYourOpinionPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<VoiceYourOpinion>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

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

export type UsabilityTesting = {
  __typename?: 'UsabilityTesting';
  _id: Scalars['MongoID']['output'];
  amount?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['MongoID']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
  submissions?: Maybe<Array<Maybe<CrowdFundedDataSubmissions>>>;
};

/** List of items with pagination. */
export type UsabilityTestingPagination = {
  __typename?: 'UsabilityTestingPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<UsabilityTesting>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
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

export type VoiceYourOpinion = {
  __typename?: 'VoiceYourOpinion';
  _id: Scalars['MongoID']['output'];
  amount?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['MongoID']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
  submissions?: Maybe<Array<Maybe<CrowdFundedDataSubmissions>>>;
  surveyTopics?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** List of items with pagination. */
export type VoiceYourOpinionPagination = {
  __typename?: 'VoiceYourOpinionPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<VoiceYourOpinion>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type ForumtopicCreateMutationVariables = Exact<{
  record: CreateOneTopicInput;
}>;


export type ForumtopicCreateMutation = { __typename?: 'Mutation', forumtopicCreate?: { __typename?: 'CreateOneTopicPayload', recordId?: any | null } | null };

export type ForummessageCreateMutationVariables = Exact<{
  record: CreateOneMessageInput;
}>;


export type ForummessageCreateMutation = { __typename?: 'Mutation', forummessageCreate?: { __typename?: 'CreateOneMessagePayload', recordId?: any | null } | null };

export type ForumtopicListQueryVariables = Exact<{
  filter?: InputMaybe<FilterFindManyTopicInput>;
}>;


export type ForumtopicListQuery = { __typename?: 'Query', forumtopicList: Array<{ __typename?: 'Topic', title: string, _id: any, organizationName?: string | null, organizationId?: any | null, summary?: string | null, bestAnswer?: string | null }> };

export type ForummessageListQueryVariables = Exact<{
  filter?: InputMaybe<FilterFindManyMessageInput>;
  sort?: InputMaybe<SortFindManyMessageInput>;
}>;


export type ForummessageListQuery = { __typename?: 'Query', forummessageList: Array<{ __typename?: 'Message', content: string, _id: any, userFullName?: string | null, userPictureUrl?: string | null, userId?: any | null, createdAt?: any | null }> };

export type OrganizationCreateMutationVariables = Exact<{
  record: CreateOneOrganizationInput;
  userId: Scalars['MongoID']['input'];
}>;


export type OrganizationCreateMutation = { __typename?: 'Mutation', organizationCreate?: { __typename?: 'Organization', _id: any } | null };

export type TaskListQueryVariables = Exact<{ [key: string]: never; }>;


export type TaskListQuery = { __typename?: 'Query', crowdfundeddataList: Array<{ __typename?: 'CrowdFundedData', orgId?: any | null, name?: string | null, organizationName?: string | null, description?: string | null, amount?: number | null, pictureUrl?: string | null, _id: any, submissions?: Array<{ __typename?: 'CrowdFundedDataSubmissions', question?: string | null, isMultipleChoice?: boolean | null, isMultipleSelect?: boolean | null, options?: Array<string | null> | null, answer?: string | null, slug: string } | null> | null }>, voiceyouropinionList: Array<{ __typename?: 'VoiceYourOpinion', orgId?: any | null, name?: string | null, organizationName?: string | null, surveyTopics?: Array<string | null> | null, amount?: number | null, pictureUrl?: string | null, _id: any, submissions?: Array<{ __typename?: 'CrowdFundedDataSubmissions', question?: string | null, isMultipleChoice?: boolean | null, isMultipleSelect?: boolean | null, options?: Array<string | null> | null, answer?: string | null, slug: string } | null> | null }>, usabilitytestingList: Array<{ __typename?: 'UsabilityTesting', orgId?: any | null, name?: string | null, organizationName?: string | null, description?: string | null, amount?: number | null, pictureUrl?: string | null, _id: any, submissions?: Array<{ __typename?: 'CrowdFundedDataSubmissions', question?: string | null, isMultipleChoice?: boolean | null, isMultipleSelect?: boolean | null, options?: Array<string | null> | null, answer?: string | null, slug: string } | null> | null }> };

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

export type UserGeneratePersonaMutationVariables = Exact<{
  userGeneratePersonaId: Scalars['MongoID']['input'];
  type: EnumPersonaPersonaType;
  questions: Scalars['String']['input'];
  theme?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserGeneratePersonaMutation = { __typename?: 'Mutation', userGeneratePersona?: { __typename?: 'Persona', personaType: EnumPersonaPersonaType, userId?: any | null, name?: string | null, age?: number | null, gender?: string | null, location?: string | null, needs?: Array<string | null> | null, goals?: Array<string | null> | null, painPoints?: Array<string | null> | null, expectations?: Array<string | null> | null, _id: any, createdAt?: any | null, updatedAt?: any | null } | null };

export type UserConnectWalletQueryVariables = Exact<{
  walletAddress: Scalars['String']['input'];
}>;


export type UserConnectWalletQuery = { __typename?: 'Query', userConnectWallet?: { __typename?: 'User', walletAddress: string, displayName: string, pictureUrl?: string | null, age?: number | null, country?: string | null, state?: string | null, city?: string | null, gender?: EnumUserGender | null, languages?: Array<EnumUserLanguages | null> | null, maritalStatus?: EnumUserMaritalStatus | null, householdSize?: number | null, householdIncome?: EnumUserHouseholdIncome | null, employmentStatus?: EnumUserEmploymentStatus | null, employmentIndustry?: EnumUserEmploymentIndustry | null, religion?: string | null, politicalAffiliation?: EnumUserPoliticalAffiliation | null, accessibilityNeeds?: EnumUserAccessibilityNeeds | null, healthStatus?: EnumUserHealthStatus | null, veteranStatus?: EnumUserVeteranStatus | null, skills?: Array<EnumUserSkills | null> | null, techSkills?: Array<EnumUserTechSkills | null> | null, education?: Array<EnumUserEducation | null> | null, workExperience?: Array<EnumUserWorkExperience | null> | null, interests?: Array<EnumUserInterests | null> | null, _id: any, createdAt?: any | null, updatedAt?: any | null, organizations: Array<{ __typename?: 'Organization', name: string, website?: string | null, pictureUrl?: string | null, description?: string | null, _id: any }> } | null };

export type PersonaListQueryVariables = Exact<{
  filter?: InputMaybe<FilterFindManyPersonaInput>;
}>;


export type PersonaListQuery = { __typename?: 'Query', personaList: Array<{ __typename?: 'Persona', personaType: EnumPersonaPersonaType, userId?: any | null, name?: string | null, age?: number | null, gender?: string | null, location?: string | null, needs?: Array<string | null> | null, goals?: Array<string | null> | null, painPoints?: Array<string | null> | null, expectations?: Array<string | null> | null, _id: any, createdAt?: any | null, updatedAt?: any | null }> };


export const ForumtopicCreateDocument = gql`
    mutation ForumtopicCreate($record: CreateOneTopicInput!) {
  forumtopicCreate(record: $record) {
    recordId
  }
}
    `;
export type ForumtopicCreateMutationFn = Apollo.MutationFunction<ForumtopicCreateMutation, ForumtopicCreateMutationVariables>;

/**
 * __useForumtopicCreateMutation__
 *
 * To run a mutation, you first call `useForumtopicCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForumtopicCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forumtopicCreateMutation, { data, loading, error }] = useForumtopicCreateMutation({
 *   variables: {
 *      record: // value for 'record'
 *   },
 * });
 */
export function useForumtopicCreateMutation(baseOptions?: Apollo.MutationHookOptions<ForumtopicCreateMutation, ForumtopicCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForumtopicCreateMutation, ForumtopicCreateMutationVariables>(ForumtopicCreateDocument, options);
      }
export type ForumtopicCreateMutationHookResult = ReturnType<typeof useForumtopicCreateMutation>;
export type ForumtopicCreateMutationResult = Apollo.MutationResult<ForumtopicCreateMutation>;
export type ForumtopicCreateMutationOptions = Apollo.BaseMutationOptions<ForumtopicCreateMutation, ForumtopicCreateMutationVariables>;
export const ForummessageCreateDocument = gql`
    mutation ForummessageCreate($record: CreateOneMessageInput!) {
  forummessageCreate(record: $record) {
    recordId
  }
}
    `;
export type ForummessageCreateMutationFn = Apollo.MutationFunction<ForummessageCreateMutation, ForummessageCreateMutationVariables>;

/**
 * __useForummessageCreateMutation__
 *
 * To run a mutation, you first call `useForummessageCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForummessageCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forummessageCreateMutation, { data, loading, error }] = useForummessageCreateMutation({
 *   variables: {
 *      record: // value for 'record'
 *   },
 * });
 */
export function useForummessageCreateMutation(baseOptions?: Apollo.MutationHookOptions<ForummessageCreateMutation, ForummessageCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForummessageCreateMutation, ForummessageCreateMutationVariables>(ForummessageCreateDocument, options);
      }
export type ForummessageCreateMutationHookResult = ReturnType<typeof useForummessageCreateMutation>;
export type ForummessageCreateMutationResult = Apollo.MutationResult<ForummessageCreateMutation>;
export type ForummessageCreateMutationOptions = Apollo.BaseMutationOptions<ForummessageCreateMutation, ForummessageCreateMutationVariables>;
export const ForumtopicListDocument = gql`
    query ForumtopicList($filter: FilterFindManyTopicInput) {
  forumtopicList(filter: $filter) {
    title
    _id
    organizationName
    organizationId
    summary
    bestAnswer
  }
}
    `;

/**
 * __useForumtopicListQuery__
 *
 * To run a query within a React component, call `useForumtopicListQuery` and pass it any options that fit your needs.
 * When your component renders, `useForumtopicListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useForumtopicListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useForumtopicListQuery(baseOptions?: Apollo.QueryHookOptions<ForumtopicListQuery, ForumtopicListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ForumtopicListQuery, ForumtopicListQueryVariables>(ForumtopicListDocument, options);
      }
export function useForumtopicListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ForumtopicListQuery, ForumtopicListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ForumtopicListQuery, ForumtopicListQueryVariables>(ForumtopicListDocument, options);
        }
export type ForumtopicListQueryHookResult = ReturnType<typeof useForumtopicListQuery>;
export type ForumtopicListLazyQueryHookResult = ReturnType<typeof useForumtopicListLazyQuery>;
export type ForumtopicListQueryResult = Apollo.QueryResult<ForumtopicListQuery, ForumtopicListQueryVariables>;
export const ForummessageListDocument = gql`
    query ForummessageList($filter: FilterFindManyMessageInput, $sort: SortFindManyMessageInput) {
  forummessageList(filter: $filter, sort: $sort) {
    content
    _id
    userFullName
    userPictureUrl
    userId
    createdAt
  }
}
    `;

/**
 * __useForummessageListQuery__
 *
 * To run a query within a React component, call `useForummessageListQuery` and pass it any options that fit your needs.
 * When your component renders, `useForummessageListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useForummessageListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useForummessageListQuery(baseOptions?: Apollo.QueryHookOptions<ForummessageListQuery, ForummessageListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ForummessageListQuery, ForummessageListQueryVariables>(ForummessageListDocument, options);
      }
export function useForummessageListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ForummessageListQuery, ForummessageListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ForummessageListQuery, ForummessageListQueryVariables>(ForummessageListDocument, options);
        }
export type ForummessageListQueryHookResult = ReturnType<typeof useForummessageListQuery>;
export type ForummessageListLazyQueryHookResult = ReturnType<typeof useForummessageListLazyQuery>;
export type ForummessageListQueryResult = Apollo.QueryResult<ForummessageListQuery, ForummessageListQueryVariables>;
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
export const TaskListDocument = gql`
    query TaskList {
  crowdfundeddataList {
    orgId
    name
    organizationName
    description
    amount
    pictureUrl
    submissions {
      question
      isMultipleChoice
      isMultipleSelect
      options
      answer
      slug
    }
    _id
  }
  voiceyouropinionList {
    orgId
    name
    organizationName
    surveyTopics
    amount
    pictureUrl
    submissions {
      question
      isMultipleChoice
      isMultipleSelect
      options
      answer
      slug
    }
    _id
  }
  usabilitytestingList {
    orgId
    name
    organizationName
    description
    amount
    pictureUrl
    submissions {
      question
      isMultipleChoice
      isMultipleSelect
      options
      answer
      slug
    }
    _id
  }
}
    `;

/**
 * __useTaskListQuery__
 *
 * To run a query within a React component, call `useTaskListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskListQuery({
 *   variables: {
 *   },
 * });
 */
export function useTaskListQuery(baseOptions?: Apollo.QueryHookOptions<TaskListQuery, TaskListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskListQuery, TaskListQueryVariables>(TaskListDocument, options);
      }
export function useTaskListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskListQuery, TaskListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskListQuery, TaskListQueryVariables>(TaskListDocument, options);
        }
export type TaskListQueryHookResult = ReturnType<typeof useTaskListQuery>;
export type TaskListLazyQueryHookResult = ReturnType<typeof useTaskListLazyQuery>;
export type TaskListQueryResult = Apollo.QueryResult<TaskListQuery, TaskListQueryVariables>;
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
export const UserGeneratePersonaDocument = gql`
    mutation UserGeneratePersona($userGeneratePersonaId: MongoID!, $type: EnumPersonaPersonaType!, $questions: String!, $theme: String) {
  userGeneratePersona(
    id: $userGeneratePersonaId
    type: $type
    questions: $questions
    theme: $theme
  ) {
    personaType
    userId
    name
    age
    gender
    location
    needs
    goals
    painPoints
    expectations
    _id
    createdAt
    updatedAt
  }
}
    `;
export type UserGeneratePersonaMutationFn = Apollo.MutationFunction<UserGeneratePersonaMutation, UserGeneratePersonaMutationVariables>;

/**
 * __useUserGeneratePersonaMutation__
 *
 * To run a mutation, you first call `useUserGeneratePersonaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserGeneratePersonaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userGeneratePersonaMutation, { data, loading, error }] = useUserGeneratePersonaMutation({
 *   variables: {
 *      userGeneratePersonaId: // value for 'userGeneratePersonaId'
 *      type: // value for 'type'
 *      questions: // value for 'questions'
 *      theme: // value for 'theme'
 *   },
 * });
 */
export function useUserGeneratePersonaMutation(baseOptions?: Apollo.MutationHookOptions<UserGeneratePersonaMutation, UserGeneratePersonaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserGeneratePersonaMutation, UserGeneratePersonaMutationVariables>(UserGeneratePersonaDocument, options);
      }
export type UserGeneratePersonaMutationHookResult = ReturnType<typeof useUserGeneratePersonaMutation>;
export type UserGeneratePersonaMutationResult = Apollo.MutationResult<UserGeneratePersonaMutation>;
export type UserGeneratePersonaMutationOptions = Apollo.BaseMutationOptions<UserGeneratePersonaMutation, UserGeneratePersonaMutationVariables>;
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
      description
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
export const PersonaListDocument = gql`
    query PersonaList($filter: FilterFindManyPersonaInput) {
  personaList(filter: $filter) {
    personaType
    userId
    name
    age
    gender
    location
    needs
    goals
    painPoints
    expectations
    _id
    createdAt
    updatedAt
  }
}
    `;

/**
 * __usePersonaListQuery__
 *
 * To run a query within a React component, call `usePersonaListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonaListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonaListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function usePersonaListQuery(baseOptions?: Apollo.QueryHookOptions<PersonaListQuery, PersonaListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonaListQuery, PersonaListQueryVariables>(PersonaListDocument, options);
      }
export function usePersonaListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonaListQuery, PersonaListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonaListQuery, PersonaListQueryVariables>(PersonaListDocument, options);
        }
export type PersonaListQueryHookResult = ReturnType<typeof usePersonaListQuery>;
export type PersonaListLazyQueryHookResult = ReturnType<typeof usePersonaListLazyQuery>;
export type PersonaListQueryResult = Apollo.QueryResult<PersonaListQuery, PersonaListQueryVariables>;