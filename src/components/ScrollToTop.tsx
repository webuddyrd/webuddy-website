import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { stripLang } from "../i18n/routing";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previous = useRef(pathname);

  useEffect(() => {
    const languageSwitchOnly = previous.current !== pathname && stripLang(previous.current) === stripLang(pathname);
    previous.current = pathname;

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    // Switching language shows the same page, so keep the reading position.
    if (!languageSwitchOnly) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
