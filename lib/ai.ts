
import axios from 'axios';

export async function rewriteEmail(content: string): Promise<string> {
  const res = await axios.post('/api/rewrite', { content });
  return res.data.rewritten;
}
