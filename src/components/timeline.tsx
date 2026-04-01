
export function Timeline() {
  const events = [
    {
      date: "Feb 2026",
      title: "India AI Impact Buildathon",
      description: "Top 15 Finalists at Bharat Mandapam. Showcased our innovative approach to Ed-Tech.",
      color: "bg-blue-500",
      textColor: "text-blue-500",
      bgLight: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-900",
    },
    {
      date: "March 2026",
      title: "MCD Hackathon",
      description: "Developed the Hyper-Local AQI Dashboard for MCD to tackle urban challenges.",
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-900",
    },
    {
      date: "Present",
      title: "Chanakya AI Ed-Tech",
      description: "Building the complete AI Ed-Tech ecosystem to personalize learning globally.",
      color: "bg-rose-500",
      textColor: "text-rose-500",
      bgLight: "bg-rose-50 dark:bg-rose-950/30",
      borderColor: "border-rose-200 dark:border-rose-900",
    },
  ];

  return (
    <section id="journey" className="py-24 relative px-6 lg:px-8 bg-gray-50 dark:bg-black overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-800 to-transparent" />
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From hackathons to building a comprehensive AI ecosystem.
          </p>
        </div>

        <div className="relative border-l-2 border-dashed border-gray-300 dark:border-gray-800 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300 dark:border-gray-800 transform -translate-x-1/2" />
          
          {events.map((event, index) => (
            <div key={index} className="mb-12 relative flex items-center w-full flex-col md:flex-row pl-8 md:pl-0">
              
              {/* Dot mobile */}
              <div className="md:hidden absolute left-[calc(-0.5rem-1px)] top-1.5 w-4 h-4 rounded-full ring-4 ring-gray-50 dark:ring-black bg-white flex items-center justify-center">
                <div className={`w-2.5 h-2.5 rounded-full ${event.color}`} />
              </div>

              {/* Dot Desktop */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full ring-4 ring-gray-50 dark:ring-black bg-white items-center justify-center z-10">
                <div className={`w-3 h-3 rounded-full ${event.color}`} />
              </div>

              {/* Desktop rendering logic */}
              <div className={`hidden md:block w-1/2 px-8 ${index % 2 === 0 ? "text-right" : "order-last text-left relative left-1/2"}`}>
                <div className={`inline-block px-3 py-1 mb-2 text-sm font-semibold rounded-full ${event.textColor} ${event.bgLight} border ${event.borderColor}`}>
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{event.description}</p>
              </div>

              {/* Mobile rendering logic */}
              <div className="md:hidden w-full">
                <div className={`inline-block px-3 py-1 mb-2 text-xs font-semibold rounded-full ${event.textColor} ${event.bgLight} border ${event.borderColor}`}>
                  {event.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
