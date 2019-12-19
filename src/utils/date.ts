import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/en';
import '~/i18n/dayjs_ru';
import {getLanguage} from '~/i18n';

dayjs.extend(relativeTime);

export type AnyDate = string | number | Date;

export function toHuman(date: AnyDate) {
  return dayjs(date)
    .locale(getLanguage())
    .fromNow();
}

export function toServer(date: AnyDate = new Date()) {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

export function toCountdown(date: AnyDate = new Date()) {
  return dayjs(date).format('mm:ss');
}
