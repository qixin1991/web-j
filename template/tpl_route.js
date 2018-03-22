module.exports = `package $pkgName.ctrl;

import io.qixin.framework.context.Res;
import io.qixin.framework.utils.JsonConvert;
import $pkgName.dto.$entityDto;
import $pkgName.entity.$entity;
import $pkgName.param.$entityParam;
import $pkgName.service.$entityService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by web-j on $createAt
 */
@Api(description = "")
@RestController
@RequestMapping("/$entityLowers")
public class $entityCtrl extends BaseCtrl{

    @Autowired
    private $entityService $entityLowerService;

    @GetMapping("")
    public Res page(@ModelAttribute $entityParam param) {
        return $entityLowerService.page(param);
    }

    @GetMapping("/{id}")
    public Res<$entityDto> detail(@PathVariable("id") Integer id) {
        return $entityLowerService.detail(id);
    }

    @PostMapping("")
    public Res<$entity> create(@RequestBody $entityParam param) {
        $entity $entityLower = $entityLowerService.save(JsonConvert.transferData(param, $entity.class));
        return new Res($entityLower);
    }
}
`