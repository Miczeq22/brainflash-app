import { AppLocale, DEFAULT_LOCALE, LocaleContext } from '@context/locale/locale.context';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { translations } from '@i18n/messages';

interface LocaleProviderProps {
  children: React.ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = React.useState<AppLocale>(DEFAULT_LOCALE);

  return (
    <IntlProvider defaultLocale={DEFAULT_LOCALE} locale={locale} messages={translations[locale]}>
      <LocaleContext.Provider
        value={{
          defaultLocale: DEFAULT_LOCALE,
          locale,
          setLocale,
        }}
      >
        {children}
      </LocaleContext.Provider>
    </IntlProvider>
  );
};
