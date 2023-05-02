import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreDocument,
         AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  constructor(public Firestore : AngularFirestore) { }


  createDocument<tipo>(data: tipo, enlace: string, id:string){
    const ref = this.Firestore.collection<tipo>(enlace);
    return ref.doc(id).set(data);

  }


  creatId(){
    return this.Firestore.createId();

  }


  deleteDoc(path: string, id: string) {
    const collection = this.Firestore.collection(path);
    return collection.doc(id).delete();
  }


  updateDoc(data: any, path: string, id: string) {
    const collection = this.Firestore.collection(path);
    return collection.doc(id).update(data);
  }


  getCollectionChange <tipo>(enlace: string): Observable <tipo[]>{
    const ref = this.Firestore.collection<tipo>(enlace);
    return ref.valueChanges();
  }

     getCollectionQuery<tipo>(path: string, parametro: string, condicion: any, busqueda: string) {
    const collection = this.Firestore.collection<tipo>(path, 
      ref => ref.where( parametro, condicion, busqueda));
    return collection.valueChanges();
  }

  
  getCollection<tipo>(path: string) {

    const collection = this.Firestore.collection<tipo>(path);
    return collection.valueChanges();
  }

  getDoc<tipo>(path: string, id: string) {
    return this.Firestore.collection(path).doc<tipo>(id).valueChanges()
   }

    



}
