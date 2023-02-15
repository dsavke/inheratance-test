import { Component } from "@angular/core";
import { BaseFormComponent } from "../shared/base-form/base-form.component";

@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent extends BaseFormComponent {
    public override canSave(): boolean {
        return false;
    }
}