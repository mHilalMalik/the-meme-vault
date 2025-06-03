
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Leaderboard = () => {
  const topCreators = [
    {
      rank: 1,
      username: "@RocketMemer",
      avatar: "🚀",
      totalRewards: "156,420",
      viralMemes: 12,
      totalEngagement: "2.1M",
      latestMeme: "When you HODL through the dip",
      badge: "🏆 Meme King"
    },
    {
      rank: 2,
      username: "@MoonShotMemes",
      avatar: "🌙",
      totalRewards: "98,765",
      viralMemes: 8,
      totalEngagement: "1.5M",
      latestMeme: "Diamond hands vs paper hands",
      badge: "💎 Diamond Creator"
    },
    {
      rank: 3,
      username: "@CryptoComedy",
      avatar: "😂",
      totalRewards: "87,420",
      viralMemes: 6,
      totalEngagement: "1.2M",
      latestMeme: "Me explaining crypto to my mom",
      badge: "🔥 Fire Memer"
    },
    {
      rank: 4,
      username: "@ToTheMoonMemes",
      avatar: "🌟",
      totalRewards: "65,123",
      viralMemes: 5,
      totalEngagement: "850K",
      latestMeme: "Rocket fuel vs reality",
      badge: "⭐ Rising Star"
    },
    {
      rank: 5,
      username: "@MemeLord420",
      avatar: "👑",
      totalRewards: "54,321",
      viralMemes: 4,
      totalEngagement: "720K",
      latestMeme: "When gas fees cost more than your trade",
      badge: "🎯 Consistent Creator"
    }
  ];

  const trendingMemes = [
    {
      creator: "@RocketMemer",
      title: "When you check your portfolio at 3 AM",
      engagement: "452K",
      rewards: "15,420",
      timeAgo: "2h ago",
      platform: "Twitter"
    },
    {
      creator: "@MoonShotMemes",
      title: "Me: I'll just check the charts once",
      engagement: "328K",
      rewards: "12,100",
      timeAgo: "4h ago",
      platform: "Instagram"
    },
    {
      creator: "@CryptoComedy",
      title: "Explaining DeFi to traditional investors",
      engagement: "287K",
      rewards: "9,850",
      timeAgo: "6h ago",
      platform: "TikTok"
    },
    {
      creator: "@ToTheMoonMemes",
      title: "Bear market vs my confidence",
      engagement: "195K",
      rewards: "7,200",
      timeAgo: "8h ago",
      platform: "Twitter"
    }
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return "text-yellow-400";
      case 2: return "text-gray-300";
      case 3: return "text-orange-400";
      default: return "text-purple-400";
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return `#${rank}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meme <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Leaderboard</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Top creators, viral memes, and the biggest reward earners in our community. Climb the ranks and earn your place among the meme legends!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Top Creators */}
            <div className="lg:col-span-2">
              <Card className="bg-black/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    🏆 Top Creators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topCreators.map((creator) => (
                      <div key={creator.rank} className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <div className={`text-2xl font-bold ${getRankColor(creator.rank)}`}>
                              {getRankIcon(creator.rank)}
                            </div>
                            <div className="text-3xl">{creator.avatar}</div>
                            <div>
                              <div className="text-white font-bold">{creator.username}</div>
                              <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-400">
                                {creator.badge}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-purple-400 font-bold text-lg">{creator.totalRewards} MEME</div>
                            <div className="text-gray-400 text-sm">{creator.totalEngagement} total engagement</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Viral Memes: </span>
                            <span className="text-white font-semibold">{creator.viralMemes}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Latest: </span>
                            <span className="text-white">{creator.latestMeme}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats & Trending */}
            <div className="space-y-8">
              {/* Global Stats */}
              <Card className="bg-black/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-white">📊 Global Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Memes Created</span>
                    <span className="text-white font-bold">24,567</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tokens Distributed</span>
                    <span className="text-purple-400 font-bold">1.2M MEME</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Creators</span>
                    <span className="text-white font-bold">3,421</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Viral Memes Today</span>
                    <span className="text-green-400 font-bold">42</span>
                  </div>
                </CardContent>
              </Card>

              {/* Reward Tiers */}
              <Card className="bg-black/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-white">💎 Reward Tiers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">👶 New Creator</span>
                    <span className="text-white">1-100 MEME</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">⭐ Rising Star</span>
                    <span className="text-white">101-1K MEME</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">🔥 Fire Memer</span>
                    <span className="text-white">1K-10K MEME</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">💎 Diamond Creator</span>
                    <span className="text-white">10K-100K MEME</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400">🏆 Meme King/Queen</span>
                    <span className="text-yellow-400">100K+ MEME</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trending Memes */}
          <Card className="mt-8 bg-black/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                🔥 Trending Memes (Last 24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {trendingMemes.map((meme, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-white font-semibold mb-1">{meme.title}</h4>
                        <p className="text-purple-400 text-sm">by {meme.creator}</p>
                      </div>
                      <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-400">
                        {meme.platform}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="text-gray-400">Engagement: </span>
                        <span className="text-white font-semibold">{meme.engagement}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Rewards: </span>
                        <span className="text-purple-400 font-semibold">{meme.rewards} MEME</span>
                      </div>
                    </div>
                    
                    <div className="text-right text-xs text-gray-400 mt-2">
                      {meme.timeAgo}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
