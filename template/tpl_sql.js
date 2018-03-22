module.exports = `package $pkgName.sql;

import $pkgName.param.$entityParam;
import org.springframework.util.StringUtils;

/**
 * Created by web-j on $createAt
 */
public class $entitySql {


    public String page($entityParam param) {
        StringBuilder sql = new StringBuilder("select * from $entityLowers as b where 1=1 ");
        sql.append(pageCondition(param));
        sql.append(" limit #{offset},#{size}");
        return sql.toString();
    }

    public StringBuilder pageCondition($entityParam param) {
        StringBuilder condition =  new StringBuilder("");
        return condition;
    }

    public String pageCount($entityParam param) {
        StringBuilder sql = new StringBuilder("select count(*) from $entityLowers as b where 1=1 ");
        sql.append(pageCondition(param));
        return sql.toString();
    }
}

`