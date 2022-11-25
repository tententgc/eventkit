declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module "*.jpg" {
    const content: string;
    export default content;
}

declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.json" {
    const content: string;
    export default content;
}

declare module "*.mp4" {
    const content: string;
    export default content;
}

declare module "*.ico" {
    const content: string;
    export default content;
}

declare module "*.mp3" {
    const src: string;
    export default src;
}
declare module "*.jpeg" {
    const content: string;
    export default content;
}