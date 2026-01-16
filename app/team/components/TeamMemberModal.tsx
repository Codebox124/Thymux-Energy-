"use client";

import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "./data";

interface TeamMemberModalProps {
  selectedId: string | null;
  onClose: () => void;
}

export default function TeamMemberModal({
  selectedId,
  onClose,
}: TeamMemberModalProps) {
  const selectedMember = teamMembers.find((m) => m.id === selectedId);

  if (!selectedMember) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm cursor-pointer"
      />

      <motion.div
        layoutId={`card-${selectedId}`}
        className="w-full max-w-3xl bg-white overflow-hidden relative shadow-2xl rounded-t-2xl md:rounded-sm max-h-[85vh] md:max-h-none overflow-y-auto md:overflow-visible flex flex-col"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 md:bg-neutral-100 hover:bg-neutral-200 text-white md:text-navy-deep transition-colors backdrop-blur-md md:backdrop-blur-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col md:grid md:grid-cols-5 h-full">
          <div className="md:col-span-2 bg-navy-deep p-6 md:p-10 flex flex-col justify-between text-white relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 p-32 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <motion.div
              layoutId={`icon-${selectedId}`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md mb-6 md:mb-8"
            >
              <span className="text-2xl md:text-3xl font-serif italic text-gold">
                {selectedMember.initials}
              </span>
            </motion.div>

            <div className="relative z-10">
              <motion.h4
                layoutId={`title-${selectedId}`}
                className="text-2xl md:text-4xl font-light mb-1 md:mb-2"
              >
                [Name Pending]
              </motion.h4>
              <motion.p
                layoutId={`role-${selectedId}`}
                className="text-gold text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6"
              >
                {selectedMember.role}
              </motion.p>

              <div className="space-y-3 md:space-y-4">
                <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest">
                  Expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="px-2 md:px-3 py-1 bg-white/10 rounded-full text-[10px] md:text-xs text-white/90"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 p-6 md:p-12 flex flex-col justify-center bg-white">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <motion.span
                layoutId={`dept-${selectedId}`}
                className="inline-block mb-3 md:mb-4 text-[10px] md:text-xs font-bold text-soft-blue-gray uppercase tracking-[0.2em]"
              >
                {selectedMember.department} Division
              </motion.span>

              <h3 className="text-lg md:text-xl font-medium text-navy-deep mb-4 md:mb-6">
                Professional Profile
              </h3>

              <p className="text-navy-deep/70 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
                {selectedMember.bio}
              </p>

              <div className="pt-6 md:pt-8 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-wider mb-1">
                    Office
                  </span>
                  <span className="text-navy-deep font-medium text-sm md:text-base">
                    Dubai, JLT
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
