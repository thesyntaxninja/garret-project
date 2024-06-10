import Image from "next/image";
import type { User } from '@/types'

import { AutoComplete } from '@/components/AutoComplete'

const users: User[] = [
    { id: '1', name: 'Alice Smith', username: 'alice_s' },
    { id: '2', name: 'Bob Johnson', username: 'bob_j' },
    { id: '3', name: 'Charlie Davis', username: 'charlie_d' },
    { id: '4', name: 'Diana Clark', username: 'diana_c' },
    { id: '5', name: 'Evan Lee', username: 'evan_l' },
    { id: '6', name: 'Fiona Green', username: 'fiona_g' },
    { id: '7', name: 'George White', username: 'george_w' },
    { id: '8', name: 'Hannah Black', username: 'hannah_b' },
    { id: '9', name: 'Ian Brown', username: 'ian_b' },
    { id: '10', name: 'Jill Wilson', username: 'jill_w' },
]

export default function Home() {
  return (
      // todo: build a autocomplete component
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <AutoComplete users={users} />
    </main>
  );
}
