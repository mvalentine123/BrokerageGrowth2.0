import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Infrastructure | Brokerage Insight",
  description:
    "Brokerage Insight installs the systems brokerages need to recruit agents, onboard them faster, and scale operations. Recruiting, onboarding, virtual office, reporting, CRM, and lead generation.",
});

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
