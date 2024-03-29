import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { IMember } from 'src/app/_models/imember';
import { MembersService } from 'src/app/_services/members.service';
import { GalleryModule, ImageItem, GalleryItem } from 'ng-Gallery'

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  standalone: true,
  styleUrls: ['./member-detail.component.css'],
  imports: [CommonModule, TabsModule, GalleryModule]
})
export class MemberDetailComponent implements OnInit {
  
  images: GalleryModule[] = [];
  member: IMember | undefined;

  constructor(private memberService: MembersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.loadMember();
  }

  loadMember(){
    const username = this.route.snapshot.paramMap.get("username");
    if(!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => {
        this.member = member;
        this.getImages();
      }
    });
  }

  getImages(){
    if(!this.member) return;
    for (const photo of this.member.photos){
      this.images.push(new ImageItem({ src: photo.url, thumb: photo.url}))
      this.images.push(new ImageItem({ src: photo.url, thumb: photo.url}))
    }
  }
}
