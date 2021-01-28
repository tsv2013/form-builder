export interface IPropertyDescription {
    name: string;
    title?: string;
    type?: string;
    hint?: string;
}

export interface IObjectDescription {
    name: string;
    title?: string;
    properties: Array<IPropertyDescription>; 
}
