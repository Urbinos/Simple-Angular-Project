import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housing-location";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units availabe: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location wifi: {{ housingLocation?.wifi }}</li>
          <li>Laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="section-apply">
        <h2 class="section-heading">Apply now to live hear</h2>
        <button class="primary" type="button">Apply</button>
      </section>
    </article>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}

// v tablice vidaet Nan
