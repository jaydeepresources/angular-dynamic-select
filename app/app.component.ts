import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  listings = [
      {
      "items": 
      [
        "backdrops",
        "main curtains",
        "lenolium",
        "printed curtains",
        "door curtains",
        "coloured curtains",
        "window curtains",
        "net / gauze",
        "white cyclorama",
        "projector screen",
        "uncategorized"
      ],
      "name": "curtains"
    },
    {
      "items": [
        "home carpets",
        "misc. carpets"
      ],
      "name": "carpets"
    },
    {
      "items": [
        "flats: 5ft",
        "flats: 4ft",
        "flats: 3ft",
        "flats: 2ft",
        "flats: 1ft",
        "wooden",
        "window flats",
        "door flats",
        "gauze flats",
        "only frames (no cloth)",
        "uncategorized"
      ],
      "name": "walls & flats"
    },
    {
      "items": [
        "folding: 8ft",
        "folding: greater than 8ft",
        "fixed:less than 8ft",
        "fixed: greater than 8f",
        "draped: less than 8ft",
        "wings: greater than 8f",
        "wings: less than 8f"
      ],
      "name": "black flats"
    },
    {
      "items": [
        "folding (6 X 4):6 inch",
        "folding (6 X 4):9 inch",
        "folding (6 X 4):12 inch",
        "folding (6 X 4):18 inch",
        "folding (6 X 4):24 inch or greater",
        "folding (6 X 3):6 inch",
        "folding (6 X 3):9 inch",
        "folding (6 X 3):12 inch",
        "folding (6 X 3):18 inch",
        "folding (6 X 3):24 inch or greater",
        "other dimensions",
        "box type"
      ],
      "name": "platforms"
    },
    {
      "items": [
        "(black) width: 6 inch",
        "(black) width: 9 inch",
        "(black) width: 18 inch",
        "(colored) width: 6 inch",
        "(colored) width: 9 inch",
        "(colored) width: 18 inch"
      ],
      "name": "maskings"
    },
    {
      "items": [
        "full wooden",
        "draped"
      ],
      "name": "cut outs"
    },
    {
      "items": [
        "seating",
        "beds",
        "stands",
        "shelves",
        "cabinets"
      ],
      "name": "furniture"
    },
    {
      "items": [
        "coming soon"
      ],
      "name": "props"
    },
    {
      "items": [
        "coming soon"
      ],
      "name": "installations"
    }
  ]

  masterCategory: string;

  index;
  seletedFlag: boolean;

  constructor() {
    this.seletedFlag = false;
  }

  masterSelected() {
    console.log(this.masterCategory);
    for (let i = 0; i < this.listings.length; i++) {
      if (this.listings[i].name == this.masterCategory) {
        this.index = i;
        this.seletedFlag = true;
        break;
      }
    }
  }
}
