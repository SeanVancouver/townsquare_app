import Header from "@/components/Header";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* <Header>
        <h1>About the Project</h1>
        <h2>Welcome, you have stumbled something that will revolutionize our world. Join us, to make this happen</h2>
      </Header> */}
      <div>

        <article>
          <h2>TownSquare movement:</h2>
          <p>You have stumbled upon perhaps the most important movement of this century.</p>
          <p>The Townsquare movement aims to achieve the creation of the Townsquare project, a social infrastructure for the inhabitants of a city.</p>
          <p>The movement is in its infancy, and we need good people like you to help it succeed.</p>
        </article>

        <article>
          <h2>TownSquare project:</h2>
          <div className="md:flex">

            <iframe className="flex-1"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>

            <div className="flex-1">

              <p>The TownSquare project is an open sourced social media platform fully dedicated to the needs and desires of a city. It allows its inhabitants to find, communicate and organize together. Just like how cities have physical infrastructure like roads and buses to facilitate the flow of goods, they should also have a virtual infrastructure to facilitate the flow of information.</p>
              <p>By focusing on a city instead of a vast undefined geographical area, TownSquare allows:</p>
              <ul>
                <li><strong>More feature to the user</strong>: It can focus on empowering the user by giving them unprecedented features and reach, such as:<ol>
                  <li>Filtering everyone by a set of highly customizable criteria</li>
                  <li>Then message all the matched users at once</li>
                </ol>
                </li>
                <li><strong>Adaptability</strong>: It can evolve with the city, by constantly changing its social landscape and responding to its ever changing need.</li>
              </ul>
            </div>

          </div>


          <p>Next: watch a demo app <a href="https://youtu.be/TWWylIMUOBg?si=eiqCtLQEsDrQDHJM" target="_blank" rel="noopener noreferrer"><span className="text-2xl"><strong>here</strong></span></a>, or see why TownSquare matters <Link className="text-2xl" href="/why"><u><strong>here</strong></u></Link></p>
          {/* <p><a href="https://youtu.be/TWWylIMUOBg?si=eiqCtLQEsDrQDHJM" target="_blank" rel="noopener noreferrer"><span className="text-2xl"><strong>Watch demo here, </strong></span></a>to get an idea of how such social platform look like.</p>

          <p>I am 100% convinced of this movement's potential, and would like to convince you as well. See why TownSquare matters <Link className="text-2xl" href="/why"><u><strong>here</strong></u></Link>.</p> */}
        </article>
      </div>
    </>
  );
}
