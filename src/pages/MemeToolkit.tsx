
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Shield, Star, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MemeToolkit = () => {
  const { toast } = useToast();

  const assetCategories = [
    {
      title: "Character Poses",
      assets: [
        { name: "Happy Rocket", format: "PNG", size: "1080x1080" },
        { name: "Excited Rocket", format: "PNG", size: "1080x1080" },
        { name: "Cool Rocket", format: "PNG", size: "1080x1080" },
        { name: "Thinking Rocket", format: "PNG", size: "1080x1080" },
      ]
    },
    {
      title: "Background Templates",
      assets: [
        { name: "Space Background", format: "PNG", size: "1920x1080" },
        { name: "Neon Grid", format: "PNG", size: "1920x1080" },
        { name: "Galaxy Scene", format: "PNG", size: "1920x1080" },
        { name: "Crypto Charts", format: "PNG", size: "1920x1080" },
      ]
    },
    {
      title: "Text Overlays",
      assets: [
        { name: "To The Moon", format: "PNG", size: "800x200" },
        { name: "HODL Strong", format: "PNG", size: "800x200" },
        { name: "Diamond Hands", format: "PNG", size: "800x200" },
        { name: "Meme Magic", format: "PNG", size: "800x200" },
      ]
    },
    {
      title: "Logo Variations",
      assets: [
        { name: "Main Logo", format: "PNG", size: "512x512" },
        { name: "Circular Logo", format: "PNG", size: "512x512" },
        { name: "Horizontal Logo", format: "PNG", size: "1024x256" },
        { name: "Icon Only", format: "PNG", size: "256x256" },
      ]
    }
  ];

  const handleDownload = (assetName: string) => {
    toast({
      title: "Download Started",
      description: `${assetName} is being downloaded...`,
    });
    console.log(`Downloading ${assetName}`);
  };

  const downloadAll = () => {
    toast({
      title: "Downloading All Assets",
      description: "All meme assets are being packaged and downloaded...",
    });
    console.log("Downloading all assets");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-green-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Verified Safe</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Community Approved</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-600">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
              Magical Meme Toolkit
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create enchanting memes with our professionally crafted assets. Every resource is carefully designed and completely free for our wonderful community!
            </p>
            <Button 
              onClick={downloadAll}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download All Magic Assets
            </Button>
          </div>

          <div className="grid gap-8">
            {assetCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 pb-6">
                  <CardTitle className="text-3xl text-gray-800 font-bold text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.assets.map((asset, assetIndex) => (
                      <div key={assetIndex} className="group">
                        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center shadow-inner">
                            <span className="text-4xl filter drop-shadow-sm">🚀</span>
                          </div>
                          <h3 className="text-gray-800 font-bold mb-2 text-center">{asset.name}</h3>
                          <div className="flex justify-between items-center text-gray-600 text-sm mb-4 bg-gray-50 rounded-lg p-2">
                            <span className="font-medium">{asset.format}</span>
                            <span className="font-medium">{asset.size}</span>
                          </div>
                          <Button 
                            onClick={() => handleDownload(asset.name)}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                            size="sm"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl max-w-3xl mx-auto rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Community Guidelines</h3>
                <div className="text-gray-700 space-y-3 text-left max-w-xl mx-auto leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>All assets are completely free for community meme creation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Please include #MemeToken hashtag when sharing your creations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>High-quality memes can earn exciting token rewards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Commercial use requires friendly community approval</p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                  <p className="text-sm text-gray-600 font-medium">
                    ✨ Created with love by our design team • Always free • Always magical ✨
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeToolkit;
