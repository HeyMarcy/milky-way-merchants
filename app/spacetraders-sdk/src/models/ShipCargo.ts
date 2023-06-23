/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ShipCargoItem } from './ShipCargoItem';
import {
    ShipCargoItemFromJSON,
    ShipCargoItemFromJSONTyped,
    ShipCargoItemToJSON,
} from './ShipCargoItem';

/**
 * 
 * @export
 * @interface ShipCargo
 */
export interface ShipCargo {
    /**
     * The max number of items that can be stored in the cargo hold.
     * @type {number}
     * @memberof ShipCargo
     */
    capacity: number;
    /**
     * The number of items currently stored in the cargo hold.
     * @type {number}
     * @memberof ShipCargo
     */
    units: number;
    /**
     * The items currently in the cargo hold.
     * @type {Array<ShipCargoItem>}
     * @memberof ShipCargo
     */
    inventory: Array<ShipCargoItem>;
}

/**
 * Check if a given object implements the ShipCargo interface.
 */
export function instanceOfShipCargo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "capacity" in value;
    isInstance = isInstance && "units" in value;
    isInstance = isInstance && "inventory" in value;

    return isInstance;
}

export function ShipCargoFromJSON(json: any): ShipCargo {
    return ShipCargoFromJSONTyped(json, false);
}

export function ShipCargoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipCargo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'capacity': json['capacity'],
        'units': json['units'],
        'inventory': ((json['inventory'] as Array<any>).map(ShipCargoItemFromJSON)),
    };
}

export function ShipCargoToJSON(value?: ShipCargo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'capacity': value.capacity,
        'units': value.units,
        'inventory': ((value.inventory as Array<any>).map(ShipCargoItemToJSON)),
    };
}

