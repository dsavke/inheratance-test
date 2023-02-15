import { Component, ContentChild, TemplateRef } from "@angular/core";

@Component({
    selector: 'base-form',
    templateUrl: './base-form.component.html'
})
export class BaseFormComponent {
    private counter: number = 0;

    @ContentChild('content') content!: TemplateRef<any>;

    public editUrl: string = '';

    public onEdit(): void {
        //some logic
    }

    public onSave(): string {
        if (!this.canSave())
            return 'Not saved';

        return 'Saved';
    }

    public canSave(): boolean {
        return true || true;
    }

    private updateCounter(): void {
        this.counter++;
    }
}