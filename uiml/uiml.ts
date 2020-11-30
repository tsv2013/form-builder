export interface IPart {
    id?: string;
    partclass: string;
    parts?: IPart[];
    cssClasses?: string;
    [others: string]: any;
}

export interface IStyle {
    partname?: string;
    partclass?: string;
    name: string;
    value: string;
}

export interface IUMLInterface {
    parts: IPart[];
    styles?: IStyle[];
}

export interface IProperty {
    id: string;
    mapsto: string;
}

export interface IClass {
    id: string;
    mapsto: string;
    dproperties?: IProperty[];
}

export interface IPeer {
    peername: string;
    id: string;
    dclasses: IClass[];
    wloaders: { [widget: string]: () => Promise<any> };
}

export interface IUML {
    uimlinterface: IUMLInterface;
    peers: IPeer[];
}

export let htmlUiRendererPeers = [
    <IPeer>{
        peername: "presentation",
        id: "HTMLUIRenderer",
        dclasses: [
            { id: "container", mapsto: "ContainerRenderer" },
            { id: "input", mapsto: "InputRenderer" },
            { id: "label", mapsto: "LabelRenderer" }
        ],
        wloaders: <{ [widget: string]: () => Promise<any> }>{}
    }
];
