import { Negociacao, MeuObjeto } from './index';
import { logarTempoDeExecucao } from '../helpers/decorators/index';

export class Negociacoes implements MeuObjeto<Negociacoes>{

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

    ehIgual(negociacoes: Negociacoes): boolean {

        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}
