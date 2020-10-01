import { AppLocale } from '@context/locale/locale.context';
import { useLocale } from '@hooks/use-locale/use-locale.hook';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import React from 'react';
import { StyledRadioGroup } from './language-select.styles';

export const LanguageSelect = () => {
  const { setLocale, locale } = useLocale();

  const handleRadioChange = ({ target: { value } }: RadioChangeEvent) => {
    setLocale(value);
  };

  return (
    <StyledRadioGroup onChange={handleRadioChange} defaultValue={locale}>
      <Radio.Button value={AppLocale.en}>EN</Radio.Button>
      <Radio.Button value={AppLocale.pl}>PL</Radio.Button>
    </StyledRadioGroup>
  );
};
