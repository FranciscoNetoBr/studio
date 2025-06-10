'use server';
/**
 * @fileOverview Determines whether an article should be summarized using AI.
 *
 * - decideToSummarize - A function that decides whether to summarize an article based on its length.
 * - DecideToSummarizeInput - The input type for the decideToSummarize function.
 * - DecideToSummarizeOutput - The return type for the decideToSummarize function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DecideToSummarizeInputSchema = z.object({
  articleContent: z.string().describe('The full text content of the article.'),
});
export type DecideToSummarizeInput = z.infer<typeof DecideToSummarizeInputSchema>;

const DecideToSummarizeOutputSchema = z.object({
  shouldSummarize: z.boolean().describe('Whether the article should be summarized.'),
  reason: z.string().describe('The reason for the summarization decision.'),
});
export type DecideToSummarizeOutput = z.infer<typeof DecideToSummarizeOutputSchema>;

export async function decideToSummarize(input: DecideToSummarizeInput): Promise<DecideToSummarizeOutput> {
  return decideToSummarizeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'decideToSummarizePrompt',
  input: {schema: DecideToSummarizeInputSchema},
  output: {schema: DecideToSummarizeOutputSchema},
  prompt: `You are an AI assistant that decides whether a given article should be summarized to improve the user experience. Consider the article's length and complexity. If the article is long or complex, it should be summarized. Return a JSON object indicating whether to summarize and the reasoning behind your decision.\n\nArticle Content: {{{articleContent}}}`,
});

const decideToSummarizeFlow = ai.defineFlow(
  {
    name: 'decideToSummarizeFlow',
    inputSchema: DecideToSummarizeInputSchema,
    outputSchema: DecideToSummarizeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
