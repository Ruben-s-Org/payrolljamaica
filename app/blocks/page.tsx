import CTA from "../../components/sections/cta/default";
import FAQ from "../../components/sections/faq/default";
import Footer from "../../components/sections/footer/default";
import Hero from "../../components/sections/hero/default";
import Items from "../../components/sections/items/default";
import Logos from "../../components/sections/logos/default";
import Navbar from "../../components/sections/navbar/default";
import Stats from "../../components/sections/stats/default";
import { LayoutLines } from "../../components/ui/layout-lines";
import { Section } from "../../components/ui/section";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import Screenshot from "../../components/ui/screenshot";
import Glow from "../../components/ui/glow";
import { Mockup, MockupFrame } from "../../components/ui/mockup";

export default function BlocksPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* Sections Showcase */}
      <Hero />
      <Logos />
      <Items />
      <Stats />
      <FAQ />
      <CTA />

      {/* UI Components Showcase */}
      <Section className="py-16">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">UI Components</h2>

          {/* Buttons */}
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-3">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-3">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-3">Cards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">Simple card content</Card>
              <Card className="p-4">Another card</Card>
              <Card className="p-4">Yet another card</Card>
            </div>
          </div>

          {/* Accordion */}
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-3">Accordion</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Payroll Jamaica?</AccordionTrigger>
                <AccordionContent>
                  Payroll and HR software tailored for Jamaican businesses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How fast can I run payroll?</AccordionTrigger>
                <AccordionContent>
                  Run payroll in minutes and stay secure and compliant automatically.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Media & Effects */}
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-3">Mockup & Effects</h3>
            <div className="relative">
              <MockupFrame size="small">
                <Mockup type="responsive" className="bg-background/90 w-full rounded-xl border-0">
                  <Screenshot
                    srcLight="/dashboard-light.png"
                    srcDark="/dashboard-dark.png"
                    alt="App screenshot"
                    width={1248}
                    height={765}
                    className="w-full"
                  />
                </Mockup>
              </MockupFrame>
              <Glow variant="top" className="mt-6" />
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
