import { Component, OnInit } from '@angular/core';
import { EncounterService } from './encounter.service';
import {IEncounter} from './encounter';
import {IResponse} from './response';
import {IReport} from './report';

/**
 * This class represents the lazy loaded EncounterComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-encounter',
  templateUrl: 'encounter.component.html',
  styleUrls: ['encounter.component.css'],
})
export class EncounterComponent implements OnInit {

  //newName: string = '';
  errorMessage: string;


    pageTitle: string = 'Prelim Reports';
   // errorMessage: string;
    httpStatus: string;
    batchId: string;
    providerId: string;
    dataFileGroupId: string;
    userName: string;
    caseNumber: string;
    jsxid: number;

    
    postUpdates: string;
   reportList: string[] = [];
    //reportObjects: string[] = [];
    /*
    newVarCostUpdates: IUpdate[] = [];
    updateObjects: IUpdate[] = [];
    update: IUpdate;

    outbound: IOutbound;
*/
    response: IResponse;
    encounters: IEncounter[] = [];

    confirmResponse:string = '';
    loading: boolean = false;
    override: boolean = false;
    attempt: boolean;
    updating: boolean = false;
    updatingError: boolean = false;

  

  /**
   * Creates an instance of the EncounterComponent with the injected
   * Encounter.
   *
   * @param {EncounterService} EncounterService - The injected Encounter.
   */
  constructor(public _encounterService: EncounterService) {this.loading = this._encounterService.loading;}

  /**
   * Get the encounters OnInit
   */
  ngOnInit() {
console.log('IN onInIt   this.encounters: ' + this.encounters);

console.log('IN onInIt   this.encounters stringify: ' + JSON.stringify(this.encounters));
     //this.loading=false;
    //    this.attempt=false;
    //    this.updating=false;
  }

  /**
   * Handle the EncounterService observable
   */
 /* getEncounters() {
    this.EncounterService.getEncounters()
      .subscribe(
        encounters => this.encounters = encounters,
        error => this.errorMessage = <any>error
      );
  }*/


