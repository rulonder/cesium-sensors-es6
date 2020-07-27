import "cesium"
declare module "cesium" {
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
}
