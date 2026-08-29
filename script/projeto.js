document.addEventListener("DOMContentLoaded", function(){

    const tipo = document.getElementById("tipo");
    const objetivo = document.getElementById("objetivo");
    const estilo = document.getElementById("estilo");

    const titulo = document.getElementById("suggestionTitle");
    const texto = document.getElementById("suggestionText");

    function atualizarSugestao(){

        if(!tipo.value && !objetivo.value && !estilo.value){
            titulo.textContent = "O seu site começa aqui";

            texto.textContent =
                "Preencha o formulário e iremos apresentar uma sugestão baseada nas suas escolhas.";

            return;
        }

        let sugestao = "Recomendamos uma solução web ";

        if(tipo.value === "Loja"){
            sugestao += "com catálogo de produtos, área de compras e estrutura preparada para vendas.";
        }
        else if(tipo.value === "Portfolio"){
            sugestao += "visual, com destaque para trabalhos, projetos e informações pessoais.";
        }
        else if(tipo.value === "Blog"){
            sugestao += "organizada para publicação de artigos, notícias e conteúdos.";
        }
        else if(tipo.value === "Sistema"){
            sugestao += "interativa, com funcionalidades específicas e área de gestão.";
        }
        else if(tipo.value === "Institucional"){
            sugestao += "profissional, com apresentação da organização, serviços e contacto.";
        }
        else{
            sugestao += "personalizada de acordo com os seus objetivos.";
        }

        if(objetivo.value === "Vender"){
            sugestao += " Como o objetivo é vender, recomendamos dar destaque às chamadas para ação.";
        }
        else if(objetivo.value === "Comunidade"){
            sugestao += " Como pretende criar uma comunidade, recomendamos recursos de interação.";
        }
        else if(objetivo.value === "Gerir"){
            sugestao += " Como pretende gerir informações, recomendamos um dashboard.";
        }

        if(estilo.value === "Moderno"){
            sugestao += " O estilo moderno pode utilizar cards, animações suaves e elementos interativos.";
        }
        else if(estilo.value === "Simples"){
            sugestao += " Um design minimalista ajudará a manter o conteúdo claro.";
        }
        else if(estilo.value === "Profissional"){
            sugestao += " Um visual corporativo dará maior confiança aos utilizadores.";
        }
        else if(estilo.value === "Criativo"){
            sugestao += " Elementos visuais e animações podem tornar a experiência mais dinâmica.";
        }

        titulo.textContent = "A nossa sugestão";

        texto.textContent = sugestao;
    }

    tipo.addEventListener("change", atualizarSugestao);
    objetivo.addEventListener("change", atualizarSugestao);
    estilo.addEventListener("change", atualizarSugestao);

});