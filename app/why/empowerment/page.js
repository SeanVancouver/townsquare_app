'use client'
import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';
import { useEffect } from 'react';

const Index = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <article className="leading-6 m-0 px-8 py-8 sm:text-[1.2rem]">
        <AudioPlayer source={'/audio/why_empowerment.mp3'}/>

        <p>There is a saying that &quot;Birds born in a cage think flying is an illness&quot;. This quote means that people prefers to stay with what they know and are afraid of the unknown, even if the unknown could be exponentially better.</p>
        <p>TownSquare is the unknown that could make your life unimaginably better. It will empower you with endless possibilities, as if you have wings and can fly.</p>
        <p>It offers you the power to instantly reach the entire population of your city. Instead of interacting on the usual person to person basis, you can now broadcast to the entire city, and hear the city answer back to you. When yield properly, it can make your whatever dream of yours come true.</p>
        <p>Just imagine the leverage this gives you. This is having an equivalent reach of a top tier influencer or Youtuber who have millions of followers/subscribers, except that you never have to work for it. Whether you have an idea to spread or a project to create, you can now find like minded people city wide at the click of a button. Here are just three possible uses.</p>
        <p>1. Seeking</p>
        <p style={{marginLeft: '2rem'}}>Say that you are a tough looking bearded biker, but Hello Kitty is your secret guilty pleasure. You can&apos;t join any hobby groups because your appearance scares the participants who are mostly little girls. But with TownSquare, you can now filter the entire city&apos;s population, for other Hello Kitty loving bikers. Then you get a map of people matching the criteria. There may not be many, but at least now you can find your niche tribe.</p>
        <p>2. Browsing</p>
        <p style={{marginLeft: '2rem'}}>Sometimes we don&apos;t know what exactly we are looking for, and just want to browse to see what is available. No problem. At TownSquare, you can scroll to see posts just like with Twitter or Instagram, with the exception that all posts are made by people from your city. You can customize or prioritize what you see. For example, you can filter for only posts about a certain topics, or from authors matching a certain criteria, like Hello Kitty loving bikers.</p>
        <p>3. Partaking</p>
        <p style={{marginLeft: '2rem'}}>And if you want to hang out with people live, TownSquare offers virtual townhalls that caters to different groups. We may for example, have a fun town hall for live football matches, or a support town hall for first time moms. Whoever you are and whatever your interests are, it will feel like you can step into your desired conversation whenever you want.</p>
        <p>The possibilities are endless. And it is all possible because TownSquare limits the service area to that of a city. Since we don't have to think about scaling geographically, we can implement as much features as we desire, whether it is allowing money transfer between users, or API integration with other platforms, or whatever the people desire.</p>
        <p>This unprecedented power was previously only held by the big data companies, but now it is in the palm of your hand. Of course everyone else will share this power, but this is what brings back the community and expand our individual and collective conscience.</p>

        <div className='flex justify-between flex-col sm:flex-row'>
          <p className='mb-0'>Next reason: <Link href="/why/socialmedia">Social&nbsp;media&nbsp;&#62;</Link></p>
        </div>

      </article>
    </>
  )
}

export default Index