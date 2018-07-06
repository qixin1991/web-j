module.exports = `package $pkgName.param;

import io.swagger.annotations.ApiModel;

/**
 * Created by web-j on $createAt
 */
@ApiModel("$entityUpdateParam")
public class $entityUpdateParam {
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
`