import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <>
      <AudioPlayer source={'/audio/main_page.mp3'} />
      <div>
        <p>In 1958, the Chinese Communist Party launched the Great Leap Forward, where private farms where replaced by communal ones with harsh production quotas. The peasants were told that the quota were set according to the production level of other villages, and often have their crops forcefully confisticated to meet it.</p>
        <p><br /></p>
        <p>Everyone thought their village is the only one underperforming, so any resistance is futile. But in reality, almost all villages across China were suffering the exact same fate. As result, up to 55 millions starved in the span of three years.</p>
        <p><br /></p>
        <p>Had the villagers being able to communicate with each other, they would have realized the extend of the problem, and perhaps start a widespread revolt. But they couldn&apos;t, because any dictatorship worth their salt knows their hold onto power lies in the absolute control of information.</p>
        <p><br /></p>
        <p>So how do the dicators of the East compare with the elites of the West? Having lived in both East and West, I can say that the Western elites operates at a higher level with more succint and skills.</p>
        <p><br /></p>
        <p>They are very well aware of the discontent of the populace, but instead of suppressing it and risk exposing themselves, they prefer to own and commandeer it, like a controlled opposition.</p>
        <p><br /></p>
        <p>Just think about how many Youtube videos are popping up nowadays complaining about the wealth disparity and the impending collapse. They all share the same patterns:</p>
        <p><br /></p>
        <p>&nbsp; &nbsp; 1. Describe the problem beautifully, but propose no real solution other than a dire warning.</p>
        <p><br /></p>
        <p>&nbsp; &nbsp; 2. And when they do propose a solution, it is always one of these two types:</p>
        <p><br /></p>
        <p>&nbsp; &nbsp; &nbsp; &nbsp; - Some kind of systematic solution that is too much to implement for its supposed benefit.&nbsp;</p>
        <p><br /></p>
        <p>&nbsp; &nbsp; &nbsp; &nbsp; - The &quot;How to save yourself and your loved ones&quot; kind.</p>
        <p>&nbsp; &nbsp;&nbsp;</p>
        <p>The purpose is to condition us to accept the wealth inequality and the impending collapse. It further divides us by rewiring our brain so that even when we try to find a solution, we think self-preservation and rat race.</p>
        <p><br /></p>
        <p>TownSquare is exactly designed to break the spell by doing the opposite, by empowering and uniting the people. There is no gatekeeping to the number of people one can reach. At a click of a button one can broadcast to the entire city to find and organize with like minded people.</p>
        <p><br /></p>
        <p>You see, the question of wealth inequality is too broad for the society to achieve a consensus. College student, parents, immigrant and everyone else experience it differently. What TownSquare does, is to lower the threshold required for taking actions. So instead of arguing about the &quot;right&quot; solution into oblivion, everyone can find their tribe and implement their own best solution.</p>
        <p><br /></p>
        <p>And this is how we can take down the elites, brick by brick. Every little empowerment for the population chips away their control, and it all starts with TownSquare.</p>
      </div>

      <div>
        <p>Previous reason: <Link href="/why/capitalism">Capitalism</Link></p>

        <p>Next reason: <Link href="/why/peole">People</Link></p>
      </div>
    </>
  )
}

export default Index