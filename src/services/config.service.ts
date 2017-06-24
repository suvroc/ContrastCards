import { StorageService } from './storage.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ConfigService {
    public timeConfig: TimeConfig = new TimeConfig();

    constructor(private storageService: StorageService) {
        this.timeConfig.onChange.subscribe(x => this.saveConfig());
        this.load();
    }

    private saveConfig() {
        this.storageService.save<ConfigStoreModel>(this.storageService.configKey, {
            time: this.timeConfig.value
        });
    }

    public load() {
        let config = this.storageService.get<ConfigStoreModel>(this.storageService.configKey);
        if (!config) {
            config = {
                time: 30
            };
        }
        this.timeConfig.value = config.time;
    }
}

class ConfigStoreModel {
    time: number;
}

class TimeConfig {
    public value: number = 30;
    private step = 15;
    public onChange: EventEmitter<number> = new EventEmitter<number>();
    public plus() {
        this.value += this.step;
        this.onChange.emit(this.value);
    }
    public minus() {
        if (this.value - this.step > 0) {
            this.value -= this.step;
            this.onChange.emit(this.value);
        }
    }
    public toString() {
        if (this.value < 60) {
            return `${this.value} sec`;
        } else {
            return `${Math.floor(this.value / 60)} min ${this.value % 60} sec`
        }
    }
}