angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function ($scope) {
    
    $scope.app = 'Lista Telefonica';
    $scope.contatos = [
        {
            nome: 'Pedro',
            telefone: '999998888'
        },
        {
            nome: 'Ana',
            telefone: '999997777'
        },
        {
            nome: 'Maria',
            telefone: '999996666'
        }
    ];
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };

});