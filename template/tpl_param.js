module.exports = `package $pkgName.param;

import io.qixin.framework.param.PageParam;
import io.swagger.annotations.ApiModel;

/**
 * Created by web-j on $createAt
 */
@ApiModel("$entityParam")
public class $entityParam extends PageParam{

}
`