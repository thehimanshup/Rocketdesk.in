"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Hero3DCanvas } from "./ui/canvas-3d";

export function Hero() {
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;
    
    setLoading(true);
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      const data = await res.json();
      setExplanation(data.explanation);
    } catch (error) {
      setExplanation("There was an error generating your explanation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Abstract Background */}
      <Hero3DCanvas />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-sm font-medium mb-8 border border-rose-200 dark:border-rose-900"
        >
          <Sparkles className="h-4 w-4" />
          The future of Ed-Tech is here
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Next-Gen AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-500">Personalized Learning.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl"
        >
          Bridging the gap between rote memorization and conceptual mastery. Get real-time, rubric-aware coaching tailored just for you.
        </motion.p>

        {/* Live Concept Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              Live Concept Prompt
            </div>
            <form onSubmit={handleGenerate} className="flex gap-2">
              <input
                type="text"
                placeholder='e.g., "Photosynthesis"'
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                disabled={loading || !topic}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-indigo-500 hover:opacity-90 transition-opacity text-white rounded-xl font-medium flex items-center justify-center min-w-[120px]"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Explain
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {explanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 text-left"
              >
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400 mr-2">Rocketdesk says:</span>
                  {explanation}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
