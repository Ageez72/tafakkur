"use client";
import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/all.min.css";
import "/public/assets/css/animate.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/meanmenu.css";
import "/public/assets/css/swiper-bundle.min.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/main.css";
import { useEffect, useState } from "react";
import AppProvider from "@/context/AppContext";
import { metadata } from "./siteMetadata";
import { Kumbh_Sans } from "next/font/google";
import { useRouter } from 'next/router';

// const lang = localStorage.getItem("lang");
const kumbh = Kumbh_Sans({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({ children }) {
  const [lang, setLang] = useState("ar"); // Default language
  const [pageName, setPageName] = useState(""); 
  // useEffect(() => {
  //   const langFromLocalStorage = localStorage.getItem("lang");
  //   if (langFromLocalStorage) {
  //     setLang(langFromLocalStorage);
  //   }
  // }, []);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  useEffect(() => {
    if (!window.location.href.includes("search-results")) {
      if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
        if(!sessionStorage.getItem('urlParams')) {
          // Get the query string from the current URL
          const queryString = window.location.search;
          
          // Store it in localStorage
          sessionStorage.setItem('urlParams', queryString);
        }
      }
    }
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      setPageName(sessionStorage.getItem('pageName'))
    }
  }, [])

  // Function to get URL parameters
  function getQueryParams() {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      const urlParams = new URLSearchParams(window?.location.search);
      return urlParams;
    }
  }

  // Check if the user came from Facebook using utm_source=facebook
  const params = getQueryParams();
  const utmSource = params.get('utm_source');

  if (utmSource) {
    localStorage?.setItem('utm_source', utmSource);
  } else {
    localStorage?.removeItem('utm_source');
  }

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/nav/tIcon.png" type="image/x-icon" sizes="16x16" />
      </head>

      <body className={`${kumbh.className}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
