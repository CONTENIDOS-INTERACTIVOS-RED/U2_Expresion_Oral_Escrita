<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Lenguaje corporal y su impacto en la comunicación pedagógica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-lg-2
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") La interacción en el aula no se limita a la transmisión verbal de conocimientos. El lenguaje corporal cumple un papel fundamental en la enseñanza, ya que complementa el mensaje hablado y fortalece la conexión con los estudiantes. Cada gesto, postura y movimiento aporta significado al discurso, generando confianza, atención y mayor comprensión. La educación no solo depende de lo que se dice, sino también de cómo se expresa a través del cuerpo.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La comunicación pedagógica exige el uso consciente de señales no verbales para reforzar la explicación de contenidos y transmitir seguridad. La posición del cuerpo, el contacto visual y la gesticulación influyen en la percepción del mensaje. Un docente que maneja estos elementos con precisión logra captar la atención de su audiencia y crear un ambiente de aprendizaje más dinámico.
        .bg-color-18.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El dominio del lenguaje corporal en la enseñanza requiere desarrollar habilidades específicas. Comprender la función de las partes blandas de la comunicación, utilizar adecuadamente las manos para enfatizar ideas y gestionar la postura corporal permiten mejorar la expresión. La administración de los movimientos superiores del cuerpo y la elección de posiciones estratégicas en el aula fortalecen la interacción con los estudiantes.
    
    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.text-white.mt-5 El estudio de este tema proporciona herramientas para optimizar la enseñanza a través de la comunicación no verbal. Analizar la influencia del cuerpo en el proceso educativo permite potenciar la expresividad y generar mayor impacto en la transmisión del conocimiento. Un docente que integra estos recursos de manera efectiva transforma la dinámica del aula, promoviendo un ambiente participativo y estimulante.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Partes blandas de la comunicación

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") El lenguaje corporal complementa la comunicación verbal y facilita la transmisión efectiva de un mensaje. Dentro de esta dimensión, las partes blandas de la comunicación se refieren a elementos sutiles del cuerpo que transmiten información de manera inconsciente. Incluyen microexpresiones faciales, movimientos de cabeza, postura, respiración y otras señales que influyen en la percepción del mensaje sin necesidad de palabras (Irigoyen Chamizo, 2019).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-15.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En el ámbito educativo, el lenguaje no verbal influye en la autoridad del docente, su conexión con los estudiantes y la claridad del mensaje. La expresión facial puede reforzar el significado de una explicación, mientras que una postura abierta y relajada genera un ambiente de confianza. Según estudios sobre comunicación no verbal, los gestos y microexpresiones son esenciales para mantener el interés y facilitar la comprensión del contenido (Cestero, 2018)

    p.mb-4 Los elementos principales de las partes blandas de la comunicación son: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-lg-1
              h5 Microexpresiones faciales
              p Movimientos involuntarios del rostro que reflejan emociones genuinas. Un docente que suena mientras explica genera un ambiente de confianza.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-lg-1
              h5 Postura corporal
              p La manera en que se sostiene el cuerpo transmite mensajes de seguridad o inseguridad. Permanecer erguido y con los hombros relajados proyecta confianza y autoridad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-lg-1
              h5 Contacto visual
              p Mirar a los estudiantes al hablar refuerza la interacción y evita distracciones. Un docente que no mantiene contacto visual puede parecer distante o desinteresado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-lg-1
              h5 Respiración controlada
              p Un ritmo respiratorio estable ayuda a mantener la calma y proyectar seguridad. La respiración entrecortada puede indicar nerviosismo y afectar la proyección de la voz.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Uso de las manos en la exposición

    p.mb-4 Las manos son una extensión del lenguaje verbal y permiten enfatizar conceptos, estructurar ideas y mantener la atención del público. Su uso mejora la comunicación y refuerza la expresividad del docente. Según investigaciones en oratoria, los gestos bien dirigidos aportan claridad y persuasión al mensaje (El Poder de la Oratoria, s.f). Las funciones del uso de las manos en la comunicación pedagógica son:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Énfasis y refuerzo del mensaje
              p.mb-0 Los movimientos de manos pueden resaltar palabras clave o ideas principales. 

      .col-lg-6.mb-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Organización del discurso
              p.mb-0 Apuntar hacia una dirección específica ayuda a ordenar visualmente la información.
    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Interacción con los estudiantes
              p.mb-0 Usar las manos para señalar a la audiencia involucra a los oyentes y genera mayor conexión.

      .col-lg-6.mb-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Generación de confianza
              p.mb-0 Movimientos abiertos y fluidos proyectan seguridad y credibilidad.

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-3.mb-lg-0.pe-lg-0
        .bg-color-14.p-4(data-aos="fade-left").h-100
          h5 Errores comunes en el uso de las manos:
          p ❌ <b>Movimientos excesivos:</b> pueden distraer a la audiencia y restablecer claridad al mensaje. 
          p ❌ <b>Manos rígidas o escondidas:</b> comunican nerviosismo y reducen el impacto del mensaje. 
          p ❌ <b>Gestos contradictorios:</b> expresiones incoherentes con el discurso pueden generar confusión en los estudiantes.


      .col-lg-6.mb-3.mb-3.mb-lg-0.ps-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          h5 Estrategias para optimizar el uso de las manos
          p ✅ <b>Gestos abiertos y naturales:</b> movimientos suaves y controlados ayudan a transmitir confianza. 
          p ✅ <b>Posición neutral de las manos:</b> mantenerlas a la altura del torso facilita la fluidez del gesto. 
          p ✅ <b>Ritmo y sincronización:</b> la gesticulación debe acompañar el discurso sin adelantarse ni retrasarse.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Administración superior del cuerpo

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El lenguaje corporal no solo complementa la comunicación verbal, sino que también proyecta seguridad, confianza y autoridad. En el ámbito educativo, la administración superior del cuerpo incluye la postura, el contacto visual y los movimientos estratégicos, elementos fundamentales para la enseñanza efectiva.
        p(data-aos="fade-left") El docente es un comunicador constante, y su cuerpo debe estar alineado con su mensaje. Un educador que domina su expresión corporal genera mayor impacto en sus estudiantes y refuerza el contenido impartido. Según Irigoyen Chamizo (2019), la postura y el control del cuerpo influyen en la percepción de la autoridad y la seguridad del docente. Los elementos clave en la administración del cuerpo son:
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/16.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Postura corporal") Un cuerpo erguido proyecta confianza y liderazgo. Mantener los hombros relajados y evitar cruzar los brazos crea una imagen abierta y receptiva.
          p(numero="2" titulo="Movimientos controlados") Caminar estratégicamente en el aula evita la monotonía y mantiene la atención de los estudiantes. Es recomendable desplazarse con pausas naturales en puntos clave del discurso.
          p(numero="3" titulo="Gesticulación equilibrada") Los movimientos deben ser amplios, pero no excesivos. Las manos y los brazos ayudan a enfatizar ideas, pero su uso debe ser consciente.
          p(numero="4" titulo="Expresión facial") La cara es un reflejo de las emociones. Un docente debe controlar sus expresiones para transmitir entusiasmo y claridad, evitando gestos que indiquen nerviosismo o desinterés.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Posiciones del cuerpo y su significado

    p La posición corporal influye en la percepción del mensaje y en la interacción con los estudiantes. Cada postura proyecta una emoción o intención, por lo que es necesario adoptar posiciones que refuercen la enseñanza y promuevan la confianza en el aula.

    p.mb-4 Las investigaciones en comunicación han demostrado que la postura de un hablante afecta la recepción del mensaje. Según Cestero (2018), una postura firme con los pies alineados transmite seguridad, mientras que una postura encorvada puede proyectar inseguridad. Los tipos de posiciones y su interpretación en el aula son: 

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Posición firme y erguida
                p.text-center Indica autoridad y control del entorno. Es ideal para momentos de exposición de contenido teórico. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Posición relajada con movimientos naturales
                p.text-center Transmite cercanía y accesibilidad, favoreciendo la interacción con los estudiantes. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Posición inclinada hacia el interlocutor
                p.text-center Denota interés y atención, útil durante sesiones de preguntas y respuestas. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Brazos cruzados o manos en los bolsillos
                p.text-center Puede proyectar desinterés o actitud defensiva, por lo que debe evitarse en el aula. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pies demasiado juntos o cerrados
                p.text-center Puede reflejar la timidez, lo que puede restarle autoridad al docente.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema2/17.png', alt='') 

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Lenguaje facial

    p.mb-4 El lenguaje facial es una de las formas más expresivas de la comunicación no verbal. La cara transmite emociones, intenciones y reacciones, complementando el mensaje verbal y facilitando la interacción en el aula. En el ámbito pedagógico, el rostro del docente no solo refleja su estado emocional, sino que también influye en la percepción que los estudiantes tienen de la información impartida. Según Irigoyen Chamizo (2019), la expresión facial es clave en la enseñanza, pues permite estimular el diálogo y regular el flujo comunicativo. Los elementos clave del lenguaje facial son: 

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/22.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Expresión emocional
                p.mb-0 La cara refleja alegría, interés, sorpresa o preocupación, lo que puede motivar o desmotivar a los estudiantes.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/23.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Contacto visual
                p.mb-0 Mirar a los estudiantes fortalece la conexión y muestra disposición para la comunicación.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/24.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Apertura de gestos
                p.mb-0 Una sonrisa o una ceja levantada pueden reforzar un mensaje y facilitar la comprensión.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/25.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Control de la expresión
                p.mb-0 Evitar gestos que puedan transmitir desinterés, aburrimiento o nerviosismo.

    .bg-full-width.bg-color-8
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/26.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white El uso adecuado de la expresión facial potencia la claridad del mensaje. Un docente que expresa entusiasmo con el rostro genera mayor interés en la materia. La falta de gesticulación, por el contrario, puede hacer que una clase parezca monótona y desmotivadora. Según Grau Olivares, Gordillo León y López Pérez (2016), la cara es la principal fuente de transmisión de emociones en la comunicación no verbal.
    
    .bg-full-width.bg-color-14.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Lenguaje corporal y su impacto en la comunicación pedagógica
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Lenguaje corporal y su impacto en la comunicación pedagógica, donde se aborda el papel del cuerpo como herramienta clave en la enseñanza. Este material ofrece #[strong ejercicios prácticos, observaciones reflexivas y recomendaciones aplicadas] sobre expresiones faciales, posturas, gestos y uso del espacio, con el fin de mejorar la comunicación docente en el aula.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Lenguaje corporal y su impacto en la comunicación pedagógica.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/27.png', alt='')
    
    .row.mb-5.align-items-center
      .col-lg-2.order-lg-2
        img(src="@/assets/curso/tema2/28.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p.mb-0 El estudio del <b>lenguaje corporal</b> ha permitido comprender el impacto de los gestos, posturas y expresiones faciales en la comunicación pedagógica. No solo el contenido verbal define la enseñanza, sino también la forma en que se transmite a través del cuerpo y la voz. Un docente que administra adecuadamente su expresión corporal influye en la percepción del mensaje y la interacción con los estudiantes, fortaleciendo la confianza y la comprensión. Los elementos clave en la comunicación no verbal son: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/29.png")
            .col-lg-7
              h5 Partes blandas de la comunicación
              p Microexpresiones, contacto visual y movimientos sutiles refuerzan la conexión con los estudiantes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/30.png")
            .col-lg-7
              h5 Uso de las manos
              p Complementa el mensaje verbal, aporta claridad y estructura el discurso. Un mal manejo puede distraer.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/31.png")
            .col-lg-7
              h5 Administración corporal
              p Postura, posición en el aula y desplazamiento influyen en la percepción de autoridad y confianza.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/32.png")
            .col-lg-7
              h5 Posiciones del cuerpo
              p Una postura erguida proyecta seguridad, mientras que una cerrada transmite inseguridad o desinterés.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/33.png")
            .col-lg-7
              h5 Lenguaje facial
              p Expresión del rostro regula la interacción y puede fomentar o desmotivar la participación estudiantil.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/34.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p Equilibrio entre movilidad y control corporal: 
        .bg-color-10.px-5.py-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Un docente <b>demasiado estático</b> puede perder la atención del grupo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Un <b>exceso de movimiento</b> puede generar distracción o inquietud.  
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 La postura debe transmitir <b>seguridad y accesibilidad,</b> evitando posiciones cerradas o encorvadas.
        .bg-color-6.px-5.py-4.mb-3(data-aos="fade-left")
          p.mb-0 El <b>lenguaje corporal</b> es clave en la enseñanza. Dominar la postura, los gestos y la expresión facial optimiza la presencia del docente y fortalece su comunicación con los estudiantes. Aplicar estas herramientas en el aula mejora la interacción, potencia el aprendizaje y transforma la enseñanza en una experiencia más dinámica y enriquecedora.

    .bg-full-width.bg-color-14.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Aplicación de las técnicas de expresión en la enseñanza
            p.mb-4(data-aos="fade-right") Se invita a leer el documento #[strong Aplicación de las técnicas de expresión en la enseñanza], en el que se exploran estrategias clave para mejorar la comunicación en el aula. Se presentan técnicas efectivas para integrar el lenguaje verbal y corporal, evitar errores comunes en la expresión oral y controlar el nerviosismo al hablar en público

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicación de las técnicas de expresión en la enseñanza
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/35.png', alt='')


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes aspectos es clave para una correcta proyección de la voz en la enseñanza? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Hablar sin pausas para evitar interrupciones ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mantener un tono de voz bajo para generar cercanía ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Controlar la respiración y utilizar el diafragma ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Usar un volumen monótono para evitar distracciones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La proyección de la voz se optimiza al controlar la respiración y emplear el diafragma, lo que permite mayor claridad y resistencia al hablar por períodos prolongados.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es la función principal de la técnica de la N en la oratoria? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Mejorar la articulación de las palabras y evitar sonidos imprecisos ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Acelerar la velocidad del discurso para hacerlo más dinámico ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Reducir la necesidad de pausas al hablar ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Modificar la entonación para enfatizar emociones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La técnica de la N es utilizada para mejorar la pronunciación y la claridad del discurso, ayudando a evitar sonidos imprecisos o confusos.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué elemento del lenguaje corporal es clave para reforzar el mensaje verbal en una exposición? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Mantener las manos en los bolsillos para transmitir seguridad ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Utilizar gestos y movimientos de las manos con intención ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: ') Evitar el contacto visual con los estudiantes ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Hablar sin mover el cuerpo para evitar distracciones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El uso adecuado de las manos refuerza el mensaje verbal, facilitando la comprensión y brindando mayor dinamismo a la exposición.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre el paralenguaje es correcta? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Se refiere únicamente a las palabras utilizadas en el discurso ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Incluye aspectos como el tono de voz, la velocidad y las pausas ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'No tiene impacto en la comunicación pedagógica ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Solo es relevante en discursos políticos, no en la enseñanza',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El paralenguaje abarca elementos como el tono, la velocidad y la intensidad de la voz, siendo fundamental para transmitir emociones y captar la atención del estudiante.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Por qué es importante la postura corporal en el proceso de enseñanza? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Porque transmite confianza y refuerza la autoridad del docente ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Porque permite que los estudiantes se mantengan en silencio ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Porque evita que los docentes necesiten hacer pausas en su discurso ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Porque el lenguaje corporal no influye en la comunicación pedagógica',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Una postura corporal adecuada refleja seguridad y autoridad, lo que facilita la comunicación con los estudiantes y mejora la efectividad del mensaje transmitido',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
