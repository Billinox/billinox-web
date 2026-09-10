import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import {
  lucideChevronRight,
  lucideIdCard,
  lucideUsers,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-document-business-card',
  imports: [NgIcon, NgTemplateOutlet],
  templateUrl: './document-business-card.html',
  styleUrl: './document-business-card.css',
})
export class DocumentBusinessCard {
  public lucideIdCard = lucideIdCard;
  public lucideChevronRight = lucideChevronRight;
  public lucideUsers = lucideUsers;
}
