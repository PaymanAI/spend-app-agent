import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { paykit } from 'payman-paykit';

const tools = paykit({
  apiSecret: process.env.PAYMAN_API_SECRET!,
  environment: process.env.PAYMAN_ENVIRONMENT as 'sandbox' | 'production'
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const result = streamText({
      model: openai('gpt-4o'),
      toolCallStreaming: true,
        system: 'You are a payment assistant that can help send money and manage financial transactions.',
        messages,
        tools,
        maxSteps: 5,
  })

    return result.toDataStreamResponse();
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}