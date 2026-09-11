// ==========================================
// CONECTA ACESSO
// SCRIPT PRINCIPAL
// ==========================================


// ==========================================
// CAPACITAÇÃO
// ==========================================

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


// ==========================================
// DOAÇÃO DE EQUIPAMENTOS
// ==========================================

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


// ==========================================
// MAPA DE PONTOS DE ACESSO
// ==========================================

// Verifica se o Leaflet e o elemento do mapa
// estão disponíveis antes de iniciar.

if (
    typeof L !== "undefined" &&
    document.getElementById("map")
) {

    // ======================================
    // CRIAÇÃO DO MAPA
    // ======================================

    const map = L.map("map").setView(
        [-23.4205, -51.9331],
        13
    );    


    // ======================================
    // MAPA BASE - OPENSTREETMAP
    // ======================================

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,

            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(map);


    // ======================================
    // PONTOS DE ACESSO
    // ======================================

    const pontos = [

        {
            nome: "Escola Municipal",
            endereco: "Zona 7 - Maringá/PR",
            tipo: "Computadores + internet",
            computadores: 12,
    
            coordenadas: [
                -23.4205,
                -51.9331
            ],
    
            cor: "#36d89a"
        },
    
    
        {
            nome: "Biblioteca Municipal",
            endereco: "Centro - Maringá/PR",
            tipo: "Internet + capacitação",
            computadores: 8,
    
            coordenadas: [
                -23.4253,
                -51.9386
            ],
    
            cor: "#e4c44f"
        },
    
    
        {
            nome: "UBS Digital",
            endereco: "Vila Operária - Maringá/PR",
            tipo: "Acesso a serviços públicos",
            computadores: 5,
    
            coordenadas: [
                -23.4148,
                -51.9270
            ],
    
            cor: "#ef6666"
        },
    
    
        {
            nome: "Escola Comunitária",
            endereco: "Jardim Alvorada - Maringá/PR",
            tipo: "Internet + computadores",
            computadores: 10,
    
            coordenadas: [
                -23.3985,
                -51.9450
            ],
    
            cor: "#36d89a"
        },
    
    
        {
            nome: "Biblioteca Digital",
            endereco: "Zona 4 - Maringá/PR",
            tipo: "Internet + capacitação",
            computadores: 15,
    
            coordenadas: [
                -23.4268,
                -51.9275
            ],
    
            cor: "#36d89a"
        },
    
    
        {
            nome: "UBS Digital",
            endereco: "Jardim Alvorada - Maringá/PR",
            tipo: "Serviços públicos digitais",
            computadores: 6,
    
            coordenadas: [
                -23.3970,
                -51.9355
            ],
    
            cor: "#e4c44f"
        }
    
    ];    


    // ======================================
    // FUNÇÃO PARA CRIAR ÍCONE
    // ======================================

    function criarIcone(cor) {

        return L.divIcon({

            className: "custom-marker",

            html: `
                <div style="
                    width: 22px;
                    height: 22px;
                    background: ${cor};
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow:
                        0 2px 8px rgba(0,0,0,.4);
                "></div>
            `,

            iconSize: [
                22,
                22
            ],

            iconAnchor: [
                11,
                11
            ]

        });

    }


    // ======================================
    // ADICIONA OS MARCADORES
    // ======================================

    pontos.forEach(function(ponto) {

        const icone =
            criarIcone(ponto.cor);


        const marcador =
            L.marker(
                ponto.coordenadas,
                {
                    icon: icone
                }
            )
            .addTo(map);


        // ==================================
        // POPUP
        // ==================================

        marcador.bindPopup(`

            <div class="map-popup">

                <h3>
                    ${ponto.nome}
                </h3>

                <p>
                    📍 ${ponto.endereco}
                </p>

                <p>
                    💻 ${ponto.tipo}
                </p>

                <p>
                    🖥️ ${ponto.computadores}
                    computadores disponíveis
                </p>

            </div>

        `);

    });


    // ======================================
    // AJUSTA O MAPA PARA MOSTRAR TODOS
    // OS PONTOS
    // ======================================

    const coordenadas =
        pontos.map(function(ponto) {

            return ponto.coordenadas;

        });


    const limites =
        L.latLngBounds(coordenadas);


    map.fitBounds(limites, {

        padding: [
            40,
            40
        ]

    });


    // ======================================
    // CORRIGE O TAMANHO DO MAPA
    // ======================================

    setTimeout(function() {

        map.invalidateSize();

    }, 300);

}