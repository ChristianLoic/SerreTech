export interface Serre {
  idSerre: number;
  description: string;
  humiditeSol:number;
  humiditeAir: number;
  luminosite:number;
  temperature:number;
  idProfil: number;
}

export const serres = [
  {
    idSerre: 1,
    description: 'banane',
    humiditeAir: 20,
    humiditeSol:30,
    temperature:15,
    luminosite:10,
    idProfil: 1
  },
  {
    idSerre: 2,
    description: 'banane',
    humiditeAir: 25,
    humiditeSol:35,
    temperature:20,
    luminosite:15,
    idProfil: 1
  },
  {
    idSerre: 3,
    description: 'banane',
    humiditeAir: 27,
    humiditeSol:31,
    temperature:25,
    luminosite:14,
    idProfil: 2
  },
  {
    idSerre: 4,
    description: 'banane',
    humiditeAir: 24,
    humiditeSol:10,
    temperature:17,
    luminosite:40,
    idProfil: 2
  },
  {
    idSerre: 5,
    description: 'brocoli',
    humiditeAir: 21,
    humiditeSol:23,
    temperature:11,
    luminosite:14,
    idProfil: 2
  },
  {
    idSerre: 6,
    description: 'brocoli',
    humiditeAir: 12,
    humiditeSol:54,
    temperature:23,
    luminosite:34,
    idProfil: 2
  },
  {
    idSerre: 7,
    description: 'brocoli',
    humiditeAir: 52,
    humiditeSol:45,
    temperature:32,
    luminosite:98,
    idProfil: 3
  },
  {
    idSerre: 8,
    description: 'peche',
    humiditeAir: 19,
    humiditeSol:27,
    temperature:43,
    luminosite:5,
    idProfil: 3
  },
  {
    idSerre: 9,
    description: 'peche',
    humiditeAir: 11,
    humiditeSol:12,
    temperature:13,
    luminosite:14,
    idProfil: 3
  },
  {
    idSerre: 10,
    description: 'peche',
    humiditeAir: 65,
    humiditeSol:34,
    temperature:23,
    luminosite:76,
    idProfil: 3
  }
];
