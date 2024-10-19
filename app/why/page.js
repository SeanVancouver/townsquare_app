'use client'

import { useState } from 'react';
import Link from 'next/link';
import ReasonsModal from './ReasonsModal';

const Index = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="leading-8 m-0 px-4 py-8 text-[1.2rem]">
        <p>As much as I&apos;d like to persuade you of the necessity of TownSquare, it is difficult without knowing your proclivities/desires.&nbsp;</p>
        <p>Read them all, or answer <span className="text-2xl cursor-pointer underline" onClick={() => {
          setIsOpen(true);
        }}><u><strong>this quiz</strong></u></span> to find the one that suits you.</p>
        <ol>
          <li><Link href="/why/empowerment">Empowerment</Link></li>
          <li><Link href="/why/socialmedia">Social media</Link></li>
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