import React from 'react';

export type PageType = 'home' | 'legal' | 'privacy' | 'service-acquisition' | 'service-build' | 'service-management' | 'destination-casablanca' | 'destination-marrakech' | 'destination-essaouira' | 'promoter-lp' | 'booking';

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  isTech?: boolean;
}