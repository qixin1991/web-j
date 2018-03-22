const fs = require('fs'),
    path = require('path'),
    tpl = require(path.join(__dirname, 'template')),
    pwd = process.cwd(),
    operation = process.argv[2], // new or delete
    pkgName = process.argv[3], // java 包名
    mName = process.argv[4]; // 模块名称

switch (operation) {
    case 'new':
        createModule(pkgName, mName);
        break;
    case 'del':
        deleteModule(pkgName, mName);
        break;
    default:
        usageInfo();
        break;
}

function usageInfo() {
    const usage = `Version:${require(path.join(__dirname, 'package.json')).version}\nUsage: web-j operation [new | delete] option [package_name] [module_name]\n\nExample:\n\t web-j new io.qixin.sss.api Users \t\t Create Controller,Service,DAO,Mapper,Param,DTO,SQL files.\n\t web-j del io.qixin.sss.api Users \t\t Delete all the module files.`;
    console.log(usage);
}

async function createModule(pkgName, mName) {
    await createEntity(pkgName, mName);
    await createDao(pkgName, mName);
    await createMapper(pkgName, mName);
    await createService(pkgName, mName);
    await createRoute(pkgName, mName);
}

async function createEntity(pkgName, mName) {
    // 1.create entity
    await new Promise((resolve, reject) => {
        let entity = tpl.entity.replace(/\$pkgName/g, pkgName)
            .replace(/\$createAt/g, new Date())
            .replace(/\$entityLower/g, mName.toLowerCase())
            .replace(/\$entity/g, mName);
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.writeFile(path.join(pwd, 'src', 'main', 'java', pkgPath, 'entity', mName + '.java'), entity, (err) => {
            if (err)
                throw err;
            console.log(` ---> Create Entity\tsuccess...`);
            resolve();
        })
    })
    // 2.create dto
    await new Promise((resolve, reject) => {
        let dto = tpl.dto.replace(/\$pkgName/g, pkgName)
            .replace(/\$createAt/g, new Date())
            .replace(/\$entity/g, mName);
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.writeFile(path.join(pwd, 'src', 'main', 'java', pkgPath, 'dto', mName + 'Dto.java'), dto, (err) => {
            if (err)
                throw err;
            console.log(` ---> Create DTO\tsuccess...`);
            resolve();
        })
    })
    // 3.create param
    await new Promise((resolve, reject) => {
        let param = tpl.param.replace(/\$pkgName/g, pkgName)
            .replace(/\$createAt/g, new Date())
            .replace(/\$entity/g, mName);
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.writeFile(path.join(pwd, 'src', 'main', 'java', pkgPath, 'param', mName + 'Param.java'), param, (err) => {
            if (err)
                throw err;
            console.log(` ---> Create Param\tsuccess...`);
            resolve();
        })
    })
    // 4.create sql class
    await new Promise((resolve, reject) => {
        let sql = tpl.sql.replace(/\$pkgName/g, pkgName)
            .replace(/\$createAt/g, new Date())
            .replace(/\$entityLower/g, mName.toLowerCase())
            .replace(/\$entity/g, mName);
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.writeFile(path.join(pwd, 'src', 'main', 'java', pkgPath, 'sql', mName + 'Sql.java'), sql, (err) => {
            if (err)
                throw err;
            console.log(` ---> Create SQL\tsuccess...`);
            resolve();
        })
    })
}

async function createDao(pkgName, mName) {
    await new Promise((resolve, reject) => {
        let dao = tpl.dao.replace(/\$pkgName/g, pkgName)
            .replace(/\$createAt/g, new Date())
            .replace(/\$entity/g, mName);
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.writeFile(path.join(pwd, 'src', 'main', 'java', pkgPath, 'repository', mName + 'Dao.java'), dao, (err) => {
            if (err)
                throw err;
            console.log(` ---> Create Dao\tsuccess...`);
            resolve();
        })
    })
}

