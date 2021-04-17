import { Component, OnInit, Input } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css'],
})
export class MiniCardComponent implements OnInit {
  @Input() titleCard: string;
  @Input() typeCard: string;
  elementList: Array<any> = [];

  constructor(
    private _projectService: ProjectService,
    private _organizactionService: OrganizationService
  ) {}

  ngOnInit(): void {
    this.getElements();
  }

  getElements() {
    if (this.typeCard == 'projects') {
      this._projectService.getProjects().subscribe(
        (data) => {
          this.elementList = data;
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this._organizactionService.getOrganizations().subscribe(
        (data) => {
          this.elementList = data;
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
