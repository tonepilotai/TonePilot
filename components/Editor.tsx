
export default function Editor({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return <textarea value={value} onChange={e => onChange(e.target.value)} />;
}
