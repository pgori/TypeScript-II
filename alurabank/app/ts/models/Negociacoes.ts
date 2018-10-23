import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';
import { logarTempoDeExecucao } from '../helpers/decorators/index';

export class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    @logarTempoDeExecucao()
    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    @logarTempoDeExecucao()
    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }
}
