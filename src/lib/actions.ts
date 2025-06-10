'use server';

import { summarizeNewsArticle as summarizeNewsArticleFlow, SummarizeNewsArticleOutput } from '@/ai/flows/summarize-news-article';

interface SmartSummaryOutput extends SummarizeNewsArticleOutput {
  wasSummarized: boolean;
}

export async function getSmartSummary(
  articleContent: string
): Promise<SmartSummaryOutput> {
  try {
    const output = await summarizeNewsArticleFlow({
      articleContent,
      improveSummary: true, // This enables the internal tool to decide if summarization is beneficial
    });
    
    // The flow returns original content if its tool decides not to summarize.
    const wasSummarized = output.summary !== articleContent;
    
    return { summary: output.summary, wasSummarized };
  } catch (error) {
    console.error("Error in getSmartSummary:", error);
    // In case of an error, return the original content and indicate no summarization occurred.
    return { summary: articleContent, wasSummarized: false };
  }
}
