export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.aplly(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape em ação na clase 
      ${this.constructor.name} para o método ${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
