import { TopLevelCategory } from "./page.intarfece";

export interface PageItem {
    [x: string]: string;
    secondCategory: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: PageItem[];
}

export interface FirstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}