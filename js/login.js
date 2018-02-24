function criarUsuario(){

	var email = $('#email_login').val();
	var senha = $('#senha_login').val();

	firebase.auth().createUserWithEmailAndPassword(email,senha)
	.then(function(user){
		alert("Usuario Criado. Faça o login");
		$("formLogin").trigger("reset");
		console.log(user);

	})
	.catch(function(error){
		alert('Erro ao cadastrar. Tente outro E-mail');
		console.log(error);
	});

}


function login(){

	var email = $('#email_login').val();
	var senha = $('#senha_login').val();

	firebase.auth().signInWithEmailAndPassword(email,senha)
	.then(function(user){
		window.location.href = "sistema.html";

	})
	.catch(function(error){
		alert('Erro ao cadastrar. Tente outro E-mail');
		console.log(error);
	});

}

function sair(){

	firebase.auth().signOut();
	window.location.href = "index.html";

}


function logarComFacebook(){

	var provedor = new firebase.auth.FacebookAuthProvider();

	logarComProvedor( provedor );

}

function logarComGithub(){

	var provedor = new firebase.auth.GithubAuthProvider();

	logarComProvedor( provedor );

}

function logarComGoogle(){

	var provedor = new firebase.auth.GoogleAuthProvider();

	logarComProvedor( provedor );

}




function logarComProvedor( provedor ){

	firebase.auth().signInWithPopup(provedor).then(function(user){
		window.location.href = "sistema.html";
		console.log(user);

	})
	.catch(function(error){
		alert('Login não foi realizado');
		console.log(error);
	});
	
}

