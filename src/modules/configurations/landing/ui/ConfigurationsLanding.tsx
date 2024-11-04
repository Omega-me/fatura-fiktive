'use client';
import React from 'react';
import useConfigurationsLandingVm from '../useConfigurationsLandingVm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ProfilesPartial from './partials/ProfilesPartial';
import GlassPartial from './partials/GlassPartial';
import MechanismsPartial from './partials/MechanismsPartial';

const ConfigurationsLanding = () => {
  const vm = useConfigurationsLandingVm();

  return (
    <Accordion className="px-[30px]" type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Konfigurimi i profileve</AccordionTrigger>
        <AccordionContent>
          <ProfilesPartial {...vm} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Konfigurimi i xhamave</AccordionTrigger>
        <AccordionContent>
          <GlassPartial {...vm} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Konfigurimi i mekanizmit</AccordionTrigger>
        <AccordionContent>
          <MechanismsPartial {...vm} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ConfigurationsLanding;
