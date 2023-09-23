import { model, Schema, Document } from 'mongoose'
import { LocationSchema } from './helpers/location'

const MemberSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    role: {
      type: String,
      enum: ['Admin', 'Member'],
    },
  },
  {
    _id: false,
  }
)

const OrganizationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    typeOfOrganization: {
      type: [String],
      enum: [
        'NGO',
        'Corporation',
        'Nonprofit',
        'Government Agency',
        'Startup',
        'Educational Institution',
        'Small Business',
        'Other',
      ],
      required: true,
    },
    industry: {
      type: [String],
      enum: [
        'Healthcare',
        'Technology',
        'Finance',
        'Manufacturing',
        'Retail',
        'Education',
        'Entertainment',
        'Energy',
        'Agriculture',
        'Nonprofit',
        'Government',
        'Transportation',
        'Hospitality',
        'Construction',
        'Media',
        'Other',
      ],
      required: true,
    },
    techStack: {
      type: [String],
      enum: [
        'JavaScript',
        'Python',
        'Java',
        'C#',
        'Ruby',
        'PHP',
        'Swift',
        'Kotlin',
        'Go',
        'Rust',
        'SQL',
        'NoSQL',
        'React',
        'Angular',
        'Vue.js',
        'Node.js',
        'Django',
        'Ruby on Rails',
        'ASP.NET',
        'Spring',
        'Laravel',
        'Express.js',
        'Flask',
        'TensorFlow',
        'PyTorch',
        'Keras',
        'Docker',
        'Kubernetes',
        'AWS',
        'Azure',
        'Google Cloud',
        'Firebase',
        'Heroku',
        'Git',
        'GitHub',
        'GitLab',
        'Bitbucket',
        'Jenkins',
        'Travis CI',
        'CircleCI',
        'JIRA',
        'Slack',
        'Trello',
        'Confluence',
        'GraphQL',
        'REST API',
        'WebSocket',
        'Blockchain',
        'Machine Learning',
        'Artificial Intelligence',
        'Big Data',
        'Other',
      ],
    },
    size: {
      type: String,
      enum: ['1-10', '11-50', '51-200', '201-500', '501-1000', '1001-5000', '5001-10000', '10000+'],
      required: true,
    },
    country: String,
    state: String,
    city: String,
    website: String,
    pictureUrl: String,
    members: [MemberSchema],
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
).index({ name: 1 }, { unique: true })

export interface OrganizationInterface extends Document {
  name: string
  description?: string
  typeOfOrganization: string[]
  industry: string[]
  techStack?: string[]
  size: string
  location?: {
    country?: string
    state?: string
    city?: string
  }
  website?: string
  pictureUrl?: string
  members?: {
    user: string
    role: string
  }[]
}

export const OrganizationModel = model<OrganizationInterface>('Organization', OrganizationSchema)
