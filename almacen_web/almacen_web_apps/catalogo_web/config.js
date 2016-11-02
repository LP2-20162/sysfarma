var catalogoUrl = 'http://localhost:9000/api/repositorio/';


var config = {

    repositorioUrl: repositorioUrl,


};

app

    .value('configRepositorio', config);


app.constant('ROUTERS2', {
    "xxx": {
        "url": "/xxx",
        "templateUrl": "templates/xxx.html"
    },
    "repositorio": {
        "url": "/repositorio",
        "views": {
            "": {
                "templateUrl": "app/views/layout.html"
            },
            "aside": {
                "templateUrl": "app/views/aside.html"
            },
            "content": {
                "templateUrl": "app/views/content.html"
            }
        }
    },

    "repositorio.repositorio": {
        "url": "/repositorio",
        "template": "<div ui-view ></div>"
    },

    "repositorio.repositorio.categorias": {
        "url": "/categorias",
        "data": {
            "section": "Repositorio",
            "page": "Categorías"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/categorias/index.html"
    },
    "repositorio.repositorio.categoriasNew": {
        "url": "/categorias/new",
        "data": {
            "section": "Repositorio",
            "page": "Categorías"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/categorias/form.html"
    },
    "repositorio.repositorio.categoriasEdit": {
        "url": "/categorias/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Categorías"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/categorias/form.html"
    },

    "repositorio.repositorio.autores": {
        "url": "/autores",
        "data": {
            "section": "Repositorio",
            "page": "Autores"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/autores/index.html"
    },
    "repositorio.repositorio.autoresNew": {
        "url": "/autores/new",
        "data": {
            "section": "Repositorio",
            "page": "Autores"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/autores/form.html"
    },
    "repositorio.repositorio.autoresEdit": {
        "url": "/autores/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Autores"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/autores/form.html"
    }

});
