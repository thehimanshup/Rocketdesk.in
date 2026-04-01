import { BookOpen, Languages, ShieldCheck, Sparkles } from "lucide-react";

export function Features() {
  return (
    <section id="product" className="py-24 bg-white/50 dark:bg-black/50 relative px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            The Product
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our AI Educational App is powered by next-generation models to provide a deeply integrated learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Multilingual Coach - Spans 2 columns on desktop */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-black border border-indigo-200 dark:border-indigo-900/50 hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl group-hover:blur-3xl transition-all duration-500">
              <Languages className="w-64 h-64 text-indigo-500" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-lg">
                <Languages className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-indigo-950 dark:text-white mb-2">Multilingual Coach</h3>
                <p className="text-indigo-800/80 dark:text-indigo-200/80 text-lg leading-relaxed max-w-md">
                  Break language barriers with built-in translation and TTS (Text-to-Speech) support for seamless global learning.
                </p>
              </div>
            </div>
          </div>

          {/* Stepwise Hints */}
          <div className="relative group overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-950/30 dark:to-black border border-rose-200 dark:border-rose-900/50 hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl group-hover:blur-3xl transition-all duration-500">
              <BookOpen className="w-48 h-48 text-rose-500" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-14 h-14 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-rose-950 dark:text-white mb-2">Stepwise Hints</h3>
                <p className="text-rose-800/80 dark:text-rose-200/80 leading-relaxed">
                  Guiding students through problems rather than spoon-feeding answers.
                </p>
              </div>
            </div>
          </div>

          {/* Integrity Checker - Spans all 3 columns */}
          <div className="md:col-span-3 relative group overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-black border border-emerald-200 dark:border-emerald-900/50 hover:shadow-2xl transition-all flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="flex-1 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-emerald-950 dark:text-white mb-4">Academic Integrity Checker</h3>
              <p className="text-emerald-800/80 dark:text-emerald-200/80 text-lg max-w-xl">
                Badge-style, rubric-aware feedback ensures honesty and deep understanding. Our AI evaluates not just the final answer, but the conceptual journey to get there.
              </p>
            </div>
            
            {/* Visual element */}
            <div className="flex-1 w-full h-full relative min-h-[150px] rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50 bg-white/40 dark:bg-black/40 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                 {/* Fake UI for integrity badge */}
                 <div className="animate-pulse bg-emerald-100/50 dark:bg-emerald-900/50 p-6 rounded-2xl flex flex-col items-center gap-4 border border-emerald-200 dark:border-emerald-800 shadow-xl">
                   <ShieldCheck className="w-12 h-12 text-emerald-500" />
                   <div className="h-2 w-24 bg-emerald-500/20 rounded-full" />
                   <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">100% Original</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
