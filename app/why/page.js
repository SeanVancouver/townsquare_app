'use client'

import { useState } from 'react';
import Link from 'next/link';
import ReasonsModal from './ReasonsModal';
import { useRouter } from 'next/navigation'

const Index = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article>
        <p>As much as I&apos;d like to persuade you of the necessity of TownSquare, it is difficult without knowing your proclivities/desires.&nbsp;</p>
        <p>So I created the 5 reasons below. But if you don&apos;t want to read them all, answer <span className="text-2xl cursor-pointer underline" onClick={() => {
          setIsOpen(true);
        }}><u><strong>this quiz</strong></u></span> and you will be directed to the most suitable one.</p>
        <ol>
          <li><Link href="/why/empowerment">Empowerment</Link></li>
          <li><Link href="/why/socialmedia">Better social media</Link></li>
          <li><Link href="/why/capitalism">Capitalism</Link></li>
          <li><Link href="/why/elites">Elites</Link></li>
          <li><Link href="/why/people">People</Link></li>
        </ol>
      </article>
      <ReasonsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>

  )
}

export default Index