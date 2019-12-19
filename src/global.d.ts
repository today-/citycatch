import {PusherStatic} from 'pusher-js';

declare global {
  interface Window { Pusher: PusherStatic; }
}
