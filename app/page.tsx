import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Navbar from "../components/sections/navbar/default";
import Stats from "../components/sections/stats/default";
import { LayoutLines } from "../components/ui/layout-lines";
import { Section } from "../components/ui/section";
import { Beam } from "../components/ui/beam";
import Glow from "../components/ui/glow";
import { Mockup, MockupFrame } from "../components/ui/mockup";
import Screenshot from "../components/ui/screenshot";
import { Badge } from "../components/ui/badge";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Hero />
      <Items />

      {/* Product Preview */}
      <Section className="relative overflow-hidden">
        <div className="max-w-container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold">See it in action</h2>
            <Badge variant="outline">Live preview</Badge>
          </div>
          <div className="relative">
            <MockupFrame size="small" className="animate-appear opacity-0 delay-200">
              <Mockup type="responsive" className="bg-background/90 w-full rounded-xl border-0">
                <Screenshot
                  srcLight="/dashboard-light.png"
                  srcDark="/dashboard-dark.png"
                  alt="Payroll Jamaica dashboard preview"
                  width={1248}
                  height={765}
                  className="w-full"
                />
              </Mockup>
            </MockupFrame>
            <Glow variant="top" className="animate-appear-zoom opacity-0 delay-500" />
          </div>
        </div>
        <Beam className="pointer-events-none absolute inset-0 -z-10" tone="brand" />
      </Section>

      <Stats />
      

      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
