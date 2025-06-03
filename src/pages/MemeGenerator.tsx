
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const MemeGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [userHashtag, setUserHashtag] = useState("#MemeRocket42X");
  const { toast } = useToast();

  const templates = [
    { name: "Classic Meme", preview: "🚀➡️📈" },
    { name: "Drake Pointing", preview: "👎👍" },
    { name: "Distracted Boyfriend", preview: "👨‍💼👩‍💼👩‍💼" },
    { name: "This Is Fine", preview: "🔥☕" },
    { name: "Galaxy Brain", preview: "🧠✨" },
    { name: "Stonks", preview: "📊📈" },
  ];

  const generateMeme = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Enter a prompt",
        description: "Please enter a meme idea to generate",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Meme Generated!",
        description: "Your meme has been created. Don't forget to use your unique hashtag when sharing!",
      });
      console.log("Generated meme with prompt:", prompt);
    }, 3000);
  };

  const generateNewHashtag = () => {
    const randomNum = Math.floor(Math.random() * 10000);
    const newHashtag = `#MemeRocket${randomNum}X`;
    setUserHashtag(newHashtag);
    toast({
      title: "New Hashtag Generated",
      description: `Your new unique hashtag: ${newHashtag}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Meme <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Generator</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Generate viral memes using AI with our rocket mascot. Each meme comes with your unique hashtag for automatic reward tracking!
            </p>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 max-w-md mx-auto border border-purple-500/30">
              <span className="text-purple-400 font-semibold">🚀 Coming in Phase 2</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Generator Input */}
            <Card className="bg-black/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Create Your Meme</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-white font-semibold mb-2 block">Meme Idea</label>
                  <Input
                    placeholder="e.g., 'Rocket going to the moon but stops for gas'"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="text-white font-semibold mb-2 block">Template (Optional)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {templates.map((template, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="border-purple-500/30 text-white hover:bg-purple-500/20 justify-start"
                      >
                        <span className="mr-2">{template.preview}</span>
                        {template.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={generateMeme}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6"
                >
                  {isGenerating ? "🚀 Generating Meme..." : "Generate Meme"}
                </Button>
              </CardContent>
            </Card>

            {/* Hashtag System */}
            <Card className="bg-black/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Your Reward Hashtag</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 mb-4">
                    <div className="text-3xl font-bold text-white">{userHashtag}</div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    This is your unique AI-generated hashtag. Use it when posting memes on social media to automatically earn tokens!
                  </p>
                  <Button 
                    onClick={generateNewHashtag}
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                  >
                    Generate New Hashtag
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-semibold">How Rewards Work:</h4>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400">1.</span>
                      <span>Post your meme on Twitter, Instagram, or TikTok</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400">2.</span>
                      <span>Include your unique hashtag in the post</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400">3.</span>
                      <span>Our AI detects your post automatically</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400">4.</span>
                      <span>Earn tokens based on engagement (likes, shares, comments)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-600/20 rounded-lg p-4 border border-purple-500/30">
                  <h5 className="text-white font-semibold mb-2">💎 Bonus Rewards:</h5>
                  <p className="text-gray-300 text-sm">
                    Viral memes (10k+ engagements) earn 10x rewards! Top creators get featured on our leaderboard.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Area */}
          <Card className="mt-8 bg-black/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Meme Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-lg border-2 border-dashed border-purple-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-gray-400">Your generated meme will appear here</p>
                  {isGenerating && (
                    <div className="mt-4">
                      <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto"></div>
                      <p className="text-purple-400 mt-2">AI is crafting your meme...</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
