import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../models/blog.model';
import { DateFormatPipe } from '../../../pipes/date-format-pipe';
import { RouterLink } from '@angular/router';
import { LucideClock, LucideTag } from '@lucide/angular';

@Component({
  selector: 'app-blog-card',
  imports: [DateFormatPipe, RouterLink, LucideTag, LucideClock],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
  @Input() post!: BlogPost;
}
