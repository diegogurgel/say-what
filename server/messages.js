const users = [
{
	"id":1,
	"user":"Helbert",
	"avatar":"account.png",
	"phrases":["Hruuf",
			"Esse Elói fez um rombo no país, deixa a Receita Federal pegar ele... Hruunnf...",
			"Esse Big enganou e menina de Uberaba, o que mais você pegou dela Big? Hruunnf...",
			"Eu dou é 8! Hruunnf"]
},
{
	"id":2,
	"user":"Carlos Elói",
	"avatar":"eloi.jpg",
	"phrases":["Say What?",
			"Altamente rebentável",
			"Me dê um R",
			"Acesso Daniel",
			"Demorated?",
			"My Brotdhar"]
},
{
	"id":3,
	"user":"Celeste",
	"avatar":"celeste.jpeg",
	"phrases":["Que bonitinho gente",
			"Amei!",
			"Meu sonho é mudar desse país.",
			"Não suporto motoqueiro",
			"TssshSiiiiimmm",
			"Essa mania de brasileiro...",
			"Como pode uma pessoa não gostar de cachorro gente?",
			"Lindo!"]
},
{
	"id":4,
	"user":"Diogo",
	"avatar":"account.png",
	"phrases":["Enfim...",
			"Mas isso é Big Data cara, as empresas usam isso como diferencial. Hoje vale muito mais os dados e as combinações que eles tem do que o aplicativo. Ai a dificuldade é encontrar o profissional que dominia isso, Ai estão pegando muito desses caras de estatísticas, contabilidade pra trabalhar com Big Data. É um mercado grande e não tem pofissional"]
},
{
	"id":5,
	"user":"Daniel",
	"avatar":"daniel.jpg",
	"phrases":["Tchauu!",
			"Vai achando...",
			"Sei...",
			"Arrasou em..."]
},
{
	"id":6,
	"user":"Henrique",
	"avatar":"henrique.jpeg",
	"phrases":["Só faltou mais arroz.",
			"Ficou bom di mais."]
},
{
	"id":7,
	"user":"Chicó",
	"avatar":"chico.jpg",
	"phrases":["Uma porçãozinha de Service Workers pra todo mundo?",
			"Se eu te contar uma história você não vai acreditar.",
			"Uma vez lá no barreiro...",
			"Top!",
			"Maravilha."]
},
{
	"id":8,
	"user":"Buscapé",
	"avatar":"buscape.png",
	"phrases":["Nãããão...",
			"Entããão...",
			"Então, mas é isso que eu estou falando",
			"suapryshx fjrayssjfue cbrasekfpir Mariana ksadjfh ds ueandep agygsys fasdfm aqui no Sebrae, não é?"]
},
{
	"id":9,
	"user":"Diego",
	"avatar":"diego.jpeg",
	"phrases":["Nóóoo mano","Credo mano que nojo!"]
},
{
	"id":10,
	"user":"Jansen",
	"avatar":"jansen.png",
	"phrases":["I é poqui é"]
},
]

let lastUser = -1;
exports.getRandom  = ()=>{
	let userId = parseInt(Math.random()*users.length)
	while(userId===lastUser){
		this.getRandom();
	}
	let user = JSON.parse(JSON.stringify(users[userId]));
	let index = parseInt(Math.random()*user.phrases.length);
	lastUser=userId;
	user.phrases = user.phrases[index]; 

	return user;
}