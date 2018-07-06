module.exports = `package $pkgName.dto;

import io.swagger.annotations.ApiModel;

/**
 * Created by web-j on $createAt
 */
@ApiModel("$entityDto")
public class $entityDto {
    
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
`