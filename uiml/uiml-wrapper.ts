import { IUML, IPeer, IPart } from "./uiml";
import * as Renderer from "./renderer";

export class UIMLWrapper {
    private _renderersMap = {};
    private _getTypeConstructor(typeName: string) {
        var typeConstructor = Renderer[typeName];
        return (typeof typeConstructor === "function") ? typeConstructor : Renderer.InterfaceRenderer;
    }
    constructor(private _uiml: IUML) {
        var htmlPresentation = null;
        _uiml.peers.forEach((peer: IPeer) => {
            if(peer.peername === "presentation" && peer.id === "HTMLUIRenderer") {
                htmlPresentation = peer;
            }
        });
        if(!htmlPresentation) {
            throw new Error("HTMLUIRenderer presentation not found.");
        }
        htmlPresentation.dclasses.forEach((dclass) => {
            this._renderersMap[dclass.id] = this._getTypeConstructor(dclass.mapsto);
        });
    }
    getStyles(part: IPart): {} {
        var styles = { cssClasses: [] };
        if(part) {
            (this._uiml.uimlinterface.styles || []).forEach((style) => {
                if(style.partclass === part.partclass || style.partname === part.id) {
                    if(style.name !== "cssClass") {
                        styles[style.name] = style.value;
                    }
                    else {
                        styles.cssClasses.push(style.value);
                    }
                }
            });
            (part.cssClasses || "").split(" ").forEach((styleName) => {
                styles.cssClasses.push(styleName);
            });
        }
        return styles;
    }
    createRenderer(part: IPart): Renderer.IRenderer {
        return new (this._renderersMap[part.partclass] || Renderer.ComponentRenderer)(part, this);
    }
}
