import {NgModule} from '@angular/core';
import {RoutesModule} from './routes/routes.module';
import {BrowserModule} from '@angular/platform-browser';


import {NumberConvertDropdownDataService} from 'app/services/number-convert-dropdown-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {NumberConverterComponent} from './Components/number-converter/number-converter.component';
import {FooterComponent} from './Components/footer/footer.component';
import {HomeComponent} from './Components/home/home.component';
import {SidebarComponent} from './Components/sidebar/sidebar.component';
import {MainPanelComponent} from './Components/main-panel/main-panel.component';



@NgModule({
  declarations: [
    AppComponent, NumberConverterComponent, FooterComponent, HomeComponent, SidebarComponent, MainPanelComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    BrowserAnimationsModule
  ],
  providers: [NumberConvertDropdownDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
