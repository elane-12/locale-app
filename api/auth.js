// Simple user session validation endpoint
// In production, replace with a real DB (Supabase, PlanetScale, etc.)
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { action, username, email } = req.body || {};

  if (action === 'register' || action === 'login') {
    if (!username || !email) return res.status(400).json({ error: 'Username and email required' });
    // Return a simple user token (in production use JWT + DB)
    const token = Buffer.from(`${username}:${email}:${Date.now()}`).toString('base64');
    return res.status(200).json({
      success: true,
      user: { username, email, token, avatar: username.slice(0,2).toUpperCase(), joinedAt: new Date().toISOString() }
    });
  }

  return res.status(400).json({ error: 'Unknown action' });
}
