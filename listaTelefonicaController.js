angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function ($scope, $http) {
    
    $scope.app = 'Lista Telefônica';
    $scope.contatos = [
    ];
    $scope.operadoras = [
        {
            nome: 'Oi',
            codigo: 14,
            categoria: 'Celular'
        },
        {
            nome: 'Vivo',
            codigo: 15,
            categoria: 'Celular'
        },
        {
            nome: 'Tim',
            codigo: 41,
            categoria: 'Celular'
        },
        {
            nome: 'Claro',
            codigo: 21,
            categoria: 'Celular'
        },
        {
            nome: 'GVT',
            codigo: 25,
            categoria: 'Fixo'
        },
        {
            nome: 'Embratel',
            codigo: 21,
            categoria: 'Fixo'
        }
    ];

    var carregarContatos = function () {
        $http.get("http://localhost:3001/contatos").then(function (response) {
            $scope.contatos = response.data;
        }).catch(function (response) {
            $scope.message = "Aconteceu um problema: " + response.data;
        });
    };
    var carregarOperadoras = function () {
        $http.get("http://localhost:3001/operadoras").then(function (response) {
            $scope.operadoras = response.data;
        });
    };


    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        $http.post('http://localhost:3001/contatos', contato).then(function (response) {
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        carregarContatos();
        });
    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
});