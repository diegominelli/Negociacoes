export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando o prototype ${target.constructor.name} 
      e adicionando getter para a propriedade ${propertyKey}`);
        const getter = function () {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elementodo DOM com o seletor 
        ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
