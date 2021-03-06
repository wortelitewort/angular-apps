import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TravelBugComponent } from "./travel-bug.component";
import { GreetComponent } from "./greet/greet.component";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { TripCardsComponent } from "./trip-cards/trip-cards.component";
import { AddTripCardComponent } from "./trip-cards/add-trip-card/add-trip-card.component";
import { EditTripCardComponent } from "./trip-cards/edit-trip-card/edit-trip-card.component";
import { TripCardDetailsComponent } from "./trip-cards/trip-card-details/trip-card-details.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthComponent } from "./auth/auth.component";
import { TripCardPreviewComponent } from "./trip-cards/trip-card-preview/trip-card-preview.component";
import { TripCardComponent } from "./trip-cards/trip-card/trip-card.component";
import { TravelBugRoutingModule } from "./travel-bug-routing.module";

@NgModule({
  declarations: [
    AuthComponent,
    TravelBugComponent,
    HomeComponent,
    GreetComponent,
    UsersComponent,
    TripCardsComponent,
    TripCardPreviewComponent,
    TripCardDetailsComponent,
    AddTripCardComponent,
    EditTripCardComponent,
    HeaderComponent,
    TripCardComponent
  ],
  imports: [
    CommonModule,
    TravelBugRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //   ShoppingListService,
    //   RecipeService,
  ],
  exports: [TravelBugComponent]
})
export class TravelBugModule {}
