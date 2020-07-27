
	import Cesium, {defined} from 'cesium';

	export function removePrimitive(entity:Cesium.Entity, hash: any, primitives: Cesium.EntityCollection) {
		var data = hash[entity.id];
		if (defined(data)) {
			var primitive = data.primitive;
			primitives.remove(primitive);
			if (!primitive.isDestroyed()) {
				primitive.destroy();
			}
			delete hash[entity.id];
		}
	};

