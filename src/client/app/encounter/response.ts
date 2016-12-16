import {IEncounter} from './encounter';

export interface IResponse {
   jsxid: string
   providerId: string
   dataFileGroupId: string
   userName: string
   caseNumber: string
   encounterList: IEncounter[]
        
}

