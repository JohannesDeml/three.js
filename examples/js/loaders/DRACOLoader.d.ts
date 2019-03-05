// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/DRACOLoader.js

import {LoadingManager} from "../../../src/loaders/LoadingManager";
import {TrianglesDrawModes} from "../../../src/constants";
import {Group} from "../../../src/objects/Group";

export class DRACOLoader {
    static setDecoderPath(path: string): void;
    static setDecoderConfig(path: Object): void;

    constructor(manager?: LoadingManager);
    manager: LoadingManager;
    crossOrigin: string

    load(url: string, onLoad: (group: Group) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;

    setCrossOrigin(value: string): DRACOLoader;
    setPath(value: string): DRACOLoader;
    setVerbosity(level: number): DRACOLoader;
    setDrawMode(drawMode: TrianglesDrawModes): DRACOLoader;
    setSkipDequantization(attributeName: string, skip: boolean): DRACOLoader;
}

// Add static methods

export as namespace THREE;