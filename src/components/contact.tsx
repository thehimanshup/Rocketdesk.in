"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative px-6 lg:px-8 bg-black text-white rounded-t-[3rem] mt-24">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to Build The Future?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you are an investor looking to partner, an educator wanting to revolutionize your classroom, or an engineer ready to build. Let&apos;s talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 rounded-xl bg-gray-900 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 text-white placeholder-gray-500 transition-all"
            required
          />
          <input
            type="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-6 py-4 rounded-xl bg-gray-900 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 text-white placeholder-gray-500 transition-all"
            required
          />
          <textarea
            placeholder="How can we help?"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-6 py-4 rounded-xl bg-gray-900 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 text-white placeholder-gray-500 transition-all resize-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-rose-500 to-indigo-500 text-white font-bold rounded-xl text-lg hover:opacity-90 disabled:opacity-50 transition-opacity flex justify-center items-center gap-2 mt-4"
          >
            {loading ? "Sending..." : "Become a Partner"}
          </button>
          
          {status === "success" && (
            <p className="text-emerald-500 text-center text-sm font-medium mt-2">Message sent successfully! We will be in touch.</p>
          )}
          {status === "error" && (
            <p className="text-rose-500 text-center text-sm font-medium mt-2">Could not send at this time. Please try again later.</p>
          )}
        </form>

        <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-500">
          <div className="font-bold tracking-tighter text-2xl text-white mb-4 md:mb-0">
            Rocketdesk
          </div>
          <p className="text-sm">© 2026 Rocketdesk. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
