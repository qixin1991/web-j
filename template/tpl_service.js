module.exports = `package $pkgName.service;

import io.qixin.framework.context.Res;
import $pkgName.dto.$entityDto;
import $pkgName.entity.$entity;
import $pkgName.mapper.$entityMapper;
import $pkgName.param.$entityParam;
import $pkgName.repository.$entityDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by web-j on $createAt
 */
@Service
public class $entityService extends BaseService<$entity, Integer> {

    @Autowired
    private $entityDao $firstLowerDao;

    @Autowired
    private $entityMapper $firstLowerMapper;

    public Res page($entityParam param) {
        List list = $firstLowerMapper.page(param);
        Integer count = $firstLowerMapper.pageCount(param);
        return this.successWithPage(list, count);
    }

    public Res<$entityDto> detail(Integer id) {
        return this.success($firstLowerMapper.detail(id));
    }
}
`