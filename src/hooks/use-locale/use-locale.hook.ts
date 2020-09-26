import { LocaleContext, LocaleContextValueType } from '@context/locale/locale.context';
import React from 'react';
import { IntlShape, useIntl } from 'react-intl';

export const useLocale = (): IntlShape & LocaleContextValueType => {
  const intl = useIntl();
  const localeContext = React.useContext(LocaleContext);

  if (!localeContext) {
    throw new Error(
      'LocaleContext is unavailable, make sure you are using LocaleProvider context.',
    );
  }

  const locale = React.useMemo(
    () => ({
      ...intl,
      ...localeContext,
    }),
    [intl, localeContext],
  );

  return locale;
};
