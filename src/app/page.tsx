import { ActivityShowcase } from "@/components/activity-showcase";
import { AiShowcase } from "@/components/ai-showcase";
import { ContactCta } from "@/components/contact-cta";
import { EducationSection } from "@/components/education-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { ImpactCommandCenter } from "@/components/impact-command-center";
import { ProgrammingStats } from "@/components/programming-stats";
import { ProjectShowcase } from "@/components/project-showcase";
import { RecruiterBrief } from "@/components/recruiter-brief";
import { SkillRadar } from "@/components/skill-radar";
import { StackMarquee } from "@/components/stack-marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecruiterBrief />
      <ImpactCommandCenter />
      <StackMarquee />
      <ProjectShowcase />
      <SkillRadar />
      <EducationSection />
      <ExperienceTimeline />
      <ProgrammingStats />
      <ActivityShowcase />
      <AiShowcase />
      <ContactCta />
    </>
  );
}
