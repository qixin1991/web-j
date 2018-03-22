module.exports = `package $pkgName.mapper;

import io.qixin.sss.api.dto.$entityDto;
import io.qixin.sss.api.param.$entityParam;
import io.qixin.sss.api.sql.$entitySql;
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

    @Select("select * from $entity where id = #{id}")
    $entityDto detail(Integer id);
}
`