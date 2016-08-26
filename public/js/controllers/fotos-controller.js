angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
		console.log("Hello");
	})
	.error(function(erro) {
		console.log(erro);
	});

	/*recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(foto) {

		recursoFoto.delete({fotoId: foto._id}, function() {
			var indiceDaFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
		});
	};*/

});
