import {t} from '../i18n';

export const formatNumber = (value: number) =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const formatDistance = (distance: number) =>
  (distance > 0)
    ? formatNumber(distance) + ' ' + t('km')
    : '';
