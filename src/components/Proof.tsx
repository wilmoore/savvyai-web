const Proof = () => {
  return (
    <section className="py-24 bg-savvy-pure-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-savvy-electric-cyan">
                7
              </div>
              <div className="text-lg text-savvy-gray-400 font-medium">
                Founders Trained in AI Literacy
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-savvy-electric-cyan">
                10+
              </div>
              <div className="text-lg text-savvy-gray-400 font-medium">
                Years Engineering Experience
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-savvy-electric-cyan">
                3
              </div>
              <div className="text-lg text-savvy-gray-400 font-medium">
                Code Rescues
              </div>
            </div>
          </div>
          
          {/* Separator Line with Gradient */}
          <div className="mt-16 w-full h-px bg-gradient-secondary opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Proof;