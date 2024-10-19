import AudioPlayer from '@/components/AudioPlayer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <article className="leading-6 m-0 px-8 py-8 sm:text-[1.2rem]">
        <AudioPlayer source={'/audio/why_people.mp3'} />
        <p>TownSquare is an ambitious project, and it is difficult to nail a 100% working plan.</p>

        <p>But we could start with a general plan, and tweak/change things as we go. Here is what I propose:</p>


        <p>Step 1 - Spread awareness and form a community.</p>

        <div className='ml-5'>
          <p>TownSquare is a new idea not known to the public, so the first step is to spread awareness to establish it in the public conscience.&nbsp;</p>

          <p>But this is easier said than done. Any movement will eventually fade out if the threshold required to accomplish the goal is not reached for long enough.&nbsp;</p>

          <p>To mitigate this time constraint, the awareness must not just be spread, but sustained.</p>

          <p>And this is why we must also form a community of members who support each other with friendship and fraternity. So any new member gained will not leave, and the group keeps growing as everyone struggle towards the same goal.&nbsp;</p>

          <p>Additionally, this step should be an ongoing effort even throughout the following steps.</p>
        </div>


        <p>Step 2 - Funding.</p>

        <div className='ml-5'>
          <p>Once the group is large enough, we will allow donations to help fund the movement. I myself believe that my full time dedication is crucial to its success, but I cannot do so indefinitely without funding.</p>
          <p>Depending on how much we are funded and based on the group discussion, we may also bring more people onboard full time or pay members for their time and service.&nbsp;</p>
        </div>


        <p>Step 3 - Create a demo app.</p>

        <div className='ml-5'>
          <p>As much as we can beautifully describe TownSquare, nothing beats having a demo app you can play with. This will help demonstrate the idea, especially when it comes to the next steps.</p>
        </div>
  

        <p>Step 4a - Push/lobby for TownSquare</p>

        <div className='ml-5'>
          <p>With the demo app ready, we present it simultaneously to the populace and the government, in hopes of convincing the latter to undertake the TownSquare project for the greater good.</p>

          <p>It shouldn&apos;t be too hard if we explain it in terms of fixing wealth inequality, which is responsible for rising cost of living, homelessness, crime, unemployment, etc. Our cities spends hundreds of millions annually addressing these issues, yet TownSquare as a digital platform will cost a tiny fraction of it to run.</p>
        </div>


        <p>Step 4b - Start a political party</p>

        <div className='ml-5'>
          <p>If the previous plan failed, then we go with plan B of forming a municipal party(or provincial/state level if needed) ourselves.</p>

          <p>This has the dual benefit of further spreading the movement during the campaigning process, and have full power to undertake the TownSquare project if elected.</p>
        </div>


        <p>Step 5 - And beyond&nbsp;</p>

        <div className='ml-5'>
          <p>Once the city becomes the first in the world to have its virtual twin or digital infrastructure.</p>

          <p>The inhabitants of other cities, seeing its benefit, would want their own TownSquare too. Thankfully, it will be easier to convince and implement now, given that there is a working open source example.</p>

          <p>All we need is for TownSquare to be implemented in one city in the world, and it will spread like wild fire across the world.</p>
        </div>

        <p>The movement is still in its infancy, and we need good people like you to spread it. <Link href="/join">Join here.</Link></p>

      </article>
    </>
  );
}
