import { IPato } from "./IPato";

export class Pato implements IPato {
    
    grasnar(): void {
        console.log('QUACK QUACK');
    }
    voar(): void {
        console.log('O Pato está Voando!');
    }
}