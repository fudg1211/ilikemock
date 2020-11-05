/*
 * @Author: huajian
 * @LastEditors: huajian
 */



declare module "jquerys" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }
}

declare module "SomeModule" {
    export function fn(): string;
}
