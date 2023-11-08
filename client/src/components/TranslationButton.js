// import React, { useEffect } from 'react';

// const TranslationButton = () => {
//   useEffect(() => {
//     window.googleTranslationElementInit = () => {
//       new window.google.translate.TranslationElement({pageLanguage: 'en'}, 'google_translate_element');
//     }

//     const script = document.createElement('script');
//     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   return <div id="google_translate_element"></div>;
// };

// export default TranslationButton;
import React, { useEffect } from 'react';

const TranslationButton = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);


    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
  }, []);

  return <div id="google_translate_element"></div>;
}

export default TranslationButton;
