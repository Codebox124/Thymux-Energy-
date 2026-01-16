import Experties from "./_components/Experties";
import Hero from "./_components/hero";
import Media from "./_components/media";
import Stat from "./_components/Stat";
import TrustedPartners from "./_components/trusted-partners";

const Page = () => {
  return (
    <main>
      <Hero />
      <Stat />
      <Experties />
      
      <Media />
      <TrustedPartners />
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-sora font-bold text-navy-deep mb-6">
           Ready to Partner With Us?
          </h2>
          <p className="text-xl text-soft-blue-gray font-nunito max-w-2xl mx-auto mb-10">
             Experience a new standard of professionalism in energy trading. From spot deals to long-term supply agreements, we&apos;re equipped to handle transactions of any size.
          </p>
          <button className="bg-gold hover:bg-bright-gold text-navy-deep px-10 py-4 rounded-full font-sora font-extrabold text-lg transition-all shadow-sm">
              Contact Our Team
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;
