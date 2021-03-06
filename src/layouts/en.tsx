import * as React from 'react';
import { addLocaleData, InjectedIntlProps } from 'react-intl';
import Layout from './Layout';
const localeData = require('react-intl/locale-data/en');
import { messages } from '../translations/en';

addLocaleData(localeData);

interface Props extends InjectedIntlProps {
  children: () => JSX.Element;
}

export default (props: Props) => <Layout {...props} locale="en" messages={messages} />;
