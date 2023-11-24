const sayHello = async (text) => {
    return text + " MORNING";
};

const doingSomething = async (status) => {
    try {
        const a = await sayHello(status);
        console.log(a);
    } catch (error) {
        console.log(error);
    }
};

doingSomething("GOOD"); 
