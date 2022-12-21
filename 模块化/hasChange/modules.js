const Module = (function() {
    const modules = {};
    return {
        define(name,deps,module) {
            //如果有依赖就获取依赖
            for(let i = 0;i < deps.length;i++) {
                deps[i] = modules[deps[i]]; 
            };
            //保存模块,并将需要的依赖传入
            modules[name] = module.apply(module,deps); 
        },
        get(name) {
            return modules[name];
        }
    }
})();

Module.define("A",[],function() {
    return {
        hello(name) {
            return `hello,${name}.`;
        }
    }
});
Module.define("B",["A"],function(A) {
    return {
        helloUP(name) {
            return A.hello(name).toLocaleUpperCase();
        }
    }
});
let result = Module.get("B").helloUP("pzj");

console.log(result);

