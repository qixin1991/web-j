module.exports = `package $pkgName.ctrl;

import io.qixin.framework.context.Pager;
import io.qixin.framework.context.Res;
import io.qixin.framework.utils.JsonConvert;
import $pkgName.dto.$entityDto;
import $pkgName.entity.$entity;
import $pkgName.param.$entityParam;
import $pkgName.param.$entityUpdateParam;
import $pkgName.service.$entityService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by web-j on $createAt
 */
@Api(description = "$entity")
@RestController
@RequestMapping("/$pluralize")
public class $entityCtrl {

    @Autowired
    private $entityService $firstLowerService;

    @GetMapping("")
    public Res<Pager<$entityDto>> page(@ModelAttribute $entityParam param) {
        return $firstLowerService.page(param);
    }

    @GetMapping("/{id}")
    public Res<$entityDto> detail(@PathVariable("id") Integer id) {
        return $firstLowerService.detail(id);
    }

    @PostMapping("")
    public Res<$entity> create(@RequestBody $entityUpdateParam param) {
        param.setId(null);
        $entity $firstLower = JsonConvert.transferData(param, $entity.class);        
        $firstLower = $firstLowerService.save($firstLower);
        return new Res($firstLower);
    }

    @PutMapping("")
    public Res<$entity> update(@RequestBody $entityUpdateParam param) {
        $entity $firstLower = JsonConvert.transferData(param, $entity.class);        
        $firstLower = $firstLowerService.save($firstLower);
        return new Res($firstLower);
    }

    @DeleteMapping("/{id}")
    public Res delete(@PathVariable("id") Integer id) {
        $firstLowerService.delete(id);
        return new Res();
    }
}
`