export interface IAction {
    title: string;
    action: () => void;
    visible?: KnockoutObservable<boolean>;
    items?: Array<IAction>;
}
