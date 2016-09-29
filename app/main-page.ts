import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import {ObservableArray} from "data/observable-array";
import {Observable, PropertyChangeData} from "data/observable";
import {TabView} from "ui/tab-view";
import {isAndroid} from "platform"


// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
  // Get the event sender
  let page = <Page>args.object;
  let array = new ObservableArray();
  let observable = new Observable();
  observable.set("index", 0);
  observable.set("source", array);
  for(var i=0; i<500; i++){
    array.push({title:"title "+i});
  }
  page.bindingContext = observable;
}

//-----------------------workaround-------------------

// export function loadedTabView(args:EventData){
//   let tabview:TabView = <TabView>args.object;
//   console.log((<any>tabview)._viewPager);
//   if(isAndroid){
//     (<any>tabview)._viewPager.setOffscreenPageLimit(3);
//   }
// }