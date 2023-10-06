import Cesium from 'cesium';

export const isWebGl2Context = (scene: Cesium.Scene) => {
    if ((scene as any)?.context?._gl instanceof WebGL2RenderingContext) {
        return true;
    }
    return false;
}
