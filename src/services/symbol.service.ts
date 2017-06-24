import { SafeHtml } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Injectable, EventEmitter } from "@angular/core";
import { SymbolDetail } from "../models/symbol-detail";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SymbolService {
    private icons: IconDetail[] = [];

    private history: IconDetail[] = [];
    private current: IconDetail;

    public get currentSymbol() {
        return this.current;
    }

    public onChange: EventEmitter<SymbolDetail> = new EventEmitter<SymbolDetail>();

    private percentValue: number = 0;
    private resetTime: boolean = false;
    private turnTime: number;

    get percent(): number {
        return this.percentValue;
    }
    set percent(val) {
        this.percentValue = val;
        this.timeChange.emit(<TimeChengeEventData>{
            startTime: this.startTime,
            percent: this.percentValue,
            resetTime: this.resetTime
        });
    }

    private startTimeValue: number = 0;
    public timeChange: EventEmitter<TimeChengeEventData> = new EventEmitter<TimeChengeEventData>();

    get startTime(): number {
        return this.startTimeValue;
    }
    set startTime(val) {
        this.startTimeValue = val;
        this.timeChange.emit(<TimeChengeEventData>{
            startTime: this.startTime,
            percent: this.percentValue,
            resetTime: this.resetTime
        });
    }

    constructor(private sanitizer: DomSanitizer, private http: Http) {
    }

    public load(): Promise<any> {
        return this.http.get('assets/icons/icons.json').toPromise().then(x => {
            this.icons = x.json();
            return x.json();
        });
    }

    public next() {
        this.history.push(this.current);
        var number = Math.round(Math.random() * this.icons.length);
        this.current = this.icons[number];
        this.emitSvgSymbol();
        this.startTime = performance.now();
    }

    public prev() {
        if (this.history.length == 1)
            return;
        this.current = this.history.pop();
        this.emitSvgSymbol();
        this.startTime = performance.now();
    }

    public startTimer(interval: number): number {

        this.percent = 0;

        let timer = setInterval(x => {
            let currentTime = performance.now();
            if (currentTime - this.startTime >= this.turnTime) {
                this.startTime = performance.now();

                this.resetTime = true;


                this.next();
            }
            this.percent = (currentTime - this.startTime) / this.turnTime * 100;
        }, interval);

        return timer;
    }

    public stopTimer(timer: number) {
        clearInterval(timer);
    }

    private emitCurrent(svgSymbol: SafeHtml) {
        if (!this.current)
            return;
        this.onChange.emit({
            Symbol: svgSymbol,
            Tags: this.current.Tags
        });
    }

    private emitSvgSymbol() {
        if (!this.current)
            return;
        this.http.get('assets/icons' + this.current.FileName)
            .subscribe(x => {
                this.emitCurrent(this.sanitizer.bypassSecurityTrustHtml(x.text()));
            });
    }
}

class IconDetail {
    public FileName: string;
    public Tags: string[];
}

export class TimeChengeEventData {
    public startTime: number;
    public percent: number;
    public resetTime: boolean = false;
}