export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Elementos de la oratoria en la pedagogía',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos del lenguaje verbal en la expresión oral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Volumen y proyección de la voz',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnica de la N',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Dicción y pronunciación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Pausa sonora y ritmo del discurso',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Fuerza y composición del mensaje',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Fonología y tono',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lenguaje corporal y su impacto en la comunicación pedagógica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Partes blandas de la comunicación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Uso de las manos en la exposición',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Administración superior del cuerpo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Posiciones del cuerpo y su significado',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5 ',
            titulo: 'Lenguaje facial',
            hash: 't_2_5 ',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ballenato Prieto, G. (2013). Hablar en público: arte y técnica de la oratoria: (ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/114680',
    },
    {
      referencia: 'Yagosesky, R. (sf). El poder de la oratoria . [PDF]. ',
      link: 'https://www.academia.edu/41330266/EL_PODER_DE_LA_ORATORIA  ',
    },
    {
      referencia:
        'Artesero García, M. (2017). El don de la palabra: pierde miedo a hablar en público. Manual práctico de oratoria: (ed.). Editorial Tébar Flores. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51987 ',
    },
    {
      referencia:
        'Grau Olivares, M. Gordillo León, F. & López Pérez, R. M. (2016). Comportamiento no verbal: más allá de la comunicación y el lenguaje: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115592',
    },
    {
      referencia:
        'Irigoyen Chamizo, C. (2019). Estudio del lenguaje que los maestros de primaria utilizan en el aula. Universidad de Oviedo. ',
      link:
        'https://repositorio.unican.es/xmlui/bitstream/handle/10902/17655/IrigoyenChamizoCarmen.pdf?sequence=1&isAllowed=y ',
    },
  ],
  glosario: [
    {
      termino: 'Lenguaje corporal',
      significado:
        'conjunto de gestos, posturas y movimientos que complementan la comunicación verbal.',
    },
    {
      termino: 'Expresión facial',
      significado:
        'manifestación de emociones a través del rostro, fundamental en la interacción comunicativa.',
    },
    {
      termino: 'Postura',
      significado:
        'posición del cuerpo que refleja actitudes, emociones y estados de ánimo.',
    },
    {
      termino: 'Gesticulación',
      significado:
        'uso de movimientos de las manos y brazos para enfatizar el mensaje verbal.',
    },
    {
      termino: 'Contacto visual',
      significado:
        'interacción visual entre emisor y receptor que refuerza la comunicación y la confianza.',
    },
    {
      termino: 'Proxémica',
      significado:
        'estudio del uso del espacio en la comunicación y su impacto en las relaciones interpersonales.',
    },
    {
      termino: 'Paralenguaje',
      significado:
        'elementos no verbales del habla, como el tono, ritmo y volumen de la voz.',
    },
    {
      termino: 'Dicción',
      significado:
        'claridad y precisión en la pronunciación de palabras para una mejor comprensión.',
    },
    {
      termino: 'Entonación',
      significado:
        'variación del tono de voz que aporta significado y énfasis en el discurso.',
    },
    {
      termino: 'Ritmo del discurso',
      significado:
        'velocidad y fluidez con la que se transmite un mensaje oral.',
    },
    {
      termino: 'Técnica de la N',
      significado:
        'estrategia de vocalización para mejorar la resonancia y la proyección de la voz.',
    },
    {
      termino: 'Fuerza vocal',
      significado:
        'capacidad de proyectar la voz con potencia sin forzar las cuerdas vocales.',
    },
    {
      termino: 'Administración corporal',
      significado:
        'manejo consciente del cuerpo para mejorar la expresión y reforzar el mensaje oral.',
    },
  ],
}
