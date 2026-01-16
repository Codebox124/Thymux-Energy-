"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import LeadershipSection from "./components/LeadershipSection";
import TeamSection from "./components/TeamSection";
import TeamMemberModal from "./components/TeamMemberModal";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";

export default function TeamPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedId]);

  return (
    <main className="min-h-screen bg-white text-navy-deep selection:bg-gold selection:text-white overflow-hidden relative">
      <HeroSection />
      <LeadershipSection />
      <TeamSection onSelectMember={setSelectedId} />

      <AnimatePresence>
        {selectedId && (
          <TeamMemberModal
            selectedId={selectedId}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      <CTASection />
      <ContactSection />
    </main>
  );
}
