app
// =========================================================================
// Show View and Delete Autor 
// =========================================================================
    .controller("AutorCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.autor = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Autor.query(params, function(r) {
            $scope.lista = r.results;
            $scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("Error in list:" + JSON.stringify(err));
            toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
        });
    };
    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = $scope.fields;
        params.query = $scope.query;
        $scope.list(params);
    };

    $scope.onReorder = function(order) { //TODO
        $log.log('Order: ' + order);
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            repositorioService.Autor.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó autor:" + JSON.stringify(d));
                toastr.success('Se eliminó autor ' + d.nombre, 'Autor');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Autor
// =========================================================================
.controller("AutorSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.autor = {};

    $scope.sel = function() {
        repositorioService.Autor.get({ id: $stateParams.id }, function(r) {
            $scope.autor = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.autor.id) {
            repositorioService.Autor.update({ id: $scope.autor.id }, $scope.autor, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó autor ' + r.nombre, 'Autor');
                $state.go('repositorio.repositorio.autores');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Autor.save($scope.autor, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó autor ' + r.nombre, 'Autor');
                $state.go('repositorio.repositorio.autores');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.autores');


        
    };
});
