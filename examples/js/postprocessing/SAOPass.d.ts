import { WebGLRenderTarget } from "../../../src/renderers/WebGLRenderTarget";
import { Texture } from "../../../src/textures/Texture";
import { IUniform } from "../../../src/renderers/shaders/UniformsLib";
import { ShaderMaterial } from "../../../src/materials/ShaderMaterial";
import { OrthographicCamera } from "../../../src/cameras/OrthographicCamera";
import { Scene } from "../../../src/scenes/Scene";
import { Mesh } from "../../../src/objects/Mesh";
import { Camera } from "../../../src/cameras/Camera";
import { Vector2 } from "../../../src/math/Vector2";
import { Color } from "../../../src/math/Color";
import { MeshDepthMaterial } from "../../../src/materials/MeshDepthMaterial";
import { MeshNormalMaterial } from "../../../src/materials/MeshNormalMaterial";
import { Renderer } from "../../../src/renderers/WebGLRenderTarget";
import { Material } from "../../../src/materials/Material";

import { Pass } from "./EffectComposer";

interface SAOParams{
    output: number,
    saoBias: number,
    saoIntensity: number,
    saoScale: number,
    saoKernelRadius: number,
    saoMinResolution: number,
    saoBlur: boolean,
    saoBlurRadius: number,
    saoBlurStdDev: number,
    saoBlurDepthCutoff: number
}


export class SAOPass extends Pass {
    constructor(scene: Scene, camera: Camera, depthTexture: boolean, useNormals: boolean, resolution?:Vector2);
    camera: Camera;
    scene: Scene;
    clear: boolean;
    needSwap: boolean;
    supportsDepthTextureExtension: boolean;
    supportsNormalTexture: boolean;
    oldClearColor: Color;
    oldClearAlpha: number;
    params: SAOParams;
    resolution: Vector2;
    saoRenderTarget: WebGLRenderTarget;
    blurIntermediateRenderTarget: WebGLRenderTarget;
    beautyRenderTarget: WebGLRenderTarget;
    normalRenderTarget: WebGLRenderTarget;
    depthRenderTarget: WebGLRenderTarget;
    depthMaterial: MeshDepthMaterial;
    normalMaterial: MeshNormalMaterial;
    saoMaterial: ShaderMaterial;
    vBlurMaterial: ShaderMaterial;
    hBlurMaterial: ShaderMaterial;
    materialCopy: ShaderMaterial;
    depthCopy: ShaderMaterial;
    quadCamera: OrthographicCamera;
    quadScene: Scene;

    quad: Mesh;

    render(renderer: Renderer, writeBuffer:any, readBuffer:any, delta:any,maskActive:any):void;
    renderPass(renderer:Renderer, passMaterial: Material,clearColor: Color, clearAlpha: number):void;
    renderOverride(renderer:Renderer, overrideMaterial: Material,clearColor: Color, clearAlpha: number):void;
    setSize(width:number,height:number):void;
}