import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookViewComponent } from './book-view/book-view.component';
import { ForOFourComponent } from './for-o-four/for-o-four.component';
import { SingleBookComponent } from './single-book/single-book.component';
import {RouterModule, Routes} from '@angular/router';
import { BookComponent } from './book/book.component';
import {HttpClientModule} from '@angular/common/http';
import {BookService} from './services/book.service';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {
  faDragon,
  faGhost,
  faGlobe,
  faGrimace,
  faGrinHearts,
  faGrinTears, faTheaterMasks,
  faUtensils
} from '@fortawesome/free-solid-svg-icons';

const appRoutes: Routes = [
  { path: 'books', component: BookViewComponent },
  { path: 'books/:id', component: SingleBookComponent },
  { path: '', component: BookViewComponent },
  { path: 'not-found', component: ForOFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  declarations: [
    AppComponent,
    BookViewComponent,
    ForOFourComponent,
    SingleBookComponent,
    BookComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGrimace);
    library.addIcons(faUtensils);
    library.addIcons(faGlobe);
    library.addIcons(faDragon);
    library.addIcons(faGrinHearts);
    library.addIcons(faGhost);
    library.addIcons(faGrinTears);
    library.addIcons(faTheaterMasks);
  }
}
