import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';

export default function Home() {
  return (
    <>
      {/* <Header>
        <h1>About the Project</h1>
        <h2>Welcome, you have stumbled something that will revolutionize our world. Join us, to make this happen</h2>
      </Header> */}
      <div>

        <article className="leading-8 m-0 px-4 py-8 text-[1.2rem]">
        <AudioPlayer source={'/audio/main_page.mp3'} />

          <p>TownSquare is possibly the most important project in this century, due to the snowball effect of social changes it can bring.</p>
          <p>It is a social media platform based on a simple, yet revolutionary concept and philosophy; that the social media should be integrated into a city&apos;s infrastructure.&nbsp;</p>
          <p>Just like how cities have physical infrastructure like road and transportations to facilitate physical exchange, they should also have a virtual infrastructure to facilitate information exchange and organizing.</p>
          <p>Currently, all the social media models are based on satisfying one particular social need, then expand geographically, think LinkedIn for work, Facebook for friends, Tinder for relationship. While this works to maximize users and profit, it is too simplified to account for the complexity of human psychology and social behavior.</p>
          <p>Think about how medieval town squares are. It is a single gathering point that hosts all the social functions, whether it is the markets, entertainments, speeches, news, discussions, or protests.&nbsp;</p>

          <p>People interact with each other with all their humanities and uniqueness, form bounds and open up new possibilities. Even if two people are not a good match for one social need, they may be perfect for something else. We are evolved to interact organically, not reduced to curated numbers and stats.</p>

          <p>Of course it is no longer cost efficient for everyone to travel to one place nowadays, but the principles of human social interactions has not changed. Online or physical, we still need a &quot;town square&quot; as gathering point, instead of the fragmented social landscape we have today.</p>

          <p>The TownSquare project is specifically design to accomplish this. It limits the area serve to that of a city, which is where most people care about anyway when they socialize.</p>

          <p>By doing so, we trade the geographical scaling for the quality and depth of social interactions. This grant you, as the user, unprecedented possibilities, such as:</p>

          <p>&nbsp; &nbsp; - Messaging everyone in the city, or any target group, at the click of a button.&nbsp;</p>

          <p>&nbsp; &nbsp; - Filter the entire city to find anyone by any specific custom criteria.</p>

          <p>It is a platform by the people and for the people. By evolving with the city it helps transform, it aims to satisfy any needs and desires of its inhabitant. Sky is the limit.&nbsp;</p>


          <p>Next: watch a demo app <a href="https://youtu.be/TWWylIMUOBg?si=eiqCtLQEsDrQDHJM" target="_blank" rel="noopener noreferrer"><span className="text-2xl"><strong>here</strong></span></a>, or see why TownSquare matters <Link className="text-2xl" href="/why"><u><strong>here</strong></u></Link></p>
          {/* <p><a href="https://youtu.be/TWWylIMUOBg?si=eiqCtLQEsDrQDHJM" target="_blank" rel="noopener noreferrer"><span className="text-2xl"><strong>Watch demo here, </strong></span></a>to get an idea of how such social platform look like.</p>

          <p>I am 100% convinced of this movement's potential, and would like to convince you as well. See why TownSquare matters <Link className="text-2xl" href="/why"><u><strong>here</strong></u></Link>.</p> */}
        </article>
      </div>
    </>
  );
}
