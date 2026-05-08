import { Component } from '@angular/core';
import { LucideBriefcase, LucideBuilding2, LucideDynamicIcon, LucideLightbulb, LucidePalette, LucideRocket, LucideStore, LucideWrench } from '@lucide/angular';

@Component({
  selector: 'app-industries',
  imports: [
  LucideDynamicIcon
  ],
  templateUrl: './industries.html',
  styleUrl: './industries.css',
})
export class Industries {
industries = [
  { icon: LucideBriefcase, name: "Freelancers" },
  { icon: LucideBuilding2, name: "Agencies" },
  { icon: LucideLightbulb, name: "Consultants" },
  { icon: LucideStore, name: "Retail stores" },
  { icon: LucideWrench, name: "Service providers" },
  { icon: LucidePalette, name: "Creative pros" },
  { icon: LucideRocket, name: "Small businesses" },
];
}
