import { Briefcase, Code } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Himanshu Pandey",
      role: "AI/Cloud Infrastructure & Strategy",
      image: "/himanshu.jpg",
      linkedin: "https://www.linkedin.com/in/himanshu-pandey-38bb7123b",
      github: "https://github.com/thehimanshup",
      color: "bg-blue-500",
    },
    {
      name: "Prajjwal Sharma",
      role: "Engineering & Development",
      image: "/prajjwal.jpg",
      linkedin: "https://linkedin.com/in/prajjwalsharma21",
      github: "https://github.com/prajjwal",
      color: "bg-rose-500",
    },
  ];

  return (
    <section id="about" className="py-24 relative px-6 lg:px-8 bg-gray-50 dark:bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Meet The Founders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            &quot;Bridging the gap between rote learning and conceptual mastery using AI.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Profile Image Representation */}
              <div
                className={`w-40 h-40 rounded-full flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform ${member.color}`}
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
              <p className="text-rose-500 text-lg font-medium mb-6">{member.role}</p>

              <div className="flex gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-colors shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Briefcase className="w-5 h-5" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-colors shadow-sm"
                  aria-label="GitHub"
                >
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
