"use client";

import * as Accordion from "@radix-ui/react-accordion";
import AccordionTemplate from "@/components/AccordionTemplate";


const Myaccordion = () => {
  return (
    <Accordion.Root type="single" collapsible>
    <AccordionTemplate
      item="item-1"
      trigger="How to play this game?"
      content="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    ></AccordionTemplate>

    <AccordionTemplate
      item="item-2"
      trigger="How to play this game?"
      content="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    ></AccordionTemplate>

    <AccordionTemplate
      item="item-3"
      trigger="How to play this game?"
      content="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    ></AccordionTemplate>

    <AccordionTemplate
      item="item-4"
      trigger="How to play this game?"
      content="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    ></AccordionTemplate>

    <AccordionTemplate
      item="item-5"
      trigger="How to play this game?"
      content="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    ></AccordionTemplate>
  </Accordion.Root>
  )
}

export default Myaccordion