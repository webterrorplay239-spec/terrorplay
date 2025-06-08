"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useToast } from "@/components/ui/use-toast";
import { generateTrendingHorrorStory, type TrendingHorrorStoryInput, type TrendingHorrorStoryOutput } from '@/ai/flows/include-trending-themes';
import { Sparkles, FileText } from 'lucide-react';

const storySchema = z.object({
  userPreferences: z.string().min(10, { message: "Please describe your preferences in at least 10 characters." }).max(500, { message: "Preferences cannot exceed 500 characters."}),
  storyLength: z.enum(['short', 'medium', 'long'], { required_error: "Please select a story length." }),
});

type StoryFormData = z.infer<typeof storySchema>;

export default function StoryGeneratorPage() {
  const [generatedStory, setGeneratedStory] = useState<TrendingHorrorStoryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<StoryFormData>({
    resolver: zodResolver(storySchema),
    defaultValues: {
      userPreferences: '',
      storyLength: 'medium',
    },
  });

  const onSubmit: SubmitHandler<StoryFormData> = async (data) => {
    setIsLoading(true);
    setGeneratedStory(null);
    try {
      const result = await generateTrendingHorrorStory(data as TrendingHorrorStoryInput);
      setGeneratedStory(result);
      toast({
        title: "Story Generated!",
        description: "Your custom horror story is ready.",
      });
    } catch (error) {
      console.error("Error generating story:", error);
      toast({
        title: "Error Generating Story",
        description: "Could not generate your story. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <section className="text-center animate-fade-in">
        <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-headline text-primary mb-3">AI Story Generator</h1>
        <p className="text-xl text-muted-foreground">
          Craft your own nightmare. Tell our AI what terrifies you, and watch it weave a unique horror story.
        </p>
      </section>

      <Card className="shadow-2xl shadow-primary/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Create Your Horror</CardTitle>
          <CardDescription>Define your story's elements and let the AI bring it to life... or death.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="userPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A story about a haunted lighthouse, with a lone protagonist, focusing on psychological horror and a sense of isolation. Include themes of recent unexplained disappearances."
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="storyLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Story Length</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select desired length" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="short">Short (Approx. 500 words)</SelectItem>
                        <SelectItem value="medium">Medium (Approx. 1000 words)</SelectItem>
                        <SelectItem value="long">Long (Approx. 1500+ words)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isLoading ? (
                  <>
                    <LoadingSpinner size={20} className="mr-2" /> Conjuring Nightmares...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" /> Generate Story
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {generatedStory && (
        <Card className="mt-10 shadow-2xl shadow-accent/20 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-accent" />
              <CardTitle className="font-headline text-3xl text-accent">{generatedStory.title}</CardTitle>
            </div>
            <CardDescription>Your custom-generated horror story. Read if you dare.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none whitespace-pre-wrap font-body leading-relaxed text-foreground">
              {generatedStory.story}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
