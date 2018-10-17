import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FilterWordByGroupIdPipe } from './filter-word-by-group-id.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, FormComponent, FilterWordByGroupIdPipe],
  exports: []
})
export class ListTypeModule { }
