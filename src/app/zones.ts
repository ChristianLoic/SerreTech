export interface Zones {
  idZone: number;
  description: string;
  plantationDate: Date;
  typeFood: string;
  idSerre: number;
  luminosite: number;
  temperature: number;
  humiditeSol: number;
  humiditeAir: number;
}

export const zones = [
  {
    idZone: 1,
    description: 'banane bleu ',
    plantationDate: Date.now(),
    typeFood: 'fruit',
    idSerre: 1,
    luminosite: 4,
    temperature: 50,
    humiditeSol: 620,
    humiditeAir: 49,
  },
  {
    idZone: 2,
    description: Date.now(),
    plantationDate: 'banane rouge',
    typeFood: 'fruit',
    idSerre: 1,
    temperature: 84,
    humiditeSol: 18,
    humiditeAir: 81,
    luminosite:68 ,
  },
  {
    idZone: 3,
    description: Date.now(),
    plantationDate: 'brocoli vert',
    typeFood: 'legume',
    idSerre: 2,
    temperature: 84,
    humiditeSol: 18,
    humiditeAir: 81,
    luminosite:68 ,
  },
  {
    idZone: 4,
    description: Date.now(),
    plantationDate: 'brocoli rose',
    typeFood: 'legume',
    idSerre: 2,
    temperature: 84,
    humiditeSol: 18,
    humiditeAir: 81,
    luminosite:68 ,
  }
];
