module.exports = `package $pkgName.service;

import io.qixin.framework.context.Res;
import $pkgName.dto.$entityDto;
import $pkgName.entity.$entity;
import $pkgName.mapper.$entityMapper;
import $pkgName.param.$entityParam;
import $pkgName.repository.BaseDao;
import $pkgName.repository.$entityDao;
import $pkgName.service.impl.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by web-j on $createAt
 */
@Service
public class $entityService extends BaseServiceImpl<$entity, Integer> {

    private $entityDao $firstLowerDao;

    @Autowired
    private $entityMapper $firstLowerMapper;

    @Override
    @Resource
    public void setBaseDao(BaseDao<$entity, Integer> baseDao) {
        this.baseDao = baseDao;
        this.$firstLowerDao = ($entityDao) baseDao;
    }

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