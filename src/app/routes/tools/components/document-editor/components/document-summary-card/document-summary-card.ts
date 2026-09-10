import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { lucideBadgePercent, lucideBus, lucideChevronRight, lucidePercentCircle, lucideShip, lucideTicketPercent, lucideTruck } from '@ng-icons/lucide';

@Component({
  selector: 'app-document-summary-card',
  imports: [NgIcon],
  templateUrl: './document-summary-card.html',
  styleUrl: './document-summary-card.css',
})
export class DocumentSummaryCard {
  public lucideBadgePercent = lucideBadgePercent;
  public lucideTruck = lucideTruck;
  public lucideTicketPercent = lucideTicketPercent
  public lucideChevronRight = lucideChevronRight;
}
