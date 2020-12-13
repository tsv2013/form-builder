import { IUML, IUMLInterface, IPart, htmlUiRendererPeers } from "./uiml";
import { UIMLWrapper } from "./uiml-wrapper";

export * from "./uiml";
export * from "./renderer";
export * from "./panel";
export * from "./layout";

declare var config: IUML;

const uimlWrapper = new UIMLWrapper(typeof config !== "undefined" && config || { uimlinterface: <IUMLInterface>{}, peers: htmlUiRendererPeers });

export function render(part: IPart, container?: HTMLElement) {
    const renderer = uimlWrapper.createRenderer(part);
    return renderer.render(container);
}

export function refresh() {
    uimlWrapper.refresh();
}