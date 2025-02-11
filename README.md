# AI Agent Tutorial [AI SDK + Payman PayKit]

This project demonstrates how to build an AI-powered payment agent using Next.js, AI SDK, and Payman PayKit. The agent can help users send money and manage financial transactions through natural language conversations.

## Prerequisites

- Node.js 18+ installed
- A Payman API account and API keys
- An OpenAI API key

## Setup

1. Clone this repository and install dependencies:

```bash
git clone <your-repo-url>
cd spend-app-agent
npm install
```

2. Create a `.env.local` file in the root directory with your API keys:

```env
OPENAI_API_KEY=your_openai_api_key
PAYMAN_API_SECRET=your_payman_api_secret
PAYMAN_ENVIRONMENT=sandbox
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the payment agent in action.

## Project Structure

- `src/app/page.tsx`: The main chat interface component
- `src/app/api/chat/route.ts`: The API route handling chat interactions and payment processing

## How It Works

This project combines several key technologies:

1. **AI SDK**: Provides the chat interface and AI streaming capabilities
2. **OpenAI GPT-4**: Powers the natural language understanding
3. **Payman PayKit**: Handles the actual payment processing
4. **Next.js**: Provides the application framework and API routes

The agent can:
- Understand natural language payment requests
- Process payments using Payman PayKit
- Provide real-time feedback on transactions
- Handle multiple conversation turns

## Example Usage

You can interact with the agent using natural language, for example:

- "Send $50 to John"
- "What's my transaction history?"
- "Help me set up a recurring payment"

## Development

The project uses the following key dependencies:

- `@ai-sdk/openai`: For OpenAI integration
- `@ai-sdk/react`: For React hooks and components
- `payman-paykit`: For payment processing
- `ai`: For streaming AI responses

## Customization

You can customize the agent's behavior by modifying:

1. The system prompt in `api/chat/route.ts`
2. The available payment tools in the PayKit configuration
3. The chat interface styling in `page.tsx`

## Learn More

- [AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Payman PayKit Documentation](https://docs.payman.com)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
