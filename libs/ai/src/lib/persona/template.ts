import { z } from 'zod'

export const UserPersonaSchema = z
  .object({
    name: z.string().min(1, { message: 'Name must not be empty' }).describe("User's full name"),
    age: z.number().int().min(0).describe("User's age"),
    gender: z.enum(['Male', 'Female', 'Non-Binary', 'Transgender', 'Other', 'Prefer Not to Say']).describe("User's gender"),
    location: z.string().min(1).describe("User's location"),
    summary: z.string().min(1).describe('Summary of the user'),
    needs: z.array(z.string().min(1)).min(1).describe('Array of user needs'),
    goals: z.array(z.string().min(1)).min(1).describe('Array of user goals'),
    painPoints: z.array(z.string().min(1)).min(1).describe('Array of user pain points'),
    expectations: z.array(z.string().min(1)).min(1).describe('Array of user expectations'),
  })
  .required()

export type UserPersona = z.infer<typeof UserPersonaSchema>

export const personaPromptTemplate = `Act as an expert User Experience Researcher with expertise in User Personas.
You are working with a client to create a User Persona according to few questions that the user has answered.
We need the following in the User Persona:
1. Demographics
2. Summary
3. Needs
4. Goals
5. Pain Points
6. Expectations

Here are the questions that the user has answered:
{questions}

Here is the User Profile from the database:
{userProfile}

{formatInstructions}
`
