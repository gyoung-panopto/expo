export declare type Notification = {
    title: string;
    body?: string;
    data?: any;
    categoryId?: string;
    ios?: {
        sound?: boolean;
        _displayInForeground?: boolean;
    };
    android?: {
        channelId?: string;
        icon?: string;
        color?: string;
        sticky?: boolean;
        link?: string;
        exact?: boolean;
    };
    web?: NotificationOptions;
    remote?: boolean;
};
export declare type ForegroundNotification = Notification & {
    remote: boolean;
};
export declare type Channel = {
    name: string;
    description?: string;
    priority?: string;
    sound?: boolean;
    vibrate?: boolean | number[];
    badge?: boolean;
};
export declare type ActionType = {
    actionId: string;
    buttonTitle: string;
    isDestructive?: boolean;
    isAuthenticationRequired?: boolean;
    doNotOpenInForeground?: boolean;
    textInput?: {
        submitButtonTitle: string;
        placeholder: string;
    };
};
export declare type UserInteraction = Notification & {
    actionId?: string;
    userText?: string;
};
export declare type TokenMessage = {
    token: string;
};
export declare type OnUserInteractionListener = (userInteraction: UserInteraction) => Promise<void>;
export declare type OnForegroundNotificationListener = (notification: ForegroundNotification) => Promise<void>;
export declare type OnTokenChangeListener = (token: string) => Promise<void>;
