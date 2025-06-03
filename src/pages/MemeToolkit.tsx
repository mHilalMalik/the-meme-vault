
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meme <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Toolkit</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Download high-quality assets to create your own viral memes. All resources are free for community use!
            </p>
            <Button 
              onClick={downloadAll}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download All Assets
            </Button>
          </div>

          <div className="grid gap-8">
            {assetCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-black/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.assets.map((asset, assetIndex) => (
                      <div key={assetIndex} className="group">
                        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                          <div className="w-full h-32 bg-black/30 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-4xl">🚀</span>
                          </div>
                          <h3 className="text-white font-semibold mb-2">{asset.name}</h3>
                          <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
                            <span>{asset.format}</span>
                            <span>{asset.size}</span>
                          </div>
                          <Button 
                            onClick={() => handleDownload(asset.name)}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
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

          <div className="mt-12 text-center">
            <Card className="bg-black/50 border-purple-500/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Usage Guidelines</h3>
                <div className="text-gray-300 space-y-2 text-left">
                  <p>• All assets are free for community meme creation</p>
                  <p>• Please include #MemeToken hashtag when sharing</p>
                  <p>• High-quality memes can earn token rewards</p>
                  <p>• Commercial use requires community approval</p>
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
