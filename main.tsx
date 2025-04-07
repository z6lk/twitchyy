import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

const fakeChannels = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  name: `Streamer_${i + 1}`,
  game: "Cool Game",
  viewers: Math.floor(Math.random() * 10000),
  thumbnail: `https://placehold.co/300x200?text=Stream+${i + 1}`,
}));

export default function TwitchLikeHomepage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white font-sans">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between p-4 bg-[#18181b] shadow-md">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-purple-500">Twitchy</h1>
          <div className="relative">
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-md bg-[#1f1f23] border-none text-sm text-white placeholder-gray-400"
            />
            <Search className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Bell className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
          <UserCircle className="w-8 h-8 text-purple-400 cursor-pointer hover:text-white" />
        </div>
      </nav>

      {/* Featured Streams Section */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">Live Channels We Think You'll Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fakeChannels.map((channel) => (
            <motion.div
              key={channel.id}
              className="bg-[#1f1f23] rounded-lg overflow-hidden hover:scale-[1.03] transition-transform cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <img src={channel.thumbnail} alt="Stream preview" className="w-full h-auto" />
              <div className="p-3">
                <h3 className="text-sm font-bold text-white truncate">{channel.name}</h3>
                <p className="text-xs text-gray-400">{channel.game}</p>
                <p className="text-xs text-red-500">🔴 {channel.viewers.toLocaleString()} viewers</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
