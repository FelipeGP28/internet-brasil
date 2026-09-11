function mostrarCurso(tipo) {

    const resultado =
        document.getElementById("cursoResultado");

    let titulo = "";
    let conteudo = "";
    let link = ""; // 1. Variável criada para guardar a URL

    if (tipo === "gov") {

        titulo = "🏛️ Capacitação Gov.br";

        conteudo =
        "Aprenda a acessar serviços públicos digitais, " +
        "criar sua conta e utilizar recursos disponíveis.";

        link = "https://www.gov.br"; // Cole o link do curso de Gov aqui

    }

    if (tipo === "curriculo") {

        titulo = "💼 Currículo Digital";

        conteudo =
        "Aprenda a criar um currículo, organizar " +
        "suas experiências e procurar oportunidades.";

        link = "https://solides.com.br/blog/fazer-um-bom-curriculo/"; // Cole o link do curso de Currículo aqui

    }

    if (tipo === "pix") {

        titulo = "💰 PIX com segurança";

        conteudo =
        "Aprenda boas práticas para utilizar o PIX, " +
        "evitar golpes e proteger suas informações.";

        link = "https://oespecialista.safra.com.br/6-dicas-pix-seguranca/"; // Cole o link do curso de PIX aqui

    }

    if (tipo === "internet") {

        titulo = "🔎 Internet básica";

        conteudo =
        "Aprenda a utilizar navegador, pesquisa, " +
        "e-mail e ferramentas básicas da internet.";

        link = "https://www.firefox.com/pt-BR/more/what-is-a-browser/"; // Cole o link do curso de Internet aqui

    }

    // 2. HTML atualizado usando a variável ${link} na tag <a>
    resultado.innerHTML = `
        <h3>${titulo}</h3>

        <p>
            ${conteudo}
        </p>

        <a href="${link}" target="_blank">
            <strong>
                Curso demonstrativo.
            </strong>
        </a>
    `;

    resultado.scrollIntoView({
        behavior: "smooth"
    });

}