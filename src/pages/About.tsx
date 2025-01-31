function About() {
  return (
    <section className="section-layout flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col items-center w-3/4 gap-2">
        <h1 className="font-bold ">Hi! I'm Rafael</h1>
        <h2 className="font-normal text-center">
          Let me share a little about who I am and what I love doing.
        </h2>
      </div>

      <div className="w-3/4 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">
            When I first became interested in programming.
            {/* Quando comecei a me interessar por programação. */}
          </h3>

          <p className="text-lg text-white-normal/75 font-inter font-normal">
            After finishing school, I had to decide which course to pursue. Even
            though I had always liked computers, I chose to study civil
            engineering.
            {/* Ao terminar a escola, precisava decidir qual curso fazer e, mesmo
            sempre gostando de computador, optei por começar a cursar engenharia
            civil. */}
          </p>
          <p className="text-lg text-white-normal/75 font-inter font-normal">
            During the course, I took Algorithms I and II, and surprisingly,
            they opened my eyes to the world of programming.
            {/* Durante o curso tive uma matéria de algorítmos I e II e,
            inesperadamente, elas abriram meus olhos pro mundo da programação. */}
          </p>

          <p className="text-lg text-white-normal/75 font-inter font-normal">
            I graduated in engineering and soon after began studying Systems
            Analysis and Development.
            {/* Me formei em engenharia e logo após comecei a cursar Análise e
            Desenvolvimento de Sistemas. */}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">
            The leap to web development.
            {/* O salto para o desenvolvimento web. */}
          </h3>

          <p className="text-lg text-white-normal/75 font-inter font-normal">
            At the beginning of my new degree, I started exploring various
            career paths and taking additional courses.
            {/* No começo da nova faculdade, já comecei a explorar áreas de atuação
            e fazer cursos paralelos. */}
          </p>
          <p className="text-lg text-white-normal/75 font-inter font-normal">
            Due to my passion for visual expression and design, I naturally
            became interested in front-end development and began focusing on it.
            {/* Devido ao meu gosto por expressão visual e design, naturalmente me
            interessei e comecei a focar em desenvolvimento front-end. */}
          </p>
          <p className="text-lg text-white-normal/75 font-inter font-normal">
            Along with my college courses, I started studying HTML, CSS, and
            JavaScript, and by the end of my first semester (December 2020), I
            was accepted into an internship selection process.
            {/* Então, além das matérias da faculdade, comecei a estudar HTML, CSS,
            Javascript e, no final do primeiro semestre do curso (Dezembro -
            2020), passei em um processo seletivo para um estágio. */}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">
            What I’m doing now.
            {/* O que estou fazendo agora. */}
          </h3>

          <p className="text-lg text-white-normal/75 font-inter font-normal">
            Currently, I work as a front-end developer at Nasajon, where I help
            create a design system, define software architecture standards, and
            develop some really cool projects.
            {/* Atualmente estou trabalhando como desenvolvedor front-end na
            Nasajon, colaborando na criação de design system, definindo padrões
            de arquitetura de software e desenvolvendo coisas bem legais. */}
          </p>
          <p className="text-lg text-white-normal/75 font-inter font-normal">
            In my free time, I enjoy learning about both front-end and back-end
            technologies, playing video games with friends, and spending time
            with my family.
            {/* No meu tempo livre, gosto de estudar tecnologias frontend e backend,
            jogar video-game com amigos e passar tempo com minha família. */}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-lg text-white-normal/75 font-inter font-normal">
            Thank you for reading this far and for visiting my portfolio.
            {/* Obrigado por ler até aqui e por visitar meu portfólio. */}
            <br />
            Best regards!
            {/* Forte abraço! */}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
