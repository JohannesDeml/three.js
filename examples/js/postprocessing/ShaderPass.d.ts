import { OrthographicCamera } from "../../../src/cameras/OrthographicCamera";
import { WebGLRenderTarget } from "../../../src/renderers/WebGLRenderTarget";
import { IUniform } from "../../../src/renderers/shaders/UniformsLib";
import { ShaderMaterial } from "../../../src/materials/ShaderMaterial";
import { Scene } from "../../../src/scenes/Scene";
import { Mesh } from "../../../src/objects/Mesh";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { Shader } from "../../../src/renderers/shaders/ShaderLib";

import { Pass } from "./EffectComposer";

export class ShaderPass extends Pass {
    constructor(shader: Shader, textureID?: string);

    textureID: string;
    uniforms: { [uniform: string]: IUniform };
    material: ShaderMaterial;
    camera: OrthographicCamera;
    scene: Scene;
    quad: Mesh;
}