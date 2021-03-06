module.exports = `package $pkgName.mapper;

import $pkgName.dto.$entityDto;
import $pkgName.param.$entityParam;
import $pkgName.sql.$entitySql;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by web-j on $creatAt
 */
@Component
@Mapper
public interface $entityMapper {
    
    @SelectProvider(type = $entitySql.class, method = "page")
    List<$entityDto> page($entityParam param);

    @SelectProvider(type = $entitySql.class, method = "pageCount")
    Integer pageCount($entityParam param);

    @Select("select * from $entityLower where id = #{id}")
    $entityDto detail(Integer id);
}
`