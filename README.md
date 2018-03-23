# web-j

Scaffold for Spring Boot.

Spring Boot 项目的脚手架，自动生成三层架构的文件。

**NOTE:** 如果项目为多个Gradle子项目组成的，请先切换到对应的子项目根目录下使用该脚手架，否则不需要。

### Usage

```shell
Version:0.1.0
Usage: web-j operation [new | delete] option [package_name] [module_name]

Example:
         web-j new io.qixin.sss.api Users                Create Controller,Service,DAO,Mapper,Param,DTO,SQL files.
         web-j del io.qixin.sss.api Users                Delete all the module files.
```

支持配置文件读取包名,在项目根目录下创建配置文件 `web-j.json`:

```json
{
    "pkgName": "io.qixin.sss.api"
}
```

如果配置了包名,则可以直接使用:  `web-j new User`

单词转换为复数，使用了以下开源项目的部分源码:

Thanks for [https://github.com/martinandert/inflected](https://github.com/martinandert/inflected)