import React from 'react';
import SectionSidebar from './SectionSidebar';

interface PoojaSidebarProps {
  activePath: string;
}

export default function PoojaSidebar({ activePath }: PoojaSidebarProps) {
  return <SectionSidebar sectionKey="poojas" activePath={activePath} />;
}
