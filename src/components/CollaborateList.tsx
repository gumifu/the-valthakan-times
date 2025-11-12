import BookRow from "./BookRow";
import CompanyRow from "./CompanyRow";
import { PrimaryButton } from "./PrimaryButton";

export default async function CollaborateList(){
    return(
      <section
        id="Hey Crone What's New?"
        className="
        relative w-full px-5 py-20
        flex flex-col justify-center items-center gap-8"
      > 
        <div className="gap-4">
          <h1 className="text-center text-white heading-sp-h1 leading-[68px] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
            As Seen in <span className="block md:inline"> The Valthakan Times</span>
          </h1>
      
          <div className="self-stretch text-center justify-center [color:var(--color-blue-gray-400)] text-base font-normal font-['Eczar'] leading-6">
            Collaborations that shaped our stories, <span className="block md:inline">and yours could be next.</span>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <BookRow />
          <CompanyRow />
          <PrimaryButton text="Learn More" showLeftIcon={false} showRightIcon />
        </div>
        
      </section>
    );
}   