module.exports = `package $pkgName.repository;

import $pkgName.entity.$entity;
import org.springframework.stereotype.Repository;

/**
 * Created by web-j on $createAt
 */
@Repository
public interface $entityDao extends BaseDao<$entity, Integer> {
}
`