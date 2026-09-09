function mostrarCurso(tipo) {

    const resultado =
        document.getElementById("cursoResultado");

    let titulo = "";
    let conteudo = "";

    if (tipo === "gov") {

        titulo = "🏛️ Capacitação Gov.br";

        conteudo =
        "Aprenda a acessar serviços públicos digitais, " +
        "criar sua conta e utilizar recursos disponíveis.";

    }

    if (tipo === "curriculo") {

        titulo = "💼 Currículo Digital";

        conteudo =
        "Aprenda a criar um currículo, organizar " +
        "suas experiências e procurar oportunidades.";

    }

    if (tipo === "pix") {

        titulo = "💰 PIX com segurança";

        conteudo =
        "Aprenda boas práticas para utilizar o PIX, " +
        "evitar golpes e proteger suas informações.";

    }

    if (tipo === "internet") {

        titulo = "🔎 Internet básica";

        conteudo =
        "Aprenda a utilizar navegador, pesquisa, " +
        "e-mail e ferramentas básicas da internet.";

    }

    resultado.innerHTML = `
        <h3>${titulo}</h3>

        <p>
            ${conteudo}
        </p>

        <strong>
            Curso demonstrativo.
        </strong>
    `;

    resultado.scrollIntoView({
        behavior: "smooth"
    });

}


function registrarDoacao() {

    const equipamento =
        document.getElementById("equipamento").value;

    const resultado =
        document.getElementById("doacaoResultado");

    if (equipamento === "") {

        resultado.innerHTML = `
            <p>
                ⚠️ Selecione um equipamento.
            </p>
        `;

        return;
    }

    resultado.innerHTML = `
        <div class="success">

            <h3>
                💚 Obrigado!
            </h3>

            <p>
                Seu interesse em doar
                <strong>${equipamento}</strong>
                foi registrado.
            </p>

            <small>
                Demonstração educacional.
            </small>

        </div>
    `;

}