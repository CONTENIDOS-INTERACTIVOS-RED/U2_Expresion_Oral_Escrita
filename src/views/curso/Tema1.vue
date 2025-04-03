<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Título tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este tipo de comunicación también implica el uso de herramientas que permiten establecer un diálogo fluido, basado en el respeto mutuo. La asertividad en el aula permite a los docentes corregir sin desmotivar, dar indicaciones con claridad y generar espacios de aprendizaje en los niños para que los niños se sientan seguros para participar activamente. En consecuencia, el desarrollo de esta habilidad es imprescindible para la enseñanza efectiva y la formación integral de los estudiantes (Ramos Ramos, 2016).
        p(data-aos="fade-left") Para comprender y aplicar la comunicación asertiva en la educación infantil, es necesario identificar sus principales elementos. Estos componentes permiten estructurar un mensaje efectivo, asegurando que la interacción sea clara, empática y adecuada al contexto educativo.
        p(data-aos="fade-left")  A continuación, se presentan los elementos clave de la comunicación asertiva en el ámbito escolar, organizados en un cuadro didáctico para facilitar su comprensión:

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Subtítulo tema

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
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
