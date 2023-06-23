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


/**
 * The type of waypoint.
 * @export
 */
export const WaypointType = {
    Planet: 'PLANET',
    GasGiant: 'GAS_GIANT',
    Moon: 'MOON',
    OrbitalStation: 'ORBITAL_STATION',
    JumpGate: 'JUMP_GATE',
    AsteroidField: 'ASTEROID_FIELD',
    Nebula: 'NEBULA',
    DebrisField: 'DEBRIS_FIELD',
    GravityWell: 'GRAVITY_WELL'
} as const;
export type WaypointType = typeof WaypointType[keyof typeof WaypointType];


export function WaypointTypeFromJSON(json: any): WaypointType {
    return WaypointTypeFromJSONTyped(json, false);
}

export function WaypointTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaypointType {
    return json as WaypointType;
}

export function WaypointTypeToJSON(value?: WaypointType | null): any {
    return value as any;
}

