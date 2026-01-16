"use client";

import { motion } from "framer-motion";
import { teamMembers } from "./data";

interface TeamSectionProps {
  onSelectMember: (id: string) => void;
}

export default function TeamSection({ onSelectMember }: TeamSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-neutral-50 border-t border-navy-deep/5 min-h-[600px] md:min-h-[800px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16"
        >
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-soft-blue-gray mb-2">
            The engine room
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-navy-deep">
            Where the work actually happens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-px md:bg-neutral-200 md:border md:border-neutral-200">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              layoutId={`card-${member.id}`}
              onClick={() => onSelectMember(member.id)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="
                bg-white 
                rounded-lg md:rounded-none 
                border border-neutral-100 md:border-none
                p-5 md:p-10 
                hover:bg-neutral-50 transition-colors duration-300 group 
                min-h-0 md:min-h-[300px] 
                flex flex-row md:flex-col items-center md:items-start justify-start md:justify-between 
                cursor-pointer relative z-0 hover:z-10 gap-4 md:gap-0
              "
            >
              <motion.div
                layoutId={`icon-${member.id}`}
                className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-navy-deep/5 flex items-center justify-center md:mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-500"
              >
                <span className="text-sm md:text-xl font-medium tracking-widest">
                  {member.initials}
                </span>
              </motion.div>

              <div className="flex-1 min-w-0">
                <motion.h4
                  layoutId={`title-${member.id}`}
                  className="text-base md:text-xl font-medium text-navy-deep mb-0.5 md:mb-1 truncate"
                >
                  [Name Pending]
                </motion.h4>
                <motion.p
                  layoutId={`role-${member.id}`}
                  className="text-soft-blue-gray text-xs md:text-sm mb-1 md:mb-4 truncate"
                >
                  {member.role}
                </motion.p>
                <motion.span
                  layoutId={`dept-${member.id}`}
                  className="inline-block py-0.5 px-2 border border-navy-deep/10 rounded-sm text-[10px] uppercase tracking-wider text-navy-deep/60"
                >
                  {member.department}
                </motion.span>
              </div>

              <span className="md:hidden text-gold text-sm">→</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
