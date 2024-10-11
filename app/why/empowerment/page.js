import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <>
      <AudioPlayer />
      <div>
        <p>Would you like to have superpower? Not like flying or anything, but a power that, when yield properly, can bring you more of whatever you wanted, whether money, fame, friends, or else.</p>
        <p>What TownSquare can offer you, is the ability to instantly reach the entire population of your city. Instead of interacting on the usual person to person basis, you can now broadcast to the entire city, and hear the city echo back to you.</p>
        <p>Just imagine the leverage this gives you. This is having an equivalent reach of a top tier influencer or Youtuber who have millions of followers/subscribers, except that you never have to work for it.</p>
        <p>Here are three scenarios on how you may use your newfound power.</p>
        <p>1. Seeking</p>
        <p>&nbsp; &nbsp; Say that you are a tough looking bearded biker, but Hello Kitty is your secret guilty pleasure. You can&apos;t join any hobby groups because your appearance scares the participants who are mostly little girls.</p>
        <p>&nbsp; &nbsp; But with TownSquare, you can now filter the entire city&apos;s population, for other Hello Kitty loving bikers. There may not be many, but at least now you can find your niche tribe.</p>
        <p><br /></p>
        <p>2. Browsing</p>
        <p>&nbsp; &nbsp; Sometimes we don&apos;t know what exactly we are looking for, and just want to browse to see what is available. No problem. At TownSquare, you can scroll to see posts just like with Twitter or Instagram, with the exception that all posts are made by people from your city.</p>
        <p>&nbsp; &nbsp; Of course you can also customize or prioritize what you see. For example, you can filter for only posts about a certain topics, or from authors matching a certain criteria, like Hello Kitty loving bikers.</p>
        <p><br /></p>
        <p>3. Partaking</p>
        <p>&nbsp; &nbsp; And if you want to hang out with people live, TownSquare offers virtual townhalls that caters to different groups.</p>
        <p>&nbsp; &nbsp; We may for example, have a fun town hall for live football matches, or a support town hall for first time moms. Whoever you are and whatever your interests are, it will feel like you can step into your kind of party whenever you want.</p>
        <p><br /></p>
        <p>These are just three examples to illustrate, the reality is that the possibilities are endless. And it is all possible because TownSquare limits the service area to that of a city. Because we don&apos;t have to think about scaling geographically, we can implement as much features as we desire, thus empowering everyone and bringing back fun and community.</p>
        <p>This ability to see and reach everyone was previously only held by the big data companies, but now it is in your hand, and you can see your city as the true lively beast it is.</p>
      </div>

      <div>
        <p>Next reason: <Link href="/why/bettersocialmedia">Better social media</Link></p>
      </div>
    </>
  )
}

export default Index