
import { useEffect, useState } from 'react';
import { connectWallet } from '../lib/wallet';

export default function useWallet() {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    connectWallet().then(setAccount);
  }, []);

  return account;
}
