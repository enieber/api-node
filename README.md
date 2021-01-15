# api-node

Este projeto tem como objetivo resolver alguns desafios propostos

## Desafios

- Uma imagem bitmap pode ser representada como uma matriz de dimensõesM x N, em que cada posição da matriz pode assumir um valor inteiro dentro de um intervalo. Construa um algoritmo que receba como entrada um VetorA[N]em que An ∈{ 0, 1, 2,..., 15 }.A saída do seu algoritmo deve ser uma String indicando a quantidade de vezes que cada Anfoi encontrado na matriz de bitmap. No caso em que algum elemento não tenha sido encontrado, o algoritmo deve retornar que a quantidade é zero para aquele elemento. O formato da String é livreUma imagem bitmap pode ser representada como uma matriz de dimensõesM x N, em que cada posição da matriz pode assumir um valor inteiro dentro de um intervalo. Construa um algoritmo que receba como entrada um VetorA[N]em que An ∈{ 0, 1, 2,..., 15 }.A saída do seu algoritmo deve ser uma String indicando a quantidade de vezes que cada Anfoi encontrado na matriz de bitmap. No caso em que algum elemento não tenha sido encontrado, o algoritmo deve retornar que a quantidade é zero para aquele elemento. O formato da String é livre

- Transforme o algoritmo anterior em uma API Rest. Você receberá como parâmetro uma lista com os valores deAn e deverá retornara saída do algoritmo no formato JSON.

- Desenvolva uma API que leia o arquivo de log acima e retorne as seguintes informações:
  
    Posição de Chegada,Código do Super-herói,Nome Super-herói,Quantidade de Voltas CompletadaseTempo Total de Prova.

  **Observações**

    - A primeira linha do arquivo pode ser desconsiderada (Cabeçalho).
    - A corrida termina quando o primeiro colocado completa 4 voltas.

## Desenvolver o projeto

Para desenvolver o projeto é necessario nodejs e npm.

- instalar dependendcias usando `yarn`
- rodar o server em modo dev usando `yarn dev`
- acessar em http://localhost:8080

## Endpoints

- Images

```
  POST: /images
  
  request:
  {
    "image": [[1, 2, 3], [4,5]]
  }
  
  response:
  {
    "message": "The image has 5 items of arrayBitmap"
  }
```

```
  POST: /images
  
  request:
  {
    "image": [
      [
        [8,6,4,4], [5,5,5,5],
        [5,5,5,5], [5,5,5,5]
      ],
      [
        [5,5,5,5], [5,5,5,5],
        [5,5,5,5], [5,5,5,5]
      ],
      [
        [5,5,5,5], [5,5,5,5],
        [5,5,5,5], [5,5,5,5]
      ],
      [
        [5,5,5,5], [5,5,5,5],
        [5,5,5,5], [5,5,5,5]
      ],
      [
        [5,5,5,5], [5,5,5,5],
        [5,5,5,5], [5,5,5,5]
      ],
      [
        [5,5,5,5], [5,5,5,5],
        [5,5,5,5], [5,5,5,5]
      ],
      [
        [5,5,5,5], [5,5,5,5],
        [5,5,5,5], [5,5,5,5]
      ],
      [
        [5,5,5,5], [5,5,5,5],
        [5,5,5,5], [5,5,5,5]
      ]
    ]
  }
  
  response:
  {
    "message": "The image has 128 items of arrayBitmap"
  }
```

- Heroes

```
  GET: /heroes
  
  request:
  {}
  
  response: {
    "herois": [
      {
        "position": 1,
        "superHero": "038–Superman",
        "time": "4:11.578",
        "finishRun": true,
        "hora": "23:52:17.003"
      },
      {
        "position": 2,
        "superHero": "002–Mercúrio",
        "time": "4:15.153",
        "finishRun": true,
        "hora": "23:52:22.120"
      },
      {
        "position": 3,
        "superHero": "033–Flash",
        "time": "4:16.08",
        "finishRun": true,
        "hora": "23:52:22.586"
      },
      {
        "position": 4,
        "superHero": "023–Sonic",
        "time": "4:17.722",
        "finishRun": true,
        "hora": "23:52:25.975"
      }
    ]
  }
  
  
```

## Insomnia

Para testar usando insomnia foi adicionado o arquivo insomnia.json, basta importar o arquivo no [insomnia](https://insomnia.rest/)

