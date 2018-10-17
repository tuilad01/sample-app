import { Component, OnInit } from '@angular/core';

import { Word } from '../../word';
import { Group } from '../../group';
import { Map } from '../../map';

import { WORDS } from '../../mock-word';
import { GROUPS } from '../../mock-group';
import { MAPS } from '../../mock-map';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  words: Word[] = WORDS;
  groups: Group[] = GROUPS;
  maps: Map[] = MAPS;

  selectedGroup: Group = new Group();
  constructor() { }

  ngOnInit() {
  }
  onClickGroup(group: Group) {
    if (!group) { return; }
    this.selectedGroup = group;
  }
}
