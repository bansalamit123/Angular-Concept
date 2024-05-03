import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpServiceService } from './http-service.service';
import { DemoComponent } from './demo/demo.component';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';
import { TestComponent } from './test/test.component';
import { AbcDirective } from './abc.directive';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CustomDirective,
    CustomPipe,
    TestComponent,
    AbcDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpServiceService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {

}
