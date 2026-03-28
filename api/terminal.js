// api/terminal.js
// TERMINAL.exe — AI fallback for unknown commands
// Grok → Groq → Gemini fallback chain
//
// Env vars: XAI_API_KEY, GROQ_API_KEY, GEMINI_API_KEY

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { query, context } = req.body || {};
    if (!query) return res.status(400).json({ error: 'No query provided' });

    const systemPrompt = context || `You are a terminal AI for a developer portfolio. Answer concisely in plain text, no markdown.`;
    const userMsg = query;

    const openAiMessages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMsg }
    ];

    // ── Grok ──
    const XKEY = process.env.XAI_API_KEY;
    if (XKEY) {
      try {
        const r = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${XKEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ model:'grok-3-mini', messages:openAiMessages, max_tokens:300, temperature:0.8 })
        });
        const d = await r.json();
        const text = d?.choices?.[0]?.message?.content;
        if (r.ok && text) return res.status(200).json({ reply: text.trim() });
        console.log('[TERMINAL] Grok failed:', r.status, d?.error?.message);
      } catch(e) { console.log('[TERMINAL] Grok error:', e.message); }
    }

    // ── Groq ──
    const GQKEY = process.env.GROQ_API_KEY;
    if (GQKEY) {
      const models = ['llama-3.3-70b-versatile','llama-3.1-8b-instant','mixtral-8x7b-32768'];
      for (const model of models) {
        try {
          const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${GQKEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ model, messages:openAiMessages, max_tokens:300, temperature:0.8 })
          });
          const d = await r.json();
          const text = d?.choices?.[0]?.message?.content;
          if (r.ok && text) return res.status(200).json({ reply: text.trim() });
          console.log(`[TERMINAL] Groq ${model} failed:`, r.status);
        } catch(e) { console.log(`[TERMINAL] Groq ${model} error:`, e.message); }
      }
    }

    // ── Gemini ──
    const GKEY = process.env.GEMINI_API_KEY;
    if (GKEY) {
      const models = ['gemini-2.0-flash-lite','gemini-1.5-flash-8b','gemini-2.5-flash'];
      for (const model of models) {
        try {
          const r = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GKEY}`,
            {
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify({
                contents:[{role:'user',parts:[{text:userMsg}]}],
                systemInstruction:{parts:[{text:systemPrompt}]},
                generationConfig:{maxOutputTokens:300,temperature:0.8}
              })
            }
          );
          const d = await r.json();
          const text = d?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (r.ok && text) return res.status(200).json({ reply: text.trim() });
          console.log(`[TERMINAL] Gemini ${model} failed:`, r.status);
        } catch(e) { console.log(`[TERMINAL] Gemini ${model} error:`, e.message); }
      }
    }

    return res.status(500).json({ error: 'All providers failed' });
  } catch(e) {
    console.error('[TERMINAL] Error:', e);
    return res.status(500).json({ error: e.message });
  }
}