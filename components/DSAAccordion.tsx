"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner"; // ✅ Sonner import

interface Item {
  id: number;
  title: string;
  problemLink: string;
  blogLink: string;
}

interface DSAAccordionProps {
  sectionName: string;
  items: Item[];
}

const DSAAccordion: React.FC<DSAAccordionProps> = ({ sectionName, items }) => {
  const [completed, setCompleted] = useState<{ [key: number]: boolean }>({});

  const handleCheckboxChange = (id: number) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLinkClick = (link: string, type: "problem" | "blog") => {
    if (!link || link.trim() === "") {
      toast.error(
        type === "problem"
          ? "No problem available for this topic in this section."
          : "No blog/solution available for this problem in this section."
      );
      return false;
    }
    return true;
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full p-4 shadow-md rounded-xl mx-auto"
    >
      <AccordionItem
        value={sectionName}
        className="font-mono text-shadow-xs text-2xl mx-auto"
      >
        <AccordionTrigger className="font-mono text-xl">
          {sectionName}
        </AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Problems</TableHead>
                <TableHead>Blog/Solution</TableHead>
                <TableHead>Completed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell className="font-medium text-black-700">
                    {item.title}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        if (handleLinkClick(item.problemLink, "problem")) {
                          window.open(item.problemLink, "_blank");
                        }
                      }}
                    >
                      Solve
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        if (handleLinkClick(item.blogLink, "blog")) {
                          window.open(item.blogLink, "_blank");
                        }
                      }}
                    >
                      Blog
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={!!completed[item.id]}
                      onCheckedChange={() => handleCheckboxChange(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DSAAccordion;
