module.exports = `package $pkgName.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by web-j on $createAt
 */
@Entity
@Table(name = "$entityLower")
public class $entity extends BaseEntity {

}
`