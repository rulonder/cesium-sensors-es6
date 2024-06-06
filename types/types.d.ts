import 'cesium';
declare module 'cesium' {
  /**
   * The interface for all properties, which represent a value that can optionally vary over time.
   * This type defines an interface and cannot be instantiated directly.
   */
  export class PropertyExtended {
    constructor();
    /**
     * Gets a value indicating if this property is constant.  A property is considered
     * constant if getValue always returns the same result for the current definition.
     */
    readonly isConstant: boolean;
    /**
     * Gets the event that is raised whenever the definition of this property changes.
     * The definition is considered to have changed if a call to getValue would return
     * a different result for the same time.
     */
    readonly definitionChanged: Event;
    /**
     * Gets the value of the property at the provided time.
     * @param time - The time for which to retrieve the value.
     * @param [result] - The object to store the value into, if omitted, a new instance is created and returned.
     * @returns The modified result parameter or a new instance if the result parameter was not supplied.
     */
    getValue(time: JulianDate, result?: any): any;
    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     * @param [other] - The other property.
     * @returns <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    equals(other?: Property): boolean;
    getValueOrClonedDefault(value, time, defaultValue, cloned);
    getValueOrDefault(value, time, defaultValue);
    getValueOrUndefined(value, time, defaultValue?);
  }
  export function createMaterialPropertyDescriptor(
    s: string
  ): PropertyDescriptor;
  export function createPropertyDescriptor(s: string): PropertyDescriptor;
  export class Buffer {
    static createVertexBuffer(options: any): any;
  }
  export class BufferUsage {
    static STATIC_DRAW;
  }
  export class DrawCommand {}
  export class Pass {
    static ENVIRONMENT;
    static COMPUTE;
    static GLOBE;
    static TERRAINSSIFICATION;
    static CESIUMTILE;
    static CESIUMTILE_CLASSIFICATION;
    static CESIUMTILE_CLASSIFICATION_IGNORE_SHOW;
    static OPAQUE;
    static TRANSLUCENT;
    static OVERLAY;
    static NUMBER_OF_PASSES;
  }
  export class RenderState {
    static fromCache(options: any);
  }
  export class ShaderProgram {
    static replaceCache;
  }
  export class ShaderSource {
    constructor(options: any);
  }
  export class VertexArray {
    constructor(options: any);
  }
}
