import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return NextResponse.json({ explanation: "Please provide a concept to explain." });
    }

    // Try to fetch from Wikipedia API for a quick definition
    const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`);
    
    if (wikiResponse.ok) {
      const data = await wikiResponse.json();
      if (data.type === "standard" && data.extract) {
        // Grab the first two sentences for a concise explanation
        const sentences = data.extract.match(/[^.!?]+[.!?]+/g);
        const explanation = sentences ? sentences.slice(0, 2).join(' ').trim() : data.extract;
        return NextResponse.json({ explanation });
      }
    }

    // Fallback response if Wikipedia doesn't have a clean match
    return NextResponse.json({ 
      explanation: `"${topic}" is an interesting concept! Our AI coach would break this down into digestible, step-by-step analogies tailored just for your learning style.`
    });
    
  } catch (error) {
    console.error("Error generating explanation:", error);
    return NextResponse.json({ 
      explanation: "Our systems are experiencing high traffic right now, but please try another concept!" 
    });
  }
}
