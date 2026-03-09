import { DivideX } from "@/components/divide";
import { SignUp } from "@/components/sign-up";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Sign Up | Brokerage Insight",
  description:
    "Sign up for Brokerage Insight and start building your own autonomous agents today.",
});

export default function SignupPage() {
  return (
    <main>
      <DivideX />
      <SignUp />
      <DivideX />
    </main>
  );
}
