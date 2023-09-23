import { z } from 'zod'

export const UserPersonaSchema = z.object({
  name: z.string().min(1, { message: 'Name must not be empty' }).describe("The user's full name"),
  age: z.number().int().min(0).describe("The user's age in years"),
  gender: z
    .enum(['Male', 'Female', 'Non-Binary', 'Transgender', 'Other', 'Prefer Not to Say'])
    .describe("The user's gender identity"),
  location: z.string().min(1).describe("The user's current location"),
  needs: z.array(z.string()).max(5).describe("An array of the user's identified needs"),
  goals: z.array(z.string()).max(5).describe("An array of the user's goals and aspirations"),
  painPoints: z.array(z.string()).max(5).describe("An array of the user's pain points or challenges"),
  expectations: z.array(z.string()).max(5).describe("An array of the user's expectations and desires"),
})

export type UserPersona = z.infer<typeof UserPersonaSchema>

export const personaPromptTemplate = `Act as an expert User Experience Researcher with expertise in User Personas.
You are working with a client to create a User Persona according to few questions that the user has answered.
Overall theme of the persona is {theme}.
The persona should contain the following information:
- Name
- Age
- Gender
- Location
- Needs (max 5)
- Goals (max 5)
- Pain Points (max 5)
- Expectations (max 5)


Here are the questions that the user has answered:
{questions}

Here is the User Profile from the database:
{userProfile}

Strict Output Format Instructions:
{formatInstructions}
`
