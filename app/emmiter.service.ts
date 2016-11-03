import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmmiterService{
   //almacen de eventos
   private static _emmiter:{[ID:string]:EventEmitter<any>}={} 
   
   //seteamos un nuevo evento en el almacen, con la key (ID)
   static get(ID:string):EventEmitter<any>{
      if(!this._emmiter[ID])
        this._emmiter[ID] = new EventEmitter();
        return this._emmiter[ID];
   }
}