import { Server, Database, CloudRain, Shield, Cpu, Activity } from "lucide-react";

export function TechStack() {
  const stack = [
    {
      role: "GenAI Engine",
      tools: "Gemini / Vertex AI",
      icon: <Cpu className="w-8 h-8 text-rose-500" />,
      color: "from-rose-500/20 to-rose-500/0",
      border: "border-rose-500/30",
    },
    {
      role: "Compute",
      tools: "Cloud Run & VMware",
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      color: "from-indigo-500/20 to-indigo-500/0",
      border: "border-indigo-500/30",
    },
    {
      role: "Database",
      tools: "Firestore & PostgreSQL",
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      color: "from-emerald-500/20 to-emerald-500/0",
      border: "border-emerald-500/30",
    },
    {
      role: "Cloud Infrastructure",
      tools: "Google Cloud Platform",
      icon: <CloudRain className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500/20 to-blue-500/0",
      border: "border-blue-500/30",
    },
    {
      role: "Security",
      tools: "IAM & Identity",
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      color: "from-amber-500/20 to-amber-500/0",
      border: "border-amber-500/30",
    },
    {
      role: "Monitoring",
      tools: "Cloud Logging",
      icon: <Activity className="w-8 h-8 text-purple-500" />,
      color: "from-purple-500/20 to-purple-500/0",
      border: "border-purple-500/30",
    },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-white/50 dark:bg-black relative px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Under The Hood
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Architected by a Google Cloud Certified Engineer for maximum performance, security, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} bg-white/5 dark:bg-black/40 border ${item.border} backdrop-blur-sm hover:scale-[1.02] transition-transform`}
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.tools}</h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{item.role}</p>
            </div>
          ))}
        </div>

        {/* Architecture Flow */}
        <div className="mt-16 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 overflow-hidden relative group">
          <div className="absolute inset-0 bg-grid-gray-900/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 opacity-90">
            <div className="text-center md:text-left flex-1">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Dark Mode Flowchart Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                User Input → Next.js API Route → Vertex AI Logic Engine → Dynamic Diagram Generation → Multilingual Output.
              </p>
            </div>
            
            <div className="flex-1 flex gap-2 items-center justify-center text-xs font-mono font-medium text-gray-500 dark:text-gray-400 py-4 px-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl w-full max-w-lg shadow-xl shrink-0 overflow-x-auto">
              <span className="text-indigo-500">USER</span>
              <span className="px-1 text-gray-300">→</span>
              <span className="text-blue-500">API</span>
              <span className="px-1 text-gray-300">→</span>
              <span className="text-rose-500">VERTEX AI</span>
              <span className="px-1 text-gray-300">→</span>
              <span className="text-emerald-500">OUTPUT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
