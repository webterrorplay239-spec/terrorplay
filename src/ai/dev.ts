
import { config } from 'dotenv';
config();

// Note: generate-horror-story.ts is not directly used by any page now,
// but include-trending-themes.ts is used by /experiencias page.
// Keeping both for now unless cleanup is requested.
import '@/ai/flows/include-trending-themes.ts';
import '@/ai/flows/generate-horror-story.ts';