async function createMapper(pkgName, mName) {
    await new Promise((resolve, reject) => {
        let mapper = tpl.mapper.replace(/\$pkgName/g, pkgName)
            .replace(/\$createAt/g, new Date())
            .replace(/\$entity/g, mName);
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.writeFile(path.join(pwd, 'src', 'main', 'java', pkgPath, 'mapper', mName + 'Mapper.java'), mapper, (err) => {
            if (err)
                throw err;
            console.log(` ---> Create Mapper\tsuccess...`);
            resolve();
        })
    })
}

async function createService(pkgName, mName) {
    await new Promise((resolve, reject) => {
        let service = tpl.service.replace(/\$pkgName/g, pkgName)
            .replace(/\$createAt/g, new Date())
            .replace(/\$entity/g, mName);
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.writeFile(path.join(pwd, 'src', 'main', 'java', pkgPath, 'service', mName + 'Service.java'), service, (err) => {
            if (err)
                throw err;
            console.log(` ---> Create Service\tsuccess...`);
            resolve();
        })
    })
}

async function createRoute(pkgName, mName) {
    await new Promise((resolve, reject) => {
        let route = tpl.route.replace(/\$pkgName/g, pkgName)
            .replace(/\$createAt/g, new Date())
            .replace(/\$entityLower/g, mName.toLowerCase())
            .replace(/\$entity/g, mName);
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.writeFile(path.join(pwd, 'src', 'main', 'java', pkgPath, 'ctrl', mName + 'Ctrl.java'), route, (err) => {
            if (err)
                throw err;
            console.log(` ---> Create Controller\tsuccess...`);
            resolve();
        })
    })
}



async function deleteModule(pkgName, mName) {
    // 1.delete entity
    await new Promise((resolve, reject) => {
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.unlink(path.join(pwd, 'src', 'main', 'java', pkgPath, 'entity', mName + '.java'), (err) => { // asynchronous delete
            console.log(` ---> Delete Entity\tsuccess...`);
            resolve();
        });
    });
    // 2.delete dto
    await new Promise((resolve, reject) => {
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.unlink(path.join(pwd, 'src', 'main', 'java', pkgPath, 'dto', mName + 'Dto.java'), (err) => { // asynchronous delete
            console.log(` ---> Delete DTO\tsuccess...`);
            resolve();
        });
    });
    // 3.delete param
    await new Promise((resolve, reject) => {
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.unlink(path.join(pwd, 'src', 'main', 'java', pkgPath, 'param', mName + 'Param.java'), (err) => { // asynchronous delete
            console.log(` ---> Delete Param\tsuccess...`);
            resolve();
        });
    });
    // 4.delete dao
    await new Promise((resolve, reject) => {
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.unlink(path.join(pwd, 'src', 'main', 'java', pkgPath, 'dao', mName + 'Dao.java'), (err) => { // asynchronous delete
            console.log(` ---> Delete DAO\tsuccess...`);
            resolve();
        });
    });
    // 5.delete sql
    await new Promise((resolve, reject) => {
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.unlink(path.join(pwd, 'src', 'main', 'java', pkgPath, 'sql', mName + 'Sql.java'), (err) => { // asynchronous delete
            console.log(` ---> Delete SQL\tsuccess...`);
            resolve();
        });
    });
    // 6.delete mapper
    await new Promise((resolve, reject) => {
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.unlink(path.join(pwd, 'src', 'main', 'java', pkgPath, 'mapper', mName + 'Mapper.java'), (err) => { // asynchronous delete
            console.log(` ---> Delete Mapper\tsuccess...`);
            resolve();
        });
    });
    // 7.delete service
    await new Promise((resolve, reject) => {
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.unlink(path.join(pwd, 'src', 'main', 'java', pkgPath, 'service', mName + 'Service.java'), (err) => { // asynchronous delete
            console.log(` ---> Delete Service\tsuccess...`);
            resolve();
        });
    });
    // 8.delete route
    await new Promise((resolve, reject) => {
        let pkgPath = ""
        pkgName.split('.').forEach((v) => { pkgPath += v + '/' })
        fs.unlink(path.join(pwd, 'src', 'main', 'java', pkgPath, 'ctrl', mName + 'Ctrl.java'), (err) => { // asynchronous delete
            console.log(` ---> Delete Controller\tsuccess...`);
            resolve();
        });
    });
}