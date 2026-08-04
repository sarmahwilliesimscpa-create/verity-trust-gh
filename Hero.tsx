import { Search, ShieldCheck, MoveUpRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find",
    text: "Search for a business by name.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Confirm you found the real one.",
  },
  {
    icon: MoveUpRight,
    title: "Connect",
    text: "Reach them directly, with confidence.",
  },
];

export function JourneySteps() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <step.icon className="w-4.5 h-4.5 text-gold-300" strokeWidth={2} />
                </div>
                <span className="font-mono text-[12px] text-muted-2">0{i + 1}</span>
              </div>
              <h3 className="font-display font-semibold text-[20px] text-ink mb-1.5">{step.title}</h3>
              <p className="text-[14.5px] text-muted max-w-[240px]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
