declare module 'svelte-routing' {
  export const navigate: (url: string) => void;
}

declare module 'svelte-notifications' {
  export interface Notification {
    id?: string;
    text: string;
    position: string;
    removeAfter?: number;
  }

  export interface NotificationsContext {
    addNotification: (notification: Notification) => void;
    removeNotification: (id: string) => void;
    clearNotifications: () => void;
  }

  export const getNotificationsContext: () => NotificationsContext;
}
