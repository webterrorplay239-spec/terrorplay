'use server';

/**
 * @fileOverview This file defines a Genkit flow that generates horror stories incorporating trending themes by using a tool to fetch current events.
 *
 * - generateTrendingHorrorStory - A function that generates a horror story with trending themes.
 * - TrendingHorrorStoryInput - The input type for the generateTrendingHorrorStory function.
 * - TrendingHorrorStoryOutput - The return type for the generateTrendingHorrorStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TrendingHorrorStoryInputSchema = z.object({
  userPreferences: z.string().describe('The user\'s preferences for the horror story, such as preferred subgenres, themes, and characters.'),
  storyLength: z.string().describe('The desired length of the horror story (e.g., short, medium, long).'),
});
export type TrendingHorrorStoryInput = z.infer<typeof TrendingHorrorStoryInputSchema>;

const TrendingHorrorStoryOutputSchema = z.object({
  title: z.string().describe('The title of the generated horror story.'),
  story: z.string().describe('The generated horror story incorporating user preferences and trending themes.'),
});
export type TrendingHorrorStoryOutput = z.infer<typeof TrendingHorrorStoryOutputSchema>;

async function generateTrendingHorrorStory(input: TrendingHorrorStoryInput): Promise<TrendingHorrorStoryOutput> {
  return generateTrendingHorrorStoryFlow(input);
}

const getCurrentEvents = ai.defineTool({
  name: 'getCurrentEvents',
  description: 'Fetches current events and trending themes to incorporate into the horror story.',
  inputSchema: z.object({
    query: z.string().describe('A query to specify the type of events to search for (e.g., \'current trending news topics\').'),
  }),
  outputSchema: z.string(),
}, async (input) => {
  // In a real implementation, this would call an external API or service to fetch current events.
  // For this example, we'll return a placeholder.
  return `Current events: Placeholder current events based on query: ${input.query}`;
});

const trendingHorrorStoryPrompt = ai.definePrompt({
  name: 'trendingHorrorStoryPrompt',
  input: {schema: TrendingHorrorStoryInputSchema},
  output: {schema: TrendingHorrorStoryOutputSchema},
  tools: [getCurrentEvents],
  prompt: `You are a horror story writer who incorporates user preferences and current events into your stories.

  User Preferences: {{{userPreferences}}}
  Story Length: {{{storyLength}}}

  First, use the getCurrentEvents tool to get the current trending news topics to include in the story.
  Incorporate these themes to make the story feel current.

  Write a horror story based on the above information.
  Your response should be in the format:
  Title: [Story Title]
  Story: [Generated Horror Story]`,
});

const generateTrendingHorrorStoryFlow = ai.defineFlow(
  {
    name: 'generateTrendingHorrorStoryFlow',
    inputSchema: TrendingHorrorStoryInputSchema,
    outputSchema: TrendingHorrorStoryOutputSchema,
  },
  async input => {
    const {output} = await trendingHorrorStoryPrompt(input);
    return output!;
  }
);

export {generateTrendingHorrorStory, TrendingHorrorStoryInput, TrendingHorrorStoryOutput};
