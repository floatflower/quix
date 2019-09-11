class ServiceManager
{
    constructor()
    {
        this.services = new Map();
    }

    get(serviceName)
    {
        if(this.services.has(serviceName)) {
            return this.services.get(serviceName);
        } else {
            return null;
        }
    }

    set(serviceName, serviceInstance, option) {
        this.services.set(serviceName, serviceInstance);
    }
}

const serviceManager = new ServiceManager();

module.exports = serviceManager;