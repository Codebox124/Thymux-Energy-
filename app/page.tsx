import Hero from "./_components/hero";
import TrustedPartners from "./_components/trusted-partners";

const Page = () => {
  return (
    <main>
      <Hero />
      <TrustedPartners />
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-sora font-bold text-navy-deep mb-6">
            Ready to Switch to Solar?
          </h2>
          <p className="text-xl text-soft-blue-gray font-nunito max-w-2xl mx-auto mb-10">
            Join thousands of happy customers who have already transitioned to
            clean, renewable energy.
          </p>
          <button className="bg-gold hover:bg-bright-gold text-navy-deep px-10 py-4 rounded-full font-sora font-extrabold text-lg transition-all shadow-sm">
            Check Your Eligibility
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;
