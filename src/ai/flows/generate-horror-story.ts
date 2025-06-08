'use server';

/**
 * @fileOverview AI agent that generates custom horror stories based on user preferences.
 *
 * - generateHorrorStory - A function that generates a horror story.
 * - GenerateHorrorStoryInput - The input type for the generateHorrorStory function.
 * - GenerateHorrorStoryOutput - The return type for the generateHorrorStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHorrorStoryInputSchema = z.object({
  theme: z.string().describe('The theme of the horror story (e.g., paranormal, slasher, monster, zombie).'),
  characters: z.string().describe('The characters in the horror story.'),
  setting: z.string().describe('The setting of the horror story.'),
  length: z.string().describe('The desired length of the horror story (short, medium, long).'),
});

export type GenerateHorrorStoryInput = z.infer<typeof GenerateHorrorStoryInputSchema>;

const GenerateHorrorStoryOutputSchema = z.object({
  story: z.string().describe('The generated horror story.'),
});

export type GenerateHorrorStoryOutput = z.infer<typeof GenerateHorrorStoryOutputSchema>;

export async function generateHorrorStory(input: GenerateHorrorStoryInput): Promise<GenerateHorrorStoryOutput> {
  return generateHorrorStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHorrorStoryPrompt',
  input: {schema: GenerateHorrorStoryInputSchema},
  output: {schema: GenerateHorrorStoryOutputSchema},
  prompt: `You are a horror story writer. Generate a custom horror story based on the following preferences:

Theme: {{{theme}}}
Characters: {{{characters}}}
Setting: {{{setting}}}
Length: {{{length}}}

Write a story that is engaging, suspenseful, and scary.`,
});

const generateHorrorStoryFlow = ai.defineFlow(
  {
    name: 'generateHorrorStoryFlow',
    inputSchema: GenerateHorrorStoryInputSchema,
    outputSchema: GenerateHorrorStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
