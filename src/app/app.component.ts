import { Component } from '@angular/core';
import { DoneModel } from './models/doneModel';
import { UnDoneModel } from './models/unDoneModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTodoApp';

  unDoneList:UnDoneModel[]=[];
  doneList:DoneModel[]=[]
  // unDoneInput:string=''

  addUnDoneItem(inputRef:HTMLInputElement){
    // console.log(inputRef)
    
    let unDoneItem=new UnDoneModel();
    unDoneItem.date=Date();
    unDoneItem.title=inputRef.value

    this.unDoneList.push(unDoneItem)
    inputRef.value=""
  }

  addDoneList(unDone:UnDoneModel){
    const index=this.unDoneList.indexOf(unDone)
    this.unDoneList.splice(index,1)

    this.doneList.push(unDone)
  }

  deleteTask(unDone:UnDoneModel){
    const index=this.unDoneList.indexOf(unDone)
    this.unDoneList.splice(index,1)
  }
returnUnDoneList(done:DoneModel){
  const index=this.unDoneList.indexOf(done)
  this.doneList.splice(index,1)

  this.unDoneList.push(done)
}

}