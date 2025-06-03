
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const tokenomics = [
    { label: "Total Supply", value: "1,000,000,000", percentage: "100%" },
    { label: "Community Rewards", value: "600,000,000", percentage: "60%" },
    { label: "Liquidity Pool", value: "200,000,000", percentage: "20%" },
    { label: "Team & Development", value: "150,000,000", percentage: "15%" },
    { label: "Marketing", value: "50,000,000", percentage: "5%" },
  ];

  const features = [
    {
      icon: "🎨",
      title: "Create Memes",
      description: "Use our toolkit to create viral memes with our mascot character"
    },
    {
      icon: "🏆",
      title: "Earn Rewards",
      description: "Get tokens for every meme that goes viral on social media"
    },
    {
      icon: "#️⃣",
      title: "Unique Hashtags",
      description: "AI-generated personal hashtags for automatic reward tracking"
    },
    {
      icon: "🚀",
      title: "Community Driven",
      description: "Join a community of meme creators and crypto enthusiasts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <span className="text-6xl">🚀</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MEME
            </span>
            <span className="text-white">TOKEN</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The first meme token that rewards you for going viral! Create memes, earn tokens, and build the ultimate meme economy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 px-8 text-lg">
              Start Creating Memes
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 py-6 px-8 text-lg">
              View Tokenomics
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-purple-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            How It <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Token<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">omics</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {tokenomics.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-black/50 rounded-lg border border-purple-500/20">
                    <span className="text-white font-semibold">{item.label}</span>
                    <div className="text-right">
                      <div className="text-purple-400 font-bold">{item.value}</div>
                      <div className="text-gray-400 text-sm">{item.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-80 h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-spin-slow opacity-20"></div>
                  <div className="absolute inset-4 bg-black rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">💎</div>
                      <div className="text-white font-bold">1B Total Supply</div>
                      <div className="text-purple-400">MEME Token</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Meme?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators earning tokens for their viral memes. The future of content creation is here!
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 text-xl">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
