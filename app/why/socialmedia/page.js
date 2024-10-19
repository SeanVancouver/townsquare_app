import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <>
      <article className="leading-8 m-0 px-4 py-8 sm:text-[1.2rem]">
        <AudioPlayer source={'/audio/why_socialmedia.mp3'} />
        <p>The inventor of the internet, Tim Berners-Lee, once said: &quot;The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.&quot;</p>
        
        <p>The same could definitely said about today&apos;s social media landscape. In fact, there is so little quality social interaction that calling platforms like Twitter or Instagram social media could be considered a misnomer.</p>
        
        <p>The reason is simple, they are made by programmers with poor grasp of social interactions. They are used to code programs to do a sequence of one task at a time, relying on the lightspeed execution of the computer to give appearance of efficiency and multitasking. Unfortunately, they assumed the same pattern to human interaction in their app design, by allowing one need to be satisfied at a time.&nbsp;</p>
        
        <p>Real humans cannot work at lightspeed, and usually have many needs to be satisfied at various degree. Currently, if you are simultaneously looking for a job, a relationship, and a fishing buddy using social apps, you would have to make three profiles, and devote effort on the three platforms of LinkedIn, Tinder, and Meetup. In today&apos;s fast paced world of ever shrinking attention span, this would not be a rewarding use of your time.</p>
        
        <p>The only rewarding way of using the current social media platforms is to create and consume content, where the goal is to make money and grab attention, and not to socialize.</p>

        <p>When people socialize in real life, they use a more natural approach. They would get to know the person in their full humanities, whether it is the personality, physical features, what they can provide or desires. Then they make the best out of that exchange. This is way more enticing and rewarding because not only you may satisfy one or more of your needs, but you can also uncover new possibilities.</p> 

        <p>So back in our case, the person you are interacting got to know the real you, and like you enough to be your fishing buddy, even though they have never been fishing. They will also refer you to their single friends for relationship. And although they cannot offer you any employment, they'll keep an eye for you in their social network.</p>

        <p>And this is what TownSquare offers, by allowing users to see each other in their full humanity, and not just one facet. You can express anything you want, whether it is an article, artwork, project, etc., and get a reaction from the community. It is likely merging all the current social platforms into one, at the insignificant cost of limiting the geographical to one city, which is where most people care about when they socialize anyway.</p>
        
        <p>This works because it offers the prerequisite to mimick real and efficient human interaction. Instead of limiting the purpose of its users, TownSquare is purpose agnostic. The app is only responsible to make its users visible to others, and let the users reveal themselves.</p>
        
        <p>How can someone find you based on your profile? Say that you are looking to join a rock band; another user would be able to narrow down the population using their own customizable criteria, like someone with guitar skill between the age of 20 to 25. Then they would find your profile, and checkout the video you have uploaded shredding your guitar, and finally message you to join their band.&nbsp;</p>
        
        <p>The idea is to create an open world system where everyone and every post is visible. This is unprecedently empowering because you, as an individual, now have the power to interact with the entire city directly. This expenentially expand your reach from the perhaps the 20 people in your close network, to millions in your city.&nbsp;</p> 

        <p>Think about all the missed connections and untapped potentials, and how many more of the Mick Jagger and Keith Richards, the Steve Jobs and Steve Wozniak, we can unlock.</p>

        <div className='flex justify-between flex-col sm:flex-row'>
          <p className='mb-0'>Previous reason: <Link href="/why/empowerment">&lt;&nbsp;Empowerment</Link></p>
          <p className='mb-0'>Next reason: <Link href="/why/capitalism">Capitalism&nbsp;&#62;</Link></p>
        </div>
      </article>
    </>
  )
}

export default Index