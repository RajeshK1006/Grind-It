"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import MarkdownRenderer from "./MarkdownRenderer";
import { oopsAccordionProps } from "@/constants/oops/oopsData";

export default function OopAccordion({ items }: oopsAccordionProps) {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 shadow-md shadow-muted-foreground font-mono rounded-md mb-4 hover:bg-green-200 hover:scale-110 duration-300 transition"
          >
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger className="text-xl font-mono">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* ✅ Markdown Renderer used here */}
                    <MarkdownRenderer content={item.description} />

                    <div>
                      <h4 className="text-base font-semibold mb-2">
                        Key Modules
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {item.keyModules.map((mod, idx) => (
                          <li key={idx} className="text-sm">
                            {mod}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-semibold mb-2">
                        Solutions
                      </h4>
                      <p className="my-2"> (click the filenames)</p>
                      {Object.entries(item.solution).map(
                        ([file, lines], idx) => (
                          <Collapsible
                            key={idx}
                            className="mb-2 duration-300 transition-all"
                          >
                            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 border rounded-md cursor-pointer duration-300 transition">
                              <span className="font-mono">{file}</span>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="p-2 bg-gray-900 text-gray-300 rounded-md overflow-x-scroll">
                              <MarkdownRenderer
                                content={
                                  "```java\n" + lines.join("\n") + "\n```"
                                }
                              />
                            </CollapsibleContent>
                          </Collapsible>
                        )
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="duration-300 transition hover:scale-125 hover:bg-indigo-200 "
                      >
                        <a
                          href={item.blogLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Blog / Solution
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="hover:scale-125"
                      >
                        <a
                          href={item.tryItLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Try it Yourself
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
}
