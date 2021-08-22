export interface IContext {
    children: React.ReactNode | React.ReactChild;
}

export interface ITodoIcon {
    reference: any;
    checked: boolean;
    important?: boolean;
    favorite?: boolean;
    deleted?: boolean;
}

export interface ITodoItem {
    id: number;
    title: string;
    important?: boolean;
    favorite?: boolean;
    checked?: boolean;
    deleted?: boolean;
}

export interface ITodoContext {
    todo?: ITodoItem[];
    message?: boolean,
    onChange?: (todo: string) => void;
}

export interface ITodo {
    todo?: ITodoItem[];
}