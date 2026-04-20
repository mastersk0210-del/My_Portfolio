import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are Srikaran Sankar's portfolio assistant. Answer questions about Srikaran briefly and helpfully.

About Srikaran:
- Machine Learning Engineer & Data Scientist based in Ireland and India
- Skills: Data Analytics, Machine Learning, Deep Learning, NLP, Artificial Intelligence, Data Visualization, Python/Java/R, Web Development
- 2+ years hands-on experience, 10+ projects completed, 10+ certifications
- Contact: mastersk0210@gmail.com | +353 894002480 | Dublin, Ireland
- LinkedIn: linkedin.com/in/srikaran-sankar
- GitHub: github.com/mastersk0210-del
- Portfolio: srithings.info
- Services: Data Analysis, Analytical Thinking, Gap Analysis, Data Visualization, Machine Learning, Web Development

Keep responses concise (2-3 sentences max). If asked something unrelated, politely redirect to Srikaran's work.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages' });
  }

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages,
    });

    res.status(200).json({ reply: response.content[0].text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response' });
  }
}
