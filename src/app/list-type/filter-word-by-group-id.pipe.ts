import { Pipe, PipeTransform } from '@angular/core';
import { Word } from '../word';
import { Group } from '../group';
import { Map } from '../map';

@Pipe({
  name: 'filterWordByGroupId'
})
export class FilterWordByGroupIdPipe implements PipeTransform {

  transform(arrWord: Word[], arrMap: Map[], groupId: number): Word[] {
    if (!arrWord || !arrMap || !groupId || arrWord.length < 1 || arrMap.length < 1 || groupId <= 0) {
      return [];
    }
    const wordIds = arrMap.filter(map => map.groupId === groupId).map(map => map.wordId);
    return arrWord.filter(word => wordIds.includes(word.id));
  }

}
