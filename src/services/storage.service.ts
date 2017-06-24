import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    public readonly configKey: string = 'config';

    constructor() {

    }

    public save<T>(name: string, players: T) {
        localStorage.setItem(name, JSON.stringify(players));
    }

    public get<T>(name: string): T {
        let data = localStorage.getItem(name);
        if (data) {
            return <T>JSON.parse(data);
        }
        return null;
    }
}