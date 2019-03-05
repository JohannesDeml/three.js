import { WebGLRenderTarget } from "../../../src/renderers/WebGLRenderTarget";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { Scene } from "../../../src/scenes/Scene";
import { Camera } from "../../../src/cameras/Camera";
import { Color } from "../../../src/math/Color";
import { Material } from "../../../src/materials/Material";
import { Pass } from "./EffectComposer";

export class RenderPass extends Pass{
    constructor(scene: Scene, camera: Camera, overrideMaterial?: Material | null, clearColor?: Color | string | number, clearAlpha?: number);

    scene: Scene;
    camera: Camera;
    overrideMaterial: Material | null | undefined;
    clearColor: Color | string | number | undefined;
    clearAlpha: number | undefined;
    clear: boolean;
    needsSwap: false;
    clearDepth: false;
}
