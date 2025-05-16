const slides = [
    {
        title: "",
        count: "",
        thoughts: [""]
      },
    {
      title: "Feliz Aniversário 🎉",
      count: "Esse presente é uma forma de te mostrar o quanto você é importante pra mim, e o quanto te valorizo, e com isso, espero que se valorize mais",
      thoughts: ["Espero que você goste desse carinho", "Tudo aqui veio direto do coração"]
    },
    {
      title: "Coisas que você gosta",
      count: "Pensei em você 6 vezes",
      thoughts: ["Você ama Steven", "Harry Potter me lembrou você", "Crepúsculo"]
    },
    {
      title: "Coisas que eu gosto",
      count: "Pensei em você 4 vezes",
      thoughts: ["As musicas da laufey", "assistir um filme com você", "Ir ao cinema com você"]
    },
    {
      title: "Quando me senti bem",
      count: "Pensei em você 6 vezes",
      thoughts: ["Senti conforto", "Fiquei feliz do nada", "Sorri pensando em você"]
    },
    {
      title: "Quando fiquei confuso",
      count: "Pensei em você 26 vezes",
      thoughts: ["Te amo?", "Me senti idiota", "Senti ciúmes", "Fiquei paranóico"]
    },
    {
      title: "Saudades e carinho",
      count: "Pensei em você mais de 50 vezes",
      thoughts: ["Seu sorriso", "Seu abraço", "Você dormindo", "Queria segurar sua mão", "Senti saudades", "Quero que seja feliz", "Você é linda", "aiygiwgwy aiydiwdwy"]
    },
    {
        title: "Pensei em você mais vezes",
        count: "Muitas outras por sinal, isso é só uma fração dos ultimos 3 dias, e na real os numeros tão meio errados, a próxima pagina é tudo que anotei, com data e hora",
        thoughts: ["Te amo branquela", "obs: dps q vc ver isso eu vou apagar em"]
      }
  ];
  
  let currentSlide = 0;
  const title = document.getElementById("category-title");
  const count = document.getElementById("category-count");
  const list = document.getElementById("thoughts-list");
  const button = document.getElementById("next-button");
  
  function showSlide(index) {
    const slide = slides[index];
    title.textContent = slide.title;
    count.textContent = slide.count;
    list.innerHTML = "";
    list.classList.remove("show");
  
    setTimeout(() => {
      slide.thoughts.forEach(thought => {
        const li = document.createElement("li");
        li.textContent = thought;
        list.appendChild(li);
      });
      list.classList.add("show");
    }, 1000);
  }
  
  button.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      // Redireciona para a página com todas as mensagens
      window.location.href = "mensagens.html";
      return;
    }
    showSlide(currentSlide);
  });
const voltar = document.getElementById("voltar");
  
voltar.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      // Redireciona para a página com todas as mensagens
      window.location.href = "index.html";
      return;
    }
    showSlide(currentSlide);
  });