onClickrefreshEncounterList(): void{

     console.log('Retrieving Encounters...');

          //  this.attempt= true;
          //  this.disableButtons();
            this.errorMessage = "";
          //  this.updating = false;
          this.encounters = [];
            
                if (this.dataFileGroupId && this.dataFileGroupId != null && this.dataFileGroupId!=""){
                
                this.loading = true;

                    this._encounterService.getEncounters(this.dataFileGroupId)
                    .subscribe(
                        response => this.encounters = response.encounterList,
                        //error => this.errorMessage = <any>error,
                        error => this.onRequestComplete("Get Encounters", error),
                        () => this.onRequestComplete("Get Encounters", "200"));
                }
                else{
                    alert('Please Enter a DataFileGroupId to in order to fetch files');
            
                }

            console.log('Leaving onClickrefreshBatchList this.loading: ' + this.loading);
            }

  onRequestComplete(action:any, result:any){
            console.log('ENTERING onRequestComplete  Action Performed: ' + action + '  Result: ' + result);
                if(action == "Get Encounters"){
                    if(result == "200")
                        {
                            this.loading = this._encounterService.loading;
                           // this.canEnableButtons();
                        }
                     else{
                          setTimeout(() => 
                            {
                            console.log("ERROR BRO");
                            this.errorMessage = result;
                            this.loading = false;
                          //  this.showErrorDialog(action, result);
                             },
                            1000);
                     }   

                    }
                else if(action == "Submit Encounters"){
                    if(result == "200")
                        {
                            //this.updating = false;
                            console.log("SUCCESS");
                         //   this.reinitialize();
                        }
                    else{
  //Timeout to ensure errorDialog reappears                          
                            setTimeout(() => 
                            {
                                console.log("ERROR BRO");
                                this.errorMessage = result;
                               // this.showErrorDialog(action, result);
                                //this.updating = false;
                            },
                            1000);
                    }

                }

        console.log("Loading?: " + this.loading);
        console.log("Error?: " + this.errorMessage);
        console.log("EncounterLength?: " + this.encounters.length);
        console.log("Encounters: " + JSON.stringify(this.encounters));
        console.log('LEAVING onRequestComplete');
        }




       makeTableScroll() {
            var maxRows = 20;

            var table: any = (<HTMLInputElement>document.getElementById('encountersTable')).value;
            var wrapper: any = (<HTMLInputElement>document.getElementById('encountersTable')).parentNode;
            //var wrapper = table.parentNode;
            var rowsInTable = table.rows.length;
            var height = 0;
            if (rowsInTable > maxRows) {
                for (var i = 0; i < maxRows; i++) {
                    height += table.rows[i].clientHeight;
                }
                wrapper.style.height = height + "px";
            }
        }

        onClickselectStandard(source:any){
            console.log('Select Standard Reports');
            this.reportList = [];
            this.reportList.push("326731","326732","326733","326736","326641","326642","326644","326645","326647","326648","326649","326650","326651","326652","326653","326654","326658","326659","326660","326661","326662","326667","326668","326669","326670","326671","326672","326673","326674","326675","326676","326677","326678","326679","326685","326686","326687","326496","326497","326498","326499","326500","326501","326739","326740","326741","326742","326744");
           
            console.log("Encounters[0]: " + JSON.stringify(this.encounters[0]));  
 

            var checkboxes = document.getElementsByTagName('input'); 
            for (var i = 0; i < checkboxes.length; i++)
            {
            if (checkboxes[i].type == 'checkbox'){
                if(this.encounters[i]){
                    if(this.encounters[i].standardReport ==="Y"){
                   
                    checkboxes[i].checked = true;
                    }
                    else{
                        checkboxes[i].checked = false;
                    }
                }
                
                }
            }
            
            console.log('Report List: ' + JSON.stringify(this.reportList));

        }

          onClickdeselectAll(source:any){
              console.log('DeSelect All');
            this.reportList = [];
            var checkboxes = document.getElementsByTagName('input');   
            for (var i = 0; i < checkboxes.length; i++)
            {
            if (checkboxes[i].type == 'checkbox')
            {
            checkboxes[i].checked = source.checked;
            }
            }

                console.log('Report List: ' + JSON.stringify(this.reportList));
        }

          onClickselectAll(source:any){
              console.log('Select All');
            this.reportList = [];
            this.reportList = [];
            var checkboxes = document.getElementsByTagName('input');   
            for (var i = 0; i < checkboxes.length; i++)
            {
            if (checkboxes[i].type == 'checkbox')
            {
            checkboxes[i].checked = !source.checked;
            }
            }

            
            for (var j = 0; j < this.encounters.length; j++){
                this.reportList.push(this.encounters[j].jsxid);
            }
            console.log('Report List: ' + JSON.stringify(this.reportList));
        }

        onToggleUpdate(jsxid:any, checked:any): void{
        console.log('Retry button clicked.  Identifier: ' + jsxid + '  Current value = ' + checked);
        

        if(checked == true){
        this.reportList.push(jsxid);
        console.log('retryObj: ' + this.reportList);
        console.log('stringify retryObj: ' + JSON.stringify(this.reportList));
        }
        else{

            for(var i = 0; i <  this.reportList.length; i++) {
                if( this.reportList[i] == jsxid) {
                     this.reportList.splice(i, 1);
                    break;
                    }
        }
          
          console.log('Report List: ' + JSON.stringify(this.reportList));
        }

        //this.canEnableButtons();    
    }

    onClickSubmit(): void{
        console.log('IN onClickSubmit - Reports to send:' + JSON.stringify(this.reportList));
   
    if(confirm('Are you sure you want to submit the selected reports and close the Prelim Reports App?')){

                this._encounterService.postReportList(this.reportList)
                .subscribe(
                    data => this.postUpdates = JSON.stringify(data), 
                    error => this.errorMessage = <any>error);

                    }
    }


  /**
   * Pushes a new name onto the encounters array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  /*
  addName(): boolean {
    // TODO: implement EncounterService.post
    this.encounters.push(this.newName);
    this.newName = '';
    return false;
  }*/

}
