
export default function TokenGate({ children }: { children: React.ReactNode }) {
  const hasToken = true;
  return <>{hasToken ? children : <p>Access requires $TONE token</p>}</>;
}
