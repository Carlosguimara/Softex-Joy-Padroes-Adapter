import { IGalinha } from "./IGalinha";

export class Galinha implements IGalinha {
    
    cacarejar(): void {
        console.log('CÓCÓRICÓÓÓÓ!')
    }
    andar(): void {
        console.log('A Galinha está andando!')
    }
}