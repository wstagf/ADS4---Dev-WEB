class AnimalModel {
    id: number | undefined;
    idade: number | undefined;
    raca: string | undefined;
    estaVivo: boolean | undefined;
    peso: number | undefined;
    comidasQueGosta: { nome: string; }[] | undefined; 
}

export default AnimalModel;