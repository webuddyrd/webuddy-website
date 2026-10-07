import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../i18n/lang';
import { applyHead, buildHead, HeadContext, type HeadData } from '../seo/head';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  jsonLd?: object[];
}

export function SEO({ title, description, type, noindex, jsonLd }: SEOProps) {
  const lang = useLang();
  const { pathname } = useLocation();
  const collector = useContext(HeadContext);
  const head = buildHead({ title, description, lang, pathname, type, noindex, jsonLd });

  // Prerender: hand the data to the collector, since effects don't run on the server.
  if (collector) collector.head = head;

  const serialized = JSON.stringify(head);
  useEffect(() => {
    applyHead(JSON.parse(serialized) as HeadData);
  }, [serialized]);

  return null;
}
