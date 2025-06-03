
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/toolkit", label: "Meme Toolkit" },
    { path: "/generator", label: "AI Generator" },
    { path: "/leaderboard", label: "Leaderboard" },
  ];

  const handleConnectWallet = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-purple-500/20 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">🚀</span>
          </div>
          <span className="text-white font-bold text-xl">MEMETOKEN</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-white hover:text-purple-400 transition-colors duration-200 ${
                location.pathname === item.path ? "text-purple-400 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          onClick={handleConnectWallet}
          className={`${
            isWalletConnected
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          } text-white font-semibold transition-all duration-200`}
        >
          {isWalletConnected ? "✓ Wallet Connected" : "Connect Wallet"}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
