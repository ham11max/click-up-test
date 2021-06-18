import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerWrapperComponent } from './container-wrapper.component';

@NgModule({
  declarations: [ContainerWrapperComponent],
  exports: [ContainerWrapperComponent],
  imports: [CommonModule]
})
export class ContainerWrapperModule {}
