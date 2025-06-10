'use server';
/**
 * @fileOverview Summarizes a news article using AI, providing a concise summary.
 *
 * - summarizeNewsArticle - A function that summarizes a news article.
 * - SummarizeNewsArticleInput - The input type for the summarizeNewsArticle function.
 * - SummarizeNewsArticleOutput - The return type for the summarizeNewsArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeNewsArticleInputSchema = z.object({
  articleContent: z.string().describe('The content of the news article to summarize.'),
  improveSummary: z.boolean().describe('Determine if summary will improve user experience')
});
export type SummarizeNewsArticleInput = z.infer<typeof SummarizeNewsArticleInputSchema>;

const SummarizeNewsArticleOutputSchema = z.object({
  summary: z.string().describe('The concise summary of the news article.'),
});
export type SummarizeNewsArticleOutput = z.infer<typeof SummarizeNewsArticleOutputSchema>;

export async function summarizeNewsArticle(input: SummarizeNewsArticleInput): Promise<SummarizeNewsArticleOutput> {
  return summarizeNewsArticleFlow(input);
}

const summarizeArticlePrompt = ai.definePrompt({
  name: 'summarizeArticlePrompt',
  input: {schema: SummarizeNewsArticleInputSchema},
  output: {schema: SummarizeNewsArticleOutputSchema},
  prompt: `Summarize the following news article in a concise manner:\n\n{{{articleContent}}}`,
});

const shouldSummarizeArticle = ai.defineTool({
  name: 'shouldSummarizeArticle',
  description: 'Determine if the news article can be summarized to improve user experience.',
  inputSchema: z.object({
    articleContent: z.string().describe('The content of the news article.'),
  }),
  outputSchema: z.boolean(),
}, async (input) => {
  // Implement logic to determine if the article should be summarized.
  // This could be based on length, complexity, etc.
  return input.articleContent.length > 500; // Example: Summarize if longer than 500 characters
});

const summarizeNewsArticleFlow = ai.defineFlow(
  {
    name: 'summarizeNewsArticleFlow',
    inputSchema: SummarizeNewsArticleInputSchema,
    outputSchema: SummarizeNewsArticleOutputSchema,
    tools: [shouldSummarizeArticle],
  },
  async input => {
    if (input.improveSummary) {
      const shouldSummarize = await shouldSummarizeArticle({
        articleContent: input.articleContent,
      });

      if (!shouldSummarize) {
        return { summary: input.articleContent };
      }
    }
    const {output} = await summarizeArticlePrompt(input);
    return output!;
  }
);
