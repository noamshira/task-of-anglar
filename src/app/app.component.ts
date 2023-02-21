import { Component, ElementRef, Input, ViewChild } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ניהול משימות';
    list: any[] = [];
    @ViewChild('task') textElemnt: ElementRef<HTMLInputElement> | undefined;


    addTask(item: string) {
        var flag = this.list.some( 
            value => { return typeof value == "object" } );

        if (this.list.length > 4) {
            alert("הרשימה מליאה")
        }
        else if (item.length < 3) {
            alert("המילה קטנה מידי")
        }
        else {
            if (flag) {
                alert("המשימה כבר מופיעה")
            }
            else {
                this.list.push({ id: this.list.length, name: item })
                console.warn(this.list);
                this.textElemnt!.nativeElement.value = ""

            }


        }


    }
    removeTask(id: number) {
        console.warn(id)
        this.list = this.list.filter(item => item.id !== id);
    }
}