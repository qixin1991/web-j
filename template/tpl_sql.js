module.exports = `package $pkgName.sql;

import $pkgName.param.$entityParam;

/**
 * Created by web-j on $createAt
 */
public class $entitySql {


    public String page($entityParam param) {
        StringBuilder sql = new StringBuilder("select t.* ");
        sql.append(pageCondition(param));
        sql.append(" limit #{offset},#{size}");
        return sql.toString();
    }

    private StringBuilder pageCondition($entityParam param) {
        StringBuilder condition =  new StringBuilder(" from $entityLower as t where 1=1");
        return condition;
    }

    public String pageCount($entityParam param) {
        StringBuilder sql = new StringBuilder("select count(t.id) ");
        sql.append(pageCondition(param));
        return sql.toString();
    }
}

`