
import { useState } from 'react';
import { rewriteEmail } from '../lib/ai';

export default function Compose() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  async function handleRewrite() {
    const result = await rewriteEmail(input);
    setOutput(result);
  }

  return (
    <div>
      <textarea value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleRewrite}>Enhance</button>
      <pre>{output}</pre>
    </div>
  );
}
