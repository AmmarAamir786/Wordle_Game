import Image from "next/image";
import Mybutton from "@/components/Mybutton";
import Myhero from "@/components/Myhero";
import Yourscore from "@/components/Yourscore"; 
import ScoreboardIllustration from "@/components/ScoreboardIllustration";
import Myheader from "@/components/Myheader";
import TotalWinners from "@/components/TotalWinners";
import br from "@/assets/br rec.svg"
import bl from "@/assets/bl rec.svg"
import tr from "@/assets/tr rec.svg"
import tl from "@/assets/tl rec.svg"
import Strat from "@/components/Strat";
import Myfooter from "@/components/Myfooter";
import Myaccordion from "@/components/Myaccordion";
import bgimage from "@/assets/bgimage.svg"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      
      <Myheader></Myheader>

      {/* Main section */}
      <section className="flex flex-col justify-center items-center bg-neutral-50 relative">

        {/* bg images */}
        <Image src={bgimage} alt="bgimage" className="absolute top-0"></Image>

        <div className="w-[605px] h-[605px] opacity-50 bg-WarmCoral-1 rounded-full blur-[302px] absolute -left-[221px] -top-[155px]" />

        <div className="w-[605px] h-[605px] opacity-70 bg-SoftBlue-3 rounded-full blur-[302px] absolute top-[262px] right-0" />

        {/* Welcome */}
        <div className=" flex-col justify-start items-center gap-2 inline-flex lg:mt-[42px] mt-[24px] lg:w-[894px] w-[335px] text-center z-10">
          <div className="lg:w-[486px] text-center lg:text-[38px] text-[26px] font-bold leading-10 text-text-1">Welcome!</div>
          <div className="lg-w-[894px] lg:text-[16px] text-[14px] font-normal leading-7">Go to this step by step guideline process on how to certify for your weekly benefits: 
            <Link href={"/"}>
              <span className="text-cta-1 lg:text-[16px] text-[14px] font-semibold underline leading-7">
                See our guideline
              </span>
            </Link>
          </div>
        </div>

        {/* Clock */}
        <div className="h-8 px-5 py-2.5 bg-soft-blue rounded-[90px] justify-center items-center gap-[5px] inline-flex text-slate-50 text-base font-semibold lg:mt-[25px] lg:mb-[25px] mt-[14px] mb-[22px] z-10">
          <div>00</div>
          <div>:</div>
          <div>10</div>
          <div>:</div>
          <div>06</div>
          <div>:</div>
          <div>250</div>
        </div>

        <Myhero></Myhero>
        <Yourscore></Yourscore>

        {/* Leaderboard */}

        <div id="leaderboard" className="lg:mt-[67px] mt-[50px] flex flex-col justify-center items-center gap-[15px]">

          <div className="lg:w-[948px] w-[335px] h-[67px] lg:h-[85px] flex flex-col justify-center items-center gap-3">
            <div className="lg:w-96 w-[256px] text-center text-WarmCoral-4 lg:text-[26px] text-[15px] font-bold leading-snug">Leaderboard</div>
            <div className="lg:w-[486px] w-[256px] text-center lg:text-[40px] text-[26px] text-text-1 font-bold leading-10">Our Top 10 winners</div>
          </div>

          <div className="flex justify-center items-center lg:gap-[66px] gap-[17px] flex-col lg:flex-row">
            <div className="lg:w-[614px] lg:h-[530px] w-[335px] h-[316px] flex lg:justify-start justify-center items-end">            
              <ScoreboardIllustration winners={[{name:"Hannibal Lector", score:100}, {name:"John Doe", score:200}, {name:"Dio Brando", score:300}]}></ScoreboardIllustration>
            </div>

            <TotalWinners></TotalWinners>
          </div>

          <div className="lg:mt-[45px] mt-[9px] lg:mb-[75px] mb-[44px]">
            <Mybutton text="View More" textStyle="lg:text-base text-[15px] font-bold" style="flex items-center lg:h-[50px] lg:w-[155px] w-[155px] h-[50px]"></Mybutton>
          </div>

        </div>

        <Image src={bl} alt="bl" className="absolute left-0 bottom-0 lg:h-[116px] lg:w-[116px] w-[56px] h-[56px]"></Image>
        <Image src={br} alt="br" className="absolute right-0 bottom-0 lg:h-[116px] lg:w-[116px] w-[56px] h-[56px]"></Image>

      </section>

      {/* Guess the hidden word */}
      <section id="howtoplay" className="lg:h-[382px] h-[437px] bg-orange-100 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="lg:w-[486px] w-[256px] text-center text-WarmCoral-4 lg:text-[26px] text-[15px] font-bold leading-snug">Wordle Game</div>
          <div className="lg:w-[486px] w-[256px] text-center lg:text-[40px] text-[26px] font-bold text-text-1 leading-10">Guess the Hidden Word</div>
          <div className="lg:w-[894px] w-[323px] text-center text-neutral-600 lg:text-base text-[14px] font-normal leading-loose">The rules are very simple: You need to guess the hidden word (from 4 to 11 letters) in 6 tries. To get started, just type any word on the first line. If the letter is guessed correctly and is in the correct place, it will be highlighted in green, if the letter is in the word, but in the wrong place - in yellow, and if the letter is not in the word, it will remain gray. Can you guess the hidden word in 6 tries?</div>
        </div>
      </section>

      {/* How to play */}
      <section className="lg:h-[1185px] h-[1440px] bg-white shadow relative">
        <Image src={tl} alt="tl" className="absolute left-0 top-0 lg:h-[116px] lg:w-[116px] w-[56px] h-[56px]"></Image>
        <Image src={tr} alt="tr" className="absolute right-0 top-0 lg:h-[116px] lg:w-[116px] w-[56px] h-[56px]"></Image>

        <div className="flex justify-center items-center flex-col lg:gap-[30px] gap-[40px]">

          <div className="lg:w-[948px] w-[335px] flex-col justify-start items-center gap-3 inline-flex lg:mt-[85px] mt-[32px]">
            <div className="lg:w-[486px] w-[335px] text-center text-WarmCoral-4 lg:text-[26px] font-bold leading-snug">How to play</div>
            <div className="lg:w-[650px] w-[335px] text-center text-text-1 lg:text-[40px] text-[25px] font-bold leading-10">How to play the Wordle Game?</div>
            <div className="lg:w-[894px] w-[335px] text-center text-neutral-600 lg:text-base text-[14px] font-normal leading-loose">Start with Any Five-Letter Word: Kick off your Wordle adventure by typing in any five-letter word. This is your first step towards unraveling the word puzzle.</div>
          </div>

          <div className="lg:w-[1140px] w-[329px] lg:h-[824px] h-[1073px] flex justify-start items-center flex-col gap-[21px]">

            <div className="lg:w-[1140px] w-[335px] lg:h-[169px] h-[352px] bg-stone-50 rounded-[22px] border-l border-r border-t border-b-2 border-orange-400 border-opacity-30 flex flex-col justify-center items-center gap-[6px]">
              <div className="lg:w-[1094px] text-center text-WarmCoral-3 text-lg font-bold leading-loose">Uncover Letter Clues</div>
              <div className="lg:w-[1094px] w-[293px] text-center"><span className="text-neutral-600 lg:text-base text=[14px] font-normal leading-loose">After entering your word, pay attention to the color-coded hints. <br/>Letters highlighted in </span><span className="text-neutral-600 lg:text-base text-[14px] font-bold leading-loose">yellow</span><span className="text-neutral-600 lg:text-base text-[14px] font-normal leading-loose"> indicate they are part of the hidden word but are placed in a different spot. <br/>If a letter turns </span><span className="text-neutral-600 lg:text-base text-[14px] font-bold leading-loose">green</span><span className="text-neutral-600 lg:text-base text-[14px] font-normal leading-loose">, you&apos;ve got both the letter and its position correct. A </span><span className="text-neutral-600 lg:text-base text-[14] font-bold leading-loose">gray</span><span className="text-neutral-600 lg:text-base text-[14px] font-normal leading-loose"> letter means its not in the target word at all.</span></div>
            </div>

            <div className="lg:w-[1140px] lg:h-[472px] w-[335px] h-[441px] bg-stone-50 rounded-[22px] border-l border-r border-t border-b-2 border-orange-400 border-opacity-30 flex flex-col justify-start items-center gap-[6px]">
              <div className="lg:mt-4 mt-5 flex justify-center items-center flex-col">
                <div className="lg:w-[1094px] text-center text-WarmCoral-3 text-lg font-bold leading-loose">Strategize Your Next Move</div>
                <div className="lg:w-[1094px] w-[293px] text-center"><span className="text-neutral-600 lg:text-base text-[14px] font-normal leading-loose">With each guess, you&apos;ll gather more information. Use the </span><span className="text-neutral-600 lg:text-base text-[14px] font-bold leading-loose">green</span><span className="text-neutral-600 lg:text-base text-[14px] font-normal leading-loose"> and </span><span className="text-neutral-600 lg:text-base text-[14px] font-bold leading-loose">yellow</span><span className="text-neutral-600 lg:text-base text-[14px] font-normal leading-loose"> hints to refine your next word choice. The goal is to use these insights to correctly guess the Wordle games hidden word within your remaining attempts.</span></div>
                <div className="flex justify-center items-center lg:mt-[38px] mt-[32px] lg:mb-[71px] mb-[34.85px]">
                  <Strat></Strat>
                </div>
              </div>
            </div>

            <div className="lg:w-[1140px] w-[335px] h-[238px] lg:h-[141px] bg-stone-50 rounded-[22px] border-l border-r border-t border-b-2 border-orange-400 border-opacity-30 flex flex-col justify-center items-center gap-[6px]">
              <div className="lg:w-[1094px] text-center text-orange-400 text-lg font-bold leading-loose">Solve the Mystery Word</div>
              <div><div className="lg:w-[1094px] w-[278px] text-center"><span className="text-neutral-600 lg:text-base text-[14px] font-normal leading-loose">Combine your knowledge of the correct letters (</span><span className="text-neutral-600 lg:text-base text-[14px] font-bold leading-loose">green</span><span className="text-neutral-600 lg:text-base text-[14px] font-normal leading-loose">) and the correct but misplaced ones (</span><span className="text-neutral-600 lg:text-base text-[14px] font-bold leading-loose">yellow</span><span className="text-neutral-600 lg:text-base text-[14px] font-normal leading-loose">) to deduce the secret word. Achieve this within six tries, and you&apos;ve conquered the Wordle challenge!</span></div></div>
            </div>

          </div>

        </div>
      </section>

      {/* Acoordion */}
      <section>
        <div className="flex flex-col justify-center items-center lg:mt-[100px] mt-[40px] lg:gap-[37px] gap-[22px] lg:mb-[96px] mb-[40px]">
          <div className="lg:w-[578px] w-[355px] text-center text-text-1 lg:text-[38px] text-[26px] font-bold leading-10">FAQs</div>
          <Myaccordion></Myaccordion>
        </div>
      </section>

      <Myfooter></Myfooter>

    </main>
  );
}
