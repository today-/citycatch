// window.Pusher.logToConsole = true;

export const pusher = new window.Pusher(process.env.PUSHER_APP_KEY, {
  cluster: process.env.PUSHER_APP_CLUSTER,
  forceTLS: true,
  // enabledTransports: ['ws', 'wss', 'sockjs', 'xhr_streaming']
});
