"use client";
import React from "react";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';


const Taccordion = ({item, trigger, content}: {item: string, trigger: string, content:string}) => {
  return (
    <main>
      <Accordion.Item value={`${item}`}>
        <Accordion.Header className="lg:w-[789px] w-[333px] mb-[18px]">
          <Accordion.Trigger className="AccordionTrigger flex justify-between w-full">
            <span className="text-gray-800 lg:text-xl text-[16px] font-medium text-left">
              {`${trigger}`}
            </span>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent lg:w-[789px] w-[333px] text-neutral-500 lg:text-base text-[13px] font-normal leading-7 lg:mb-[25px] mb-[17px]">
          {`${content}`}
        </Accordion.Content>
      </Accordion.Item>

      <div className="lg:w-[789px] w-[335px] h-px border border-black border-opacity-10 lg:mb-[25px] mb-[17px]"></div>
    </main>
  );
};

export default Taccordion;
